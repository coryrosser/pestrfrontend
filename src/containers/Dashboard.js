import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import SideBar from '../components/SideBar'
import styled from 'styled-components'

const Styles = styled.div`
    height: 92.5vh;
    .main-row {
        width: 100%;
        height: 100%;
        margin-left: 0;
        background: rgb(0,0,0,0.025);
    }
    .sidebar-col {
        margin-left: 0;
        background: #F4A261;
    }
`

class Dashboard extends Component {
    componentDidMount() {
        console.log(this.props.current_user)
    }
    render() {
        return (
            <Styles>
                <Row className='main-row'>
                    <Col
                    className='sidebar-col'
                    md={.5}>
                        <SideBar />
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Styles>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        current_user: state.userReducer.current_user,
        users: state.userReducer.users,
        isLoggedIn: state.userReducer.isLoggedIn,
    }
}
export default connect(mapStateToProps, null)(Dashboard)