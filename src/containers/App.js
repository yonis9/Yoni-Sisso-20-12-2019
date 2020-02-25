import React, { Component } from 'react';
import { connect} from 'react-redux'
import './App.css';
import NavBar from '../components/NavBar';
import ToggleDayNight from '../components/ToggleDayNight';
import Home from '../components/Home';
import Favorites from '../components/Favorites'
import ErrorBoundry from '../components/ErrorBoundry';
import Footer from '../components/Footer';

import { setLocation, requestForcast, toggleFavorite, setRoute, toggleDayNight } from '../actions.js'

const mapStateToprops = state => {
  return {
    location: state.changeLocation.location,
    route: state.changeRoute.route,
    lightBackground: state.toggleDayNight.lightBackground,
    favorites: state.requestFavoritesData.favorites
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    toggleFavorite: (bool) => dispatch(toggleFavorite(bool)),
    setLocation: (locationKey) => dispatch(setLocation(locationKey)),
    getForcast: (cityKey, isCelsius) => dispatch(requestForcast(cityKey, isCelsius)),
    onRouteChange: (route) => dispatch(setRoute(route)),
    toggleDayNight: (bool) => dispatch(toggleDayNight(bool))
  }
}



class App extends Component {

  componentWillMount() {
    console.log('willmount')
  }

  componentDidMount() {
    this.props.getForcast(this.props.location.Key, this.props.isCelsius);
    this.handleFavorite()
    this.getGeolocation()
  }

  componentDidUpdate(prevprops, prevSate) {
    if (prevprops.location.Key !== this.props.location.Key) {
      this.props.getForcast(this.props.location.Key, this.props.isCelsius);
      this.handleFavorite()
    }

    if (prevprops.isCelsius !== this.props.isCelsius) {
      this.props.getForcast(this.props.location.Key, this.props.isCelsius)
    }

    if(this.props.favorites.length && !JSON.parse(localStorage.getItem('favorites'))) {
      this.props.toggleFavorite(false);
      this.props.getFavoritesData([])
    }

    if (prevprops.route !==this.props.route) {
      this.handleFavorite();
    }
    if(prevprops.route !==this.props.route && this.props.route === 'favorites') { 
      this.props.getFavoritesData(JSON.parse(localStorage.getItem('favorites')))
    }
  }

  getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.requestGeolocation);
    }
  }

   requestGeolocation = (position) => {
     const lat = position.coords.latitude;
     const lon= position.coords.longitude;
     fetch(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_API_KEY}&q=${lat},${lon}`)
     .then(response=> response.json())
     .then(data => {
       this.props.setLocation(data)
     })
  }

handleFavorite = () => {
  if(localStorage.getItem('favorites')) {
    let arrayOfFavs = JSON.parse(localStorage.getItem('favorites'))
    if(Number.isInteger(this.checkIfFavorite(arrayOfFavs, this.props.location.Key))) {
      this.props.toggleFavorite(true)
    } else {
      this.props.toggleFavorite(false)
    }
  } 
  else {
    this.props.toggleFavorite(false)
  }
}
  
  checkIfFavorite = (array, cityKey) => {
    for (let i=0; i<array.length; i++) {
      if(cityKey === array[i].Key) {
        return i
      }
    }
    return false
  }

  onButtonClick = () => {
    if(this.props.lightBackground) {
      document.getElementsByTagName('body')[0].style.backgroundColor = '#333';
      document.getElementsByTagName('body')[0].style.color = '#f2f2f2';
    } else {
      document.getElementsByTagName('body')[0].style.backgroundColor = '#f2f2f2';
      document.getElementsByTagName('body')[0].style.color = '#333';
    }
    this.props.toggleDayNight(!this.props.lightBackground)
  }


  onFavoriteClick = () => {
    let fav = localStorage.getItem('favorites');
     
      if (!fav) {
        localStorage.setItem('favorites', JSON.stringify([this.props.location]))
        this.props.toggleFavorite(true)
      } else if (!Number.isInteger(this.checkIfFavorite(JSON.parse(fav), this.props.location.Key))) {
        fav = JSON.parse(fav);
        fav.push(this.props.location);
        localStorage.setItem('favorites', JSON.stringify(fav))
        this.props.toggleFavorite(true)
      } else {
        let fav = JSON.parse(localStorage.getItem('favorites'));
        const i = this.checkIfFavorite(fav, this.props.location.Key);
        fav.splice(i, 1);
        localStorage.setItem('favorites', JSON.stringify(fav))
        this.props.toggleFavorite(false)
    }

  }

  onFavCardClick = (locObj) => {
    this.props.setLocation(locObj)
    this.props.onRouteChange('home')
  }

  render() {
    const { onRouteChange, route } = this.props;
    return (
      
      <div className="App">
        <NavBar onRouteChange={onRouteChange}/>
        <ErrorBoundry>
        <ToggleDayNight onButtonClick={this.onButtonClick}/>

  {     route === 'home' ? 
    
          <Home onFavoriteClick={this.onFavoriteClick} />
                :
          <Favorites 
               onFavCardClick={this.onFavCardClick} />
          
          } 
          <Footer />
        </ErrorBoundry>
      </div>
    );
  }
}


export default connect(mapStateToprops, mapDispatchToprops)(App);
