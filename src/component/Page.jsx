import {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Burger from "./Burger.jsx";
import Order from "./Order.jsx";

class Page extends Component {
    render() {
        return (
            <Container>
                <Row className="text-center">
                    <Col sm={7}>
                        <h2 className="text-success">Bài tập Burger CyberSoft</h2>
                        <h5 className="text-danger">Bánh burger của bạn</h5>
                        <Burger/>
                    </Col>
                    <Col sm={5}>
                        <h4 className="text-success pt-5">Chọn thức ăn</h4>
                        <Order/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Page;