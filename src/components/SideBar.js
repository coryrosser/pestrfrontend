import React from 'react'
import {Row, Col, ListGroup} from 'react-bootstrap'
import {AiOutlineHome, AiOutlineTeam} from 'react-icons/ai'
import {IoIosAddCircleOutline} from 'react-icons/io'
import styled from 'styled-components'

const Styles = styled.div`
    .sidebar-list {
        background: none;
    }
    .sidebar-list-item {
        background: none;
        border: none;
    }
    .sidebar-icon {
        color: #f7f7f7;
        font-size: 4vh;
    }
    a {
        text-decoration: none;
        color: #f7f7f7;
    }
`

const SideBar = () => {
    return (
        <Styles>
            <ListGroup className='sidebar-list'>
                <ListGroup.Item className='sidebar-list'>
                    <a href='/'><AiOutlineHome className='sidebar-icon'/></a>
                </ListGroup.Item>
                <ListGroup.Item className='sidebar-list'>
                    <AiOutlineTeam className='sidebar-icon'/>
                </ListGroup.Item>
                <ListGroup.Item className='sidebar-list'>
                    <IoIosAddCircleOutline className='sidebar-icon'/>
                </ListGroup.Item>
                <ListGroup.Item className='sidebar-list'>
                    <AiOutlineHome className='sidebar-icon'/>
                </ListGroup.Item>
            </ListGroup>
        </Styles>
    )
}
export default SideBar