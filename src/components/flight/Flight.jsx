import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const Flight = ({ flight, currency }) => {
    return (
        <Container>
            <Col>
                <Row>
                    <div>{flight.cityFrom}</div>
                    <div>{flight.flyFrom}</div>
                </Row>
                <Row>
                    <div>{flight.cityTo}</div>
                    <div>{flight.flyTo}</div>
                </Row>
                <Row>
                    <div>{flight.dTime}</div>
                    <div>{flight.aTime}</div>
                </Row>
                <Row>
                    <div>{flight.price}{currency}</div>
                </Row>
                <Row>
                    <div>{flight.route.length - 1}</div>
                </Row>
            </Col>
        </Container>
    )
}

export default Flight
