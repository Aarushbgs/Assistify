import React, { useState, useRef } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import WorkerList from "./WorkerList";
import ServiceUnavailable from "./ServiceUnavailable";

import "../App.css";

const libraries = ["places"];

const Search = ({ setWorkers, setHasSearched }) => {
  const [coords, setCoords] = useState(null);
  const locationRef = useRef(null);
  const [open, setOpen] = useState(false);


  const [service, setService] = useState("");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
    libraries,
  });

  const handleSelect = (value) => {
    setService(value);
    setOpen(false);
  };

  const searchBoxRef = useRef(null);
  const [address, setAddress] = useState("");

  const onPlacesChanged = () => {
    console.log("Place Changed Fired");

    if (!searchBoxRef.current) {
      console.log("Autocomplete ref missing");
      return;
    }

    const place = searchBoxRef.current.getPlace();

    const newCoords = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };

    console.log("NEW COORDS:", newCoords);

    setCoords(newCoords);
  };

  if (!isLoaded) return <div>Loading...</div>;

  const handleSearch = async () => {
    console.log("coords:", coords);

    if (!coords) {
      alert("Please select a location from dropdown");
      return;
    }

    if (!service) {
      alert("Please select service");
      return;
    }

    console.log(coords.lng, coords.lat, service);

    if (!coords) {
      alert("Select location");
      return;
    }

    if (!service) {
      alert("Select service");
      return;
    }

    try {
      const res = await fetch(
        `https://assistify-7zve.onrender.com/api/workers/nearby?lat=${coords.lat}&lng=${coords.lng}&service=${service}`,
      );

      const data = await res.json();
      setWorkers(data);
      setHasSearched(true);
    } catch (err) {
      console.error("Error fetching nearby workers:", err);
    }
  };

  return (
    <>
      <div className="search-wrapper">
        <div className="search-bar">
          <div
            className="search-item"
            onClick={() => locationRef.current?.focus()}
          >
            <label>Location</label>

            <Autocomplete
              onLoad={(auto) => {
                console.log("Autocomplete Loaded");
                searchBoxRef.current = auto;
              }}
              onPlaceChanged={onPlacesChanged}
            >
              <input
                type="text"
                name="location"
                placeholder="Search location"
                ref={locationRef}
              />
            </Autocomplete>
          </div>

          <div className="search-item" onClick={() => setOpen(!open)}>
            <label>Service</label>

            <div className="service-display">{service || "Select Service"}</div>

            {open && (
              <div className="service-dropdown">
                <div onClick={() => handleSelect("Cook")}>Cook</div>
                <div onClick={() => handleSelect("Maid")}>Maid</div>
                <div onClick={() => handleSelect("Both")}>Both</div>
              </div>
            )}
          </div>

          <button className="search-btn" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#757575"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="7.5"></circle>
              <line x1="21" y1="21" x2="16.5" y2="16.5"></line>
            </svg>
          </button>
        </div>
      </div>
       </>
  );
};

export default Search;
