// Importando o React
import React from "react";
// Importando os components necessários da lib react-bootstrap
import { Container, Row, Col, Button, Card} from 'react-bootstrap';

const ErrorPage = () => (
  <Container>
  <Row className="justify-content-md-center" style={{ marginTop: '4rem'}}>
    <Col xs={12} md={8}>
      <Card className="text-center">
     
      <img href="/"
        src="https://yt3.ggpht.com/a/AGF-l79rcSfCz8vufHWw5DP4cTMYGvBpu135UlyfWw=s900-c-k-c0xffffffff-no-rj-mo"
        width="20%"
        height="20%"
        alt="Breaking Bad logo"
      />
        <Card.Body>
          <Card.Title>Page not found</Card.Title>
            <Card.Text>
              Sorry, there is nothing to see here
            </Card.Text>
          <Button variant="success" href='/'>Back</Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
);

export default ErrorPage;
