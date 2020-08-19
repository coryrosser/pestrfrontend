import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Row, Col, Card} from 'react-bootstrap'
import styled from 'styled-components'
import UserGroupCard from './UserGroupCard'
import ActiveGroupContainer from '../containers/ActiveGroupContainer'

const Styles = styled.div`
    .notification-row {
        width: 100%;
        margin-left: 0;
    }
    .updates-row {
        width: 100%;
        margin-left: 0;
    }
    .groups-col {
    }
`

class UserDash extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    renderUserGroups = () => {
        return this.props.current_user.groups.map(entry => {
            return <UserGroupCard
                    group={entry}/>
        })
    }
    render() {
        return (
            <Styles>
                <Row className='notification-row'>
                    <h1>Notifs here</h1>
                </Row>
                <Row className='updates-row'>
                    <Col 
                    xs={12} md={4}
                    className='groups-col'>
                        {this.renderUserGroups()}
                    </Col>
                    <Col xs={12} md={4}>
                        {this.props.activeGroup ? 
                        <ActiveGroupContainer />
                        : 
                        <div>
                            Choose a group to view
                        </div>}
                    </Col>
                </Row>
            </Styles>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        current_user: state.userReducer.current_user,
        user_groups: state.groupReducer.groups,
        activeGroup: state.groupReducer.activeGroup
    }
}

export default connect(mapStateToProps, null)(UserDash)