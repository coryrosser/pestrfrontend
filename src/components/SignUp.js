import React from 'react'
import { connect } from 'react-redux'
import { Form, Button, Card, Row, Col, InputGroup} from 'react-bootstrap'
import {FaLock, FaEnvelope, FaUser} from 'react-icons/fa'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.div`
`

class SignUp extends React.Component {

    state={
        first_name:'',
        last_name:'',
        email:'',
        password:'',
    }
    setFirstName = (value) => {
        this.setState({first_name: value})
    }
    setLastName = (value) => {
        this.setState({last_name: value})
    }
    setEmail = (value) => {
        this.setState({email: value})
    }
    setPassword = (value) => {
        this.setState({password: value})
    }
    // submitUserSignup = user => {
    //     debugger
    //     fetch('http://localhost:3000/users', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({user: user})
    //     })
    //     .then(res => res.json())
    //     .then(user => {
    //         this.props.createUser(user)
    //         localStorage.setItem('user', user.user.id)
    //         console.log(this.props.current_user)
    //         this.props.history.push('/')
    //     })
    // }

    render() {
        return (
            <Styles>
                <div className='contain'>
                <Card className='form-card'>
                    
                <p className='form-header'>Sign Up</p>
                    <p className='form-header2'>Welcome to Pestr</p>
                <Form
                className='login-form'
                onSubmit={(e) => {
                e.preventDefault()
                this.submitUserSignup(this.state)}}>
                <Form.Group className='email' controlId="formGridFirstName">
                
                <InputGroup>
                    <InputGroup.Prepend className='prepend'> 
                    <InputGroup.Text className='prepend-text'><FaUser className='icon'/></InputGroup.Text>
                    </InputGroup.Prepend>
                <Form.Control
                placeholder='First Name'
                className='user-input'
                value={this.state.first_name}
                onChange={e => this.setFirstName(e.target.value)}
                type="text" />
                </InputGroup>
                </Form.Group>

                <Form.Group className='email' controlId="formGridLastName">
                <Form.Label></Form.Label>
                <InputGroup>
                    <InputGroup.Prepend className='prepend'> 
                    <InputGroup.Text className='prepend-text'><FaUser className='icon'/></InputGroup.Text>
                    </InputGroup.Prepend>
                <Form.Control
                placeholder='Last Name'
                className='user-input'
                value={this.state.last_name}
                onChange={e => this.setLastName(e.target.value)}
                type="text"  />
                </InputGroup>
            </Form.Group>
                <Form.Group className='email' controlId="formGridEmail">
                <Form.Label></Form.Label>
                <InputGroup>
                    <InputGroup.Prepend className='prepend'> 
                    <InputGroup.Text className='prepend-text'><FaEnvelope className='icon'/></InputGroup.Text>
                    </InputGroup.Prepend>
                <Form.Control
                placeholder='Email'
                className='user-input'
                value={this.state.email}
                onChange={e => this.setEmail(e.target.value)}
                type="text" />
                </InputGroup>
                </Form.Group>

                <Form.Group className='email' controlId="formGridPassword">
                <Form.Label></Form.Label>
                <InputGroup>
                    <InputGroup.Prepend className='prepend'> 
                    <InputGroup.Text className='prepend-text'><FaLock className='icon'/></InputGroup.Text>
                    </InputGroup.Prepend>
                <Form.Control
                placeholder='Password'
                className='user-input'
                value={this.state.password}
                onChange={e => this.setPassword(e.target.value)}
                type="password" />
                </InputGroup>
            </Form.Group>
            <Button className='sub-btn' type="submit">
            Submit
            </Button>
            
        </Form>
                </Card>
                </div>
            </Styles>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        // createUser: (user) => dispatch({type: 'CREATE_USER', user: user})
    }

}
const mapStateToProps = state => {
    return {
        // current_user: state.userReducer.current_user
    }
    
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))
