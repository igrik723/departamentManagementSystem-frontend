import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, ListGroup, Dropdown, Button } from "react-bootstrap";
import { attachDesiredDisciplineAction, dettachDesiredDisciplineAction } from "../../store/action-creators/action-creators";
import './TeacherPage.css'

const TeacherPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const teachers = useSelector(state => state.teacher.teachers)
    const teacher = teachers.find(teacher => teacher.id === id)
    const disciplines = useSelector(state => state.discipline.disciplines)

    const attachDesiredDiscipline = (disciplineId, name) => {
        const attachedDesiredDiscipline = teacher.desiredDisciplines.some((desiredDiscipline) => 
           desiredDiscipline.disciplineId === disciplineId
        )
        if (attachedDesiredDiscipline) {
            alert('Данная дисциплина уже добавлена в желаемое')
        } else {
            dispatch(attachDesiredDisciplineAction({id: teacher.id, disciplineId, name}))
        }
    }
    const dettachDesiredDiscipline = (disciplineId) => {
        dispatch(dettachDesiredDisciplineAction({ id: teacher.id, disciplineId }))
    }

    return ( 
        <div className="teacher-page_wrapper">
            <Card
                className="teacher-page_card"
            >
                <h1
                    className="about_title"        
                >
                    Обо мне
                </h1>
                <h2
                    className="teacher-page_title"
                >
                    Имя : {teacher.name} {teacher.surname}
                </h2>
                <h3
                    className="teacher-page_title"
                >
                    Ученая степень: {teacher.position}
                </h3>
                <span
                   className="teacher-page_info"
                >
                    Пароль: {teacher.password} Идентификационный номер: {teacher.id}
                </span>
                <div
                    className="teacher-page_container"
                >
                    <div>
                        <h3
                            className="teacher-page_title"
                        >
                            Назначенные дисциплины:
                        </h3>
                        {teacher.disciplines.length > 0
                            ? <ListGroup
                                className="teacher-page_list"
                            >
                                    {teacher.disciplines.map((discipline, index) => (
                                        <ListGroup.Item key={index}
                                            className="list_item"
                                        >
                                            {discipline.name}
                                        </ListGroup.Item>
                                    ))}
                            </ListGroup>
                            :
                            <h4
                                className="teacher-page_title"
                            >
                                Дисциплины не назначены
                            </h4>
                        }
                    </div>
                    <div>
                        <h3
                            className="teacher-page_title"
                        >
                            Желаемые дисциплины:
                        </h3>
                        <ListGroup>
                            {teacher.desiredDisciplines.map((discipline, index) =>
                                <ListGroup.Item key={index}
                                    style={{width:'100%'}}
                                >
                                    {discipline.name}
                                     <Button
                                        variant='warning'
                                        className="m-2"
                                        onClick={() => dettachDesiredDiscipline(discipline.disciplineId)}
                                    >
                                        Открепить
                                    </Button>
                                </ListGroup.Item>
                                

                            )}
                        </ListGroup>
                        <Dropdown>
                                <Dropdown.Toggle
                                    className="mt-2"
                                    variant="black"
                                    style={{backgroundColor:'white'}}
                                >
                                    Добавить желаемую дисциплину
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {disciplines.map(discipline => 
                                        <Dropdown.Item
                                            key={discipline.id}
                                            onClick={() => attachDesiredDiscipline(discipline.id, discipline.name)}
                                        >
                                            {discipline.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                    </div>
                </div>
                
            </Card>
        </div>
     );
}
 
export default TeacherPage;