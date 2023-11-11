import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Card, Container, Dropdown, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { attachDisciplineAction, attachTeacherAction, dettachDisciplineAction, dettachTeacherAction } from "../../store/action-creators/action-creators";
import { increaseDisciplineCountAction } from "../../store/action-creators/action-creators";
import './DisciplinePage.css'

const DisciplinePage = () => {
    const dispatch = useDispatch()

    const { id } = useParams()
    const disciplines = useSelector(state => state.discipline.disciplines)
    const discipline = disciplines.find(discipline => discipline.id === parseInt(id));
    const teachers = useSelector(state => state.teacher.teachers)
    const teachersMas = discipline.teachers
    const user = useSelector(state => state.user)
    
    const attachTeacher = (teacherId, name, surname, disciplines) => {
        const attachedTeacher = teachersMas.some((attachedTeacher) => 
            attachedTeacher.id === teacherId
        )
        if (attachedTeacher) {
            alert("Этот преподаватель уже прикреплен к данной дисциплине")
        } else if (disciplines.length < 3) {
            dispatch(attachTeacherAction({ disciplineId: discipline.id,id:teacherId, name, surname }))
            dispatch(attachDisciplineAction({ id: teacherId, disciplineId: discipline.id, name: discipline.name }))
        } else {
            alert("Преподаватель не может вести более трех дисциплин")
        }
        
    }
    const dettachTeacher = (teacherId) => {
        dispatch(dettachTeacherAction({ disciplineId: discipline.id, teacherId: teacherId }))
        dispatch(dettachDisciplineAction({id: teacherId, disciplineId: discipline.id}))
        
    }
    return ( 
        <Container
            className="discipline-page_container"
        >
            <Card
                className="discipline-page_card"
            >
                <h1>
                    Название дисциплины: {discipline.name}
                </h1>
                <h2>
                    Кол-во часов в семестр: {discipline.hours}
                </h2>
                <h3
                className="teachers-title"
                >
                    Список преподаваетлей:
                </h3>
                <div
                    className="teachers-wrapper"
                >
                    <div
                        className="teachers-list"
                    >
                        
                        <ListGroup
                            className="list-group"
                        >
                        {teachersMas.map((teacher, index) => (
                            <ListGroup.Item key={index}
                                className="list-item"
                            >
                                {teacher.name} {teacher.surname}
                                {(user.role === 'responsible' || user.role === 'manager') && (
                                    <Button
                                        className="teachers-list_btn"
                                        variant='warning'
                                        onClick={() => dettachTeacher(teacher.id)}
                                    >
                                        Открепить
                                    </Button>
                                )}
                            </ListGroup.Item>
                        ))}
                        </ListGroup>
                    </div>
                    <div
                        className="teachers-dropDown"
                    >
                        {(user.role === 'responsible' || user.role === 'manager') && (
                            <Dropdown>
                                <Dropdown.Toggle>
                                    Выберите преподавателя
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {teachers.map(teacher => 
                                        <Dropdown.Item
                                            key={teacher.id}
                                            onClick={() => attachTeacher(teacher.id, teacher.name, teacher.surname, teacher.disciplines)}
        
                                        >
                                            {teacher.name} {teacher.surname}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </div>
                </div>
            </Card>
        </Container>
     );
}
 
export default DisciplinePage;