import React, { useState } from "react";
import TeacherList from "../../components/UI/TeacherList/TeacherList";
import { Container, Button } from "react-bootstrap";
import CreateTeacher from "../../components/modals/CreateTeacher";
import './Teachers.css'

const Teachers = () => {
    const [teacherVisible, setTeachervisible] = useState(false)
    return (
        <Container
            className='teachers_container'
        >
            <Button
                className='teachers_btn'
                onClick={() => setTeachervisible(true)}
            >
                <h2>
                    Добавить преподавателя
                </h2>
            
            </Button>
            <CreateTeacher show={teacherVisible} onHide={() => setTeachervisible(false)}/>
           <TeacherList/>
        </Container>
    );
}
 
export default Teachers
