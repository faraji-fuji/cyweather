import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBCardText
} from 'mdb-react-ui-kit';

export default function Input(props) {
  return (
    <form className='mt-2 bg-white p-5 shadow rounded'>
      <MDBCardText className='text-center'> Enter Your Cordinates</MDBCardText>
      <MDBRow className='mb-4 ' >
        <MDBCol>
          <MDBInput type="number" id='form3Example1' label='Longitude' onChange={props.saveLatitude} />
        </MDBCol>
        <MDBCol>
          <MDBInput type="number" id='form3Example2' label='Latitude' onChange={props.saveLongitude} />
        </MDBCol>
      </MDBRow>
      <MDBBtn block>Reset</MDBBtn>
    </form>
  );
}