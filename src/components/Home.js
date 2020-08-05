import React from 'react'
import styled from 'styled-components'
import { Row, Col, Image } from 'react-bootstrap'
import {} from 'react-icons/fa'
import SmallEmailForm from './SmallEmailForm'

const Styles = styled.div`
    background: #f7f7f7;
    .home-banner-row {
        margin-left: 0;
        height: 65vh;
        width: 100%;
        // background: #e76f51;
        background: url(https://bit.ly/3i4tjOq);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .home-banner-top-row {
        margin-left: 0;
        height: 75%;
        background: rgb(231, 111, 81, 0.9);
    }
    .brand-text-col {
        text-align: center;
    }
    .brand-text-div {
        color: #f7f7f7;
        margin-top: 5vh;
        font-size: 5vh;
        height: 100%;
    }
    .brand-text-div > p {
        margin-top: 3vh;
        font-size: 3vh;
    }
    .home-banner-bottom-row {
        margin-left: 0;
        background: rgb(231, 111, 81, 0.9);
        height: 25%;
    }
`

export default function Home() {
    return (
        <Styles>
            <Row className='home-banner-row'>
                <Row
                className='home-banner-top-row'>
                    <Col xs={0}md={2}/>
                    <Col 
                    className='brand-text-col'
                    xs={12} md={4}>
                    <div className='brand-text-div'>
                        Pestr helps you keep track of issues and get more done.
                    <p>
                        Increase your productivity and communication with 
                        Pestr. Making issue tracking fun, flexible, and simple.
                    </p>
                    </div>
                </Col>
                <Col 
                className='brand-text-col'
                xs={12} md={4}>
                    <Image src='https://bit.ly/2PoGSMm' />
                </Col>
                <Col xs={0}md={2}/>
                </Row>
                <Row className='home-banner-bottom-row'>
                    <SmallEmailForm/>
                </Row>
            </Row>
        </Styles>
    )
}
