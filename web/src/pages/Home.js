import React from 'react'
import {Col, Row} from 'react-bootstrap'
import LeftSection from '../components/LeftSection'

const Home  = () => {
  return(
    <div style={{
        backgroundColor: '#f0f2f5',
        overflowX: 'hidden',
        height: '100vh',
        width: '100%',
      }} >
      <Row>
        <Col>
          <LeftSection/>
        </Col>
        <Col></Col>
      </Row>
    </div>
  )
}

export default Home
