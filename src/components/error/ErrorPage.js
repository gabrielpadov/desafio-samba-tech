// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Button } from 'react-materialize';

const ErrorPage = () => (
  <Row>
    <Col m={8} s={12}>
        <h5>Page not found</h5>
        <Card>
          <Row>
          <p>Sorry, there is nothing to see here</p>
            <Col s={12} m={12}>
              <Button waves='light' 
                className="right grey darken-2" node='a' href='/'> 
                Back</Button>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default ErrorPage;