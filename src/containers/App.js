import React, { useEffect } from 'react';
import { connect} from 'react-redux'

import { selectRoute, selectLightBackground } from '../redux/app/app-selectors';
import { selectError } from '../redux/home/home-selectors'
import { setLocation } from '../redux/home/home-actions'

import NavBar from '../components/NavBar/NavBar';
import ToggleDayNight from '../components/ToggleDayNight/ToggleDayNight';
import Home from '../components/Home/Home';
import Favorites from '../components/Favorites/Favorites'
import ErrorBoundry from '../components/ErrorBoundary/ErrorBoundry';
import Footer from '../components/Footer/Footer';

import './App.css';

const App = ({ route, lightBackground, setLocation, error }) => {

  useEffect(() =>{
    if (error) {
      alert("We are sorry, the app's allowed number of forcast requests has been exceeded")
    }
  }, [error])

  useEffect(() => {
    if(lightBackground) {
      document.getElementsByTagName('body')[0].style.backgroundColor = '#f2f2f2';
      document.getElementsByTagName('body')[0].style.color = '#333';
    } else {
      document.getElementsByTagName('body')[0].style.backgroundColor = '#333';
      document.getElementsByTagName('body')[0].style.color = '#f2f2f2';
    }
  }, [lightBackground])


  useEffect(() => {
    getGeolocation()
  }, [])

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(requestGeolocation);
    }
  }

   const requestGeolocation = (position) => {
     const lat = position.coords.latitude;
     const lon= position.coords.longitude;
     fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_API_KEY}&q=${lat},${lon}`)
     .then(response=> response.json())
     .then(data => {
       setLocation(data)
     })
     .catch(error => console.log(error))
  }

  return (
    
    <div className="App">
      <NavBar />
      <ErrorBoundry>
      <ToggleDayNight />
      {     
        route === 'home' 
        ? 
        <Home />
        :
        <Favorites />
      } 
        <Footer />
      </ErrorBoundry>
    </div>
  );

}


const mapStateToprops = (state) => ({
    route: selectRoute(state),
    lightBackground: selectLightBackground(state),
    error: selectError(state)
})

const mapDispatchToProps = dispatch => ({
  setLocation: (locationObj) => dispatch(setLocation(locationObj))
})

export default connect(mapStateToprops, mapDispatchToProps)(App);
