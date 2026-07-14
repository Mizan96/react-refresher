import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from './Card.jsx'


export default function Main() {
  return (
    <MDBRow>
      <MDBCol md='3'>
        :Left 
      </MDBCol>
      <MDBCol md='6'>
        <Card />
      </MDBCol>
      <MDBCol md='3'>
        Right
      </MDBCol>
    </MDBRow>
  );
}