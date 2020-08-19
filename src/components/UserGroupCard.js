import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Styles = styled.div`
    .group-card-row {
        background: rgb(42, 157, 143, 0.75);
        border: rgb(42, 157, 143, 0.4) solid 1px;
        border-radius: .5vh;
        color: #f7f7f7;
        cursor: pointer;
        &:hover {
            background: rgb(42, 157, 143);
            transition: 0.3s;
        }
    }
    .group-name-col {
        font-size: 3vh;
        text-align: center;
    }
    }
    .group-code-col {
        font-size: 2vh;
        text-align: center;
    }
`

function UserGroupCard(props) {
    let group = props.group
    console.log(group)
    return (
        <Styles>
            <Row 
                onClick={() => {
                console.log('click')
                props.setActiveGroup(group)
                
            }}
            className='group-card-row'>
                <Col className='group-name-col' xs={12}>{group.name}</Col>
                <Col className='group-code-col' xs={12}>Group Code: {group.group_code}</Col>
            </Row>
        </Styles>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveGroup: (group) => dispatch({
            type: 'SET_ACTIVE', group: group
        })
    }
}

export default connect(null, mapDispatchToProps)(UserGroupCard)
