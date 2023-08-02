import React from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

const Register = () => {
    return (
        <>
            <Container className='mt-3'>
                <Row>
                    <Col xs={4}>
                        <Card>
                            <Card.Header style={{ backgroundColor: "orange" }}>

                                <h3>Register</h3>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group >
                                        <Form.Control className='mb-3' type="text" placeholder="Username">
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className='mb-3' type="text" placeholder="Email" >
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group>

                                        <Form.Control className='mb-3' type="text" placeholder="Password" >
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group >
                                        <Button variant="success"> Register </Button>
                                    </Form.Group>
                                </Form>

                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>


        </>
    )
}
export default Register