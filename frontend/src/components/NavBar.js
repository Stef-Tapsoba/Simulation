import { useEffect, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../assests/img/logo.svg';
// import navIcon1 from '../assests/img/nav-icon1.svg';
// import navIcon2 from '../assests/img/nav-icon2.svg';
// import navIcon3 from '../assests/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#forum" className={activeLink === 'forum' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('forum')}>Forum</Nav.Link>
                        {/* <Nav.Link href="#login">Log In</Nav.Link> */}
                    </Nav>
                    <span className='navbar-text'>
                        <button className='login' onClick={() => console.log('gettin started...')}>
                            <span>Get Started!</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    
}