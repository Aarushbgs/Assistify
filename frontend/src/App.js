import React,{useState} from 'react';
import Search from './components/Search';
import ExplorePlaces from './components/ExplorePlaces';
import Navbar from './components/Navbar';
import WorkerList from './components/WorkerList';
import ServiceUnavailable from './components/ServiceUnavailable';

export default function App(){

  const [workers, setWorkers] = useState([]);
  const [ hasSearched, setHasSearched ] = useState(false);
  
  return(
    <div>
       <Navbar/>
       <Search 
       setWorkers={setWorkers}
       setHasSearched={setHasSearched} />   

        {!hasSearched ? (
        <ExplorePlaces />
      ) : workers.length > 0 ? (
        <WorkerList workers={workers} />
      ) : (
        <ServiceUnavailable />
      )}    
  
   </div>
  )
}