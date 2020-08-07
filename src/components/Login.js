import React, { Component } from 'react';
import { Form, Button, Card, InputGroup} from 'react-bootstrap'
import {FaLock, FaEnvelope} from 'react-icons/fa'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Styles = styled.div`
`

class Login extends Component {
    state={
        email: '',
        password: '',
    }

    setEmail = (value) => {
        this.setState({email: value})
    }
    setPassword = (value) => {
        this.setState({password: value})
    }
    onLogin = (user) => {
        debugger
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user})
        })
        .then(res => res.json())
        .then(user => {
            localStorage.setItem('user', `${user.user.id}` )
            this.props.sendLogin(user.user)
            this.props.history.push('/dashboard')
        })
    }
    render() {
        return (
            <Styles>
                <div className='contain'>
                    <Card className='form-card'>
                    <p className='form-header'>Sign In</p>
                    <p className='form-header2'>Welcome back to Pestr</p>
                    <Form
                className='login-form'
            onSubmit={e => {
                e.preventDefault()
                this.onLogin(this.state)
            }}
            >
                <Form.Group 
                className='email'
                controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <InputGroup>
                    <InputGroup.Prepend className='prepend'> 
                    <InputGroup.Text className='prepend-text'><FaEnvelope className='icon'/></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control 
                    className='user-input'
                    value={this.state.email}
                    onChange={e => this.setEmail(e.target.value)}
                    type="email" 
                    placeholder="Enter email" />
                    </InputGroup>

                </Form.Group>

                <Form.Group 
                className='pass'
                controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <InputGroup>
                    <InputGroup.Prepend className='prepend'> 
                    <InputGroup.Text className='prepend-text'><FaLock className='icon'/></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control 
                    className='user-input'
                    value={this.state.password}
                    onChange={e => this.setPassword(e.target.value)}
                    type="password" placeholder="Password" />
                    </InputGroup>
                </Form.Group>
                <Button 
                className='sub-btn'
                variant="primary" type="submit">
                    Login
                </Button>
                <p className='card-form-text'>Don't have an account? <a href='/signup'>Sign Up!</a></p>
            </Form>
                    </Card>
                </div>
            </Styles>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendLogin: (user) => dispatch({type: 'LOGIN', user: user})
    } 
}

export default withRouter(connect(null, mapDispatchToProps)(Login))
