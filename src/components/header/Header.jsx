import React from "react";
import { useLocation } from "react-router-dom";
import {VscHome} from "react-icons/vsc"
import {AiFillShop} from "react-icons/ai"
import { IoIosNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../../src/base.scss';
import './header.scss'
export default function Header(){
    function NavBar(){
        const location = useLocation();
        return(
            <Navbar>
                <Container>
                    <Nav activeKey={location.pathname}>
                        <Nav.Link href="/">
                            <VscHome className="nav-icon"/>
                        </Nav.Link>
                        <Nav.Link  href="/marketplace">
                            <AiFillShop className="nav-icon"/>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
    return(
        <div className="header__container">
            <div className="header-item header-item__left">
                <a className="logo" href="/">
                    <span>P</span>
                </a>
            </div>
            <div className="header-item header-item__middle">
                <NavBar/>
            </div>
            <div className="header-item header-item__right">
                <div className="header-item__right--icon">
                    <TiMessages/> 
                </div>
                <div className="header-item__right--icon">                  
                    <IoIosNotifications/>
                </div>
                <a href="/idUser" className="avata_user"></a>
            </div>
        </div>
    )
}