import React from 'react';
import NavBar from './Components/NavBar';
import './index.scss';
import LocationCard from './Components/LocationCard';
import data from './data';

export default function App() {
  const cards = data.map(item => {
    return (
      <div>
        <LocationCard 
          img={item.img}
          country={item.country}
          maps_link={item.maps_link}
          landmark={item.landmark}
          year={item.year}
          description={item.description}
        />
        {item.id<3 && <hr className='rule'/>}
      </div>
    )
  })

  return (
    <div className="App">
      <NavBar />
      {cards}
    </div>
  );
}
