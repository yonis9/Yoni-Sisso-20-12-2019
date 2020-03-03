import React from 'react';

import SearchField from '../SearchField/SearchField'
import CurrentWeather from '../CurrentWeather/CurrentWeather';

const Home = () => {
    return (
        <div>
            <SearchField />
            <CurrentWeather />
        </div>
    )
}


export default Home;