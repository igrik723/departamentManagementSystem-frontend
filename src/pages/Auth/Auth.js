import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card, Form, Button, InputGroup } from 'react-bootstrap';
import './Auth.css'
import { managerEnterAction, responsibleEnterAction, teacherEnterAction } from '../../store/action-creators/action-creators';
import { useNavigate } from 'react-router-dom';
import { DISCIPLINES_ROUTE, TEACHER_ROUTE } from '../../utils/consts';

const Auth = () => {
    const teachers = useSelector(state => state.teacher.teachers)
    const [showPassword, setShowPassword] = useState(false)
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const teacherCheck = (id, password) => {
        const foundTeacher = teachers.find(teacher => 
            teacher.id === id && teacher.password === password    
        )
        if (foundTeacher) {
            dispatch(teacherEnterAction())
            navigate(TEACHER_ROUTE + '/' + foundTeacher.id)
        } else {
            alert("Неправильный id или пароль")
        }
    }

    const check = (id, password) => {
        if (id === 'responsible' && password === 'admin') {
            dispatch(responsibleEnterAction())
            navigate(DISCIPLINES_ROUTE)
        } else if (id === 'manager' && password === 'admin') {
            dispatch(managerEnterAction())
            navigate(DISCIPLINES_ROUTE)
        } else {
            teacherCheck(id, password)
        }
    }
    return ( 
        <div className='Auth'>
            <Container
                className='auth-container'
            >
                <Card className='card'>
                    <h1 className='main-title'>Управление кафедрой</h1>
                    <h2 className='name-title'>РУТ МИИТ</h2>
                    <h2 className='auth-title'>Авторизация</h2>
                    <Form>
                        <Form.Control
                            className='email-form'
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder='Введите ваш идентификационный номер...'
                            
                        />
                        <Form.Control
                            className='pas-form'
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Введите ваш пароль...'
                        />
                        <Button
                            className='hide-btn'
                            variant='outline-secondary'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword? 'скрыть' : 'показать'}
                        </Button>
                    </Form>
                    <Button
                        className='success-btn'
                        variant='outline-success'
                        onClick={() => check(id, password)}
                    >
                        Войти
                    </Button>
                </Card>
            </Container>
        </div>
       
     );
}
 
export default Auth;