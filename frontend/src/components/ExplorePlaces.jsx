import React from "react";
import "./ExplorePlaces.css";

const places = [
  {
    city: "Begusarai",
    Worker: "124+ maid & cooks",
    image:
      "https://images.unsplash.com/photo-1602056820935-316884c035f8",
  },
  {
    city: "Patna",
    Worker: "89+ maid & cooks",
    image:
      "https://images.unsplash.com/photo-1673102166075-7fe2c11c6773",
  },
  {
    city: "Delhi",
    Worker: "156+ maid & cooks",
    image:
      "https://images.unsplash.com/photo-1678966432189-d58296e45ad2",
  },
  {
    city: "Bangalore",
    Worker: "92+ maid & cooks",
    image:
      "https://images.unsplash.com/photo-1698332137428-3c4296198e8f",
  },
  {
    city: "Chandigarh",
    Worker: "67+ maid & cooks",
    image:
      "https://images.unsplash.com/photo-1598625776361-024551c79cb5",
  },
  {
    city: "Mumbai",
    Worker: "112+ maid & cooks",
    image:
      "https://images.unsplash.com/photo-1562979314-bee7453e911c",
  },
];

const ExplorePlaces = () => {
  return (
    <section className="explore-section">
      <div className="explore-header">
        <h2>Discover Skilled Helpers in Your Area</h2>
        <button>See all</button>
      </div>

      <div className="places-container">
        {places.map((place, index) => (
          <div className="place-card" key={index}>
            <img src={place.image} alt={place.city} />
            <div className="place-content">
              <h3>{place.city}</h3>
              <p>{place.Worker}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExplorePlaces;