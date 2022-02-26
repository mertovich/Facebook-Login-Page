import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import '../App.css'

const RightSection = () => {
  return (
    <div className='right-section-div'>
      <Container className='right-section-container' style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
      }} >
        <Form style={{
          textAlign: 'center',
          borderBottomStyle: 'solid',
          borderBottomColor: 'lightgrey',
          borderBottomWidth: '1px',
          paddingBottom: '3%',
          marginBottom: '10%',
        }} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control style={{
              padding: '12px',
            }} type="email" placeholder="Email address or phone number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control style={{
              padding: '12px',
            }} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button style={{
            width: '100%',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '5%',
          }} variant="primary" type="submit">
            Login
          </Button>
          <a href='' style={{
            color: '#0b5ed7',
            textDecoration: 'none',
            fontSize: '1rem',
          }}  >Forgotten password?</a>
        </Form>
        <div style={{
          textAlign: 'center',
          marginBottom: '5%',
        }} >
          <a href='' style={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: '#36a420',
            padding: '15px',
            borderRadius: '5px',
          }}>Create New Account</a >
        </div>
      </Container>
      <div style={{
        textAlign: 'center',
      }} >
      <p style={{
        marginTop: '10%',
      }} > <b>Create a Page</b> for a celebrity, brand or business.
      </p>
      </div>
    </div>
  )
}

export default RightSection
