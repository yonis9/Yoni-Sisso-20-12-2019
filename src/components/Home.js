import React from 'react';
import SearchField from './SearchField'
import CurrentWeather from './CurrentWeather';

const Home = ({ onSearchChange, searchOutputs, setLocation, currentConditions,fiveDayForcast,  location, toggleUnit, isCelsius, onFavoriteClick, isFavorite }) => {
    return (
        <div>
            <SearchField onSearchChange={onSearchChange} searchOutputs={searchOutputs} setLocation={setLocation}/>
            <CurrentWeather currentConditions={currentConditions}
                            location={location} 
                            fiveDayForcast={fiveDayForcast}
                            toggleUnit={toggleUnit}
                            isCelsius={isCelsius}
                            onFavoriteClick={onFavoriteClick}
                            isFavorite={isFavorite}/>
        </div>
    )
}

export default Home;