import {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './burger.css';

class Page extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={7}>Ronaldo</Col>
                    <Col sm={5}>Ronaldo</Col>
                </Row>
            </Container>
        );
    }
}

export default Page;