import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeTeacherAction } from '../../../store/action-creators/action-creators';
import TeacherItem from '../TeacherItem/TeacherItem';
import './TeacherList.css';

const TeacherList = () => {
    const teachers = useSelector(state => state.teacher.teachers)
    const dispatch = useDispatch()

    const removeTeacher = (id) => {
        dispatch(removeTeacherAction(id))
    }
    return ( 
        <div>
            {teachers.map(teacher => 
                <div className='teacher-list_container'>
                    <TeacherItem
                        name={teacher.name}
                        surname={teacher.surname}
                        age={teacher.age}
                        position={teacher.position}
                        id={teacher.id}
                        password={teacher.password}
                        desiredDisciplines={teacher.desiredDisciplines}
                    />
                    <Button
                        className='teacher-list_btn'
                        variant='warning'
                        onClick={() => removeTeacher(teacher.id)}
                    >
                        Удалить
                    </Button>
                </div>
                
            )}
        </div>
     );
}
 
export default TeacherList;