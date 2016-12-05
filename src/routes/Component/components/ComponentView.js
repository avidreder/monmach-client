import React from 'react'
import './ComponentView.scss'
import MaterialNav from 'components/MaterialNav'
import Footer from 'components/Footer'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'

export const ComponentView = () => (
  <div>
    <Grid fluid>
      <Row>
        <Col md={12}>
          <h1>Components</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Main Menu</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <MaterialNav />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Footer />
        </Col>
      </Row>
    </Grid>
  </div>
)

export default ComponentView
