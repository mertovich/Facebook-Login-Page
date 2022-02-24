import React from 'react'
import { Container } from 'react-bootstrap'

const LeftSection = () =>{
  return(
    <div>
      <Container style={{
        marginTop: '40%',
        marginLeft: '5%',
        }} >
        <h1 style={{
          color: '#1778F2',
          fontSize: '4.0rem',
          fontWeight: 'bold',
        }} >facebook</h1>
        <p style={{
          fontSize: '1.3rem',
          fontWeight: 'bold',
          color: 'grey'
          }}>
            Facebook lets you communicate with people you know 
            and share what's going on in your life.
          </p>
      </Container>
    </div>
  )
}

export default LeftSection
