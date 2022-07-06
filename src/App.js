import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Input from './Input';
import Header from './Header';
import Cardlist from './Cardlist';
import placeHolder from './placeholder';
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);

    //set initial state
    this.state = {
      latitude: "0",
      longitude: "0",
      weatherData: placeHolder,
    }
  }

  render() {
    return (
      <MDBContainer className='mt-2 shadow p-3 bg-light' style={{ maxWidth: '50rem' }}>
        <Header />
        <Input 
        saveLatitude={this.saveLatitude} 
        saveLongitude={this.saveLongitude} 
        />
        <Cardlist weatherData={this.state.weatherData}/>
      </MDBContainer>
    );
  }

  componentDidUpdate(){
    let lat = this.state.latitude;
    let lon = this.state.longitude;

    // check latitude and longitude values
    if (lat == "" || lat > 90 || lat < -90 ){
      lat = "0"
    }

    if (lon == "" || lon > 180 || lat < -180){
      lon = "0"
    }

    //fetch data from api
    let api = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m";
    fetch(api)
      .then(response => response.json())
      .then(data => {
        this.setState({ weatherData: data });
    });
  }

  //functions to save latitude and longitude my modifying state
  saveLatitude = (event) => {
    this.setState({latitude: event.target.value});
    console.log(event.target.value);

    if (this.state.latitude == "" && this.state.longitude == ""){
      this.setState({weatherData: placeHolder});
      console.log('hello');
    }
  }

  saveLongitude = (event) =>{
    this.setState({longitude: event.target.value})
    console.log(event.target.value);

    if (this.state.latitude == "" && this.state.longitude == ""){
      this.setState({weatherData: placeHolder});
      console.log('hello');
    }
  }
}

export default App;