import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button> Test </Button>
      </header>

      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
