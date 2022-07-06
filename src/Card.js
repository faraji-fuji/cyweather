import React from 'react';
import { MDBCard, MDBIcon, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit';

export default function Card(props) {
  return (
    <MDBCard alignment='center' className='my-2 hover-shadow'>
      <MDBCardHeader>{props.time.slice(11,)}</MDBCardHeader>
      <MDBCardBody>
        <div className='container-fluid'>
          <div className='row'>
             <div className='col'>
                <div className='row'>
                  Temperature
                </div>
                <div className='row'>
                  {props.temperature + " "}
                  {props.temperatureUnit}
                </div>
             </div>

             <div className='col'>
                <div className='row'>
                  Wind Speed
                </div>
                <div className='row'>
                  
                  {props.windSpeed + " "}
                  {props.windSpeedUnit}
                </div>
             </div>

             <div className='col'>
                <div className='row'>
                  Humidity
                </div>
                <div className='row'>
                  {props.humidity + " "}
                  {props.humidityUnit}
                </div>
             </div>

             <div className='col'>
                <div className='row'>
                  Cloud Cover
                </div>
                <div className='row'>
                  {props.cloudCover+" "}
                  {props.cloudCoverUnit}
                </div>
             </div>
             
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}