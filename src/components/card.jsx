import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import data from '../assets/data.jsx'

export default function Card() {
    return (
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>

            {data.map((props) => {
                return (
                    <MDBCol className='card-container'>
                        <MDBCard className='h-100'>
                            <MDBCardImage className='card-image'
                                src={props.Image}
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>{props.Name}</MDBCardTitle>
                                <MDBCardText>
                                    {props.Content}
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                )
            })}


        </MDBRow>
    );
}