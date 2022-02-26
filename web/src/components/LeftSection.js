import React from 'react'
import { Container } from 'react-bootstrap'
import '../App.css'

const LeftSection = () => {
  return (
    <div className='left-section-div'>
      <Container>
        <h1 style={{
          color: '#1778F2',
          fontSize: '4.0rem',
          fontWeight: 'bold',
        }} >facebook</h1>
        <p style={{
          fontSize: '1.5rem',
          textAlign: 'justify',
        }}>
          Facebook helps you connect and share with the people in your life.
        </p>
      </Container>
    </div>
  )
}

export default LeftSection
