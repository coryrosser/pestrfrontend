import React from 'react'
import styled from 'styled-components'
import { Row, Col, Form, Button} from 'react-bootstrap'
import {} from 'react-icons/fa'

const Styles = styled.div`
    width: 100%;

    .email-form-row {
        width: 100%;
        height: 100%;
    }
    .email-form-input {
        width: 50%;
        background: #f7f7f7;
        border: #f7f7f7 solid 1px;

        &:focus {
            outline: none;
            box-shadow: none;
        }
    }
    .e-form {
        width: 100%;
    }
    .e-form-row {
        width: 100%;
    }
    .e-form-btn {
        margin-left: 3vh;
        background: rgb(42, 157, 143);
        border: rgb(38, 70, 83, 0.4) solid 1px;

        &:hover {
            background: rgb(42, 157, 143, 0.7);
            transition: 0.3s;
        }
    }
`
export default function SmallEmailForm() {
    return (
        <Styles>
            <Row className='email-form-row'> 
                <Col xs={0} md={2}/>
                <Col xs={12} md={8}>
                    <Form className='e-form'>
                        <Form.Row className='e-form-row'>
                        <Form.Control 
                        className='email-form-input'
                        size="lg" 
                        type="email" 
                        placeholder="Email" />
                        <Button 
                        className='e-form-btn'
                        size='lg'
                        type="submit">
                            Sign Up!
                        </Button>
                        </Form.Row>
                    </Form>
                </Col>
                <Col xs={0} md={2}/>
            </Row>
        </Styles>
    )
}
