import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Navbar, NavLink, Container, Nav, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_ROUTE } from '../../../utils/consts';
import { exitAction } from '../../../store/action-creators/action-creators';
import './NavBar.css'

const NavBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const exit = () => {
    dispatch(exitAction())
    navigate(LOGIN_ROUTE)
  }
  return (
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        className='nav-bar'
      >
        <Container
          className='nav-container'
        >
          <Navbar.Brand href="https://www.miit.ru/">РУТ МИИТ</Navbar.Brand>
          <Nav className="me-auto">
          {user.role !== 'teacher' && (
            <Nav.Link as={Link} to="/disciplines">Дисциплины</Nav.Link>
          )}
          {user.role === 'responsible' && (
            <Nav.Link as={Link} to="/teachers">Преподаватели</Nav.Link>
          )}
        </Nav>
        <Button
          variant='warning'
          onClick={() => exit()}
        >
          Выйти
        </Button>
        </Container>
      </Navbar>
     );
}
 
export default NavBar;