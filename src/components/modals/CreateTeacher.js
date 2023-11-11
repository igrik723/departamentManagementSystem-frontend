import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import { addTeacherAction } from "../../store/action-creators/action-creators";

const CreateTeacher = ({ show, onHide }) => {
    const dispatch = useDispatch()
    const[name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [position, setPosition] = useState('')
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const teacher = useSelector(state => state.teacher)
    const isIdExist = teacher.teachers.some((teacher) => teacher.id === id )
    

    const createTeacher = () => {
        isIdExist
            ? alert('Преподаватель с таким номером уже существует')
            : dispatch(
            addTeacherAction(
                {
                    id: id,
                    name: name,
                    surname: surname,
                    age: age,
                    position: position,
                    password: password,
                    desiredDisciplines: [],
                    disciplines: [],
                }
            )
        )
    
        onHide()
    }
    return ( 
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить преподавателя
                </Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите имя преподавателя"
                        value={name}
                        onChange={ e => setName(e.target.value)} 
                        
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите фамилию преподавателя"
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите возраст преподавателя"
                        value={age}
                        type='number'
                        onChange={e => setAge(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ученую степень преподавателя"
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите идентификационный номер  преподавателя"
                        value={id}
                        type='number'
                        onChange={e => setId(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль  преподавателя"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    
                    
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="outline-danger" onClick={() => { onHide(); setName(''); setSurname(''); setPosition(''); setId(''); setPassword('')}}>Закрыть</Button>
                <Button variant="outline-success" onClick={createTeacher}>Добавить</Button>
            </ModalFooter>
        </Modal>
     );
}
 
export default CreateTeacher;