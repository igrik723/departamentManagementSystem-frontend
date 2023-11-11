import React from "react";
import { Card } from "react-bootstrap";
import './TeacherItem.css'

const TeacherItem = ({name, surname, age, position, id, password, desiredDisciplines}) => {
    return ( 
        <div className="teacher-item_wrapper">
            <Card
                className="teacher-item_card"
            >
                <h1
                    className="teacher-item_title"
                >
                    {name} {surname}
                </h1>
                <h2
                    className="teacher-item_title"
                >
                    Возраст: {age}
                    <br/>
                    Ученая степень: {position}
                    <br/>
                    id: {id}
                    <br/>
                    пароль: {password}
                </h2>
                <h2
                    className="teacher-item_title"
                >
                    Желаемые дисциплины:
                </h2>
                {desiredDisciplines.map(discipline =>
                    <div
                        className="teacher-desired"
                    >
                        {discipline.name}
                    </div>
                )}
            </Card>
        </div>
     );
}
 
export default TeacherItem;