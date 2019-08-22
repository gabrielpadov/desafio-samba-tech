// Importando o React
import React from "react";
// Importando os components necessários da lib react-bootstrap
import { Container, Row, Col, Button, Card} from 'react-bootstrap';

const ErrorPage = () => (
  <Container>
  <Row>
    <Col Col xs={12} md={8}>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Page not found</Card.Title>
            <Card.Text>
              Sorry, there is nothing to see here
            </Card.Text>
          <Button variant="primary" href='/'>Back</Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
);

export default ErrorPage;