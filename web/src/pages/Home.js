import React from 'react'
import {Col, Row} from 'react-bootstrap'
import LeftSection from '../components/LeftSection'
import RightSection from '../components/RightSection'

const Home  = () => {
  return(
    <div style={{
        backgroundColor: '#f0f2f5',
        overflowX: 'hidden',
        height: '80vh',
        width: '100%',
      }} >
      <Row>
        <Col sm={true}>
          <LeftSection/>
        </Col>
        <Col>
          <RightSection/>
        </Col>
      </Row>
    </div>
  )
}

export default Home
