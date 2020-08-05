import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import {FaToolbox} from 'react-icons/fa'

const Styles = styled.div`
    .nav-row {
        margin-left: 0;
        background: #e76f51;
        width: 100%;
        height: 7.5vh;
    }
    .brand-col {
        text-align: center;
        justify-content: center;
    }
    .nav-brand-text {
        font-family: 'Pacifico', cursive;
        height: 100%;
        font-size: 4vh;
    }
    .nav-brand-text > a {
        text-decoration: none;
        color: #f7f7f7;
    }
    .nav-link-col {
        text-align: center;
        font-size: 3vh;
        padding: 1.5vh;
        cursor: pointer;
        &:hover {
            background: rgb(42, 157, 143);
            // border-left: rgb(255,255,255, 0.3) solid 1px;
            // border-right: rgb(255,255,255, 0.3) solid 1px;
            transition: 0.3s;
        }
    }
    .nav-link-item {
        text-decoration: none;
        color: #f7f7f7;
        margin-top: 1vh;
    }
`

export default function Navbar() {
    return (
        <Styles>
            <Row className='nav-row'>
                <Col 
                xs={6} md={3}
                className='brand-col'>
                    <div className='nav-brand-text'>
                        <a 
                        href='/'>
                            <FaToolbox /> Pestr
                        </a>
                    </div>
                </Col>
                <Col
                md={7}/>
                <Col
                md={1}
                className='nav-link-col'>
                    <a 
                    href='/login'
                    className='nav-link-item'>
                        Login
                    </a>
                </Col>
                <Col
                md={1}
                className='nav-link-col'>
                    <a 
                    href='/signup'
                    className='nav-link-item'>
                        Sign Up
                    </a>
                </Col>
            </Row>
        </Styles>
    )
}
