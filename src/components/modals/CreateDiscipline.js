import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import { addDisciplineAction } from "../../store/action-creators/action-creators";

const CreateDiscipline = ({ show, onHide }) => {
    const dispatch = useDispatch()
    const discipline = useSelector(state => state.discipline)
    const[name, setName] = useState('')
    const [hours, setHours] = useState('')
    const createDiscipline = () => {
        dispatch(addDisciplineAction({ id: discipline.disciplines.length + 1, name: name, hours: hours, teachers:[]}))
        setName('')
        setHours('')
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
                    Добавить дисциплину
                </Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название дисциплины"
                        value={name}
                        onChange={ e => setName(e.target.value)} 
                        
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите кол-во часов в семестр"
                        type="number"
                        value={hours}
                        onChange={e => setHours(e.target.value)}
                    />
                    
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="outline-danger" onClick={() => { onHide(); setName(''); setHours('')}}>Закрыть</Button>
                <Button variant="outline-success" onClick={createDiscipline}>Добавить</Button>
            </ModalFooter>
        </Modal>
     );
}
 
export default CreateDiscipline;