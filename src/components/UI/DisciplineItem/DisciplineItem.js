import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { DISCIPLINE_ROUTE } from "../../../utils/consts";
import './DisciplineItem.css'

const DisciplineItem = ({discipline}) => {
    const navigate = useNavigate()
    return ( 
        <div className="discipline-item_wrapper">
            <Card
                className="discipline-item_card"
                onClick={() => navigate(DISCIPLINE_ROUTE + '/' + discipline.id)}
            >
                <h1
                    className="title-name"
                >
                    {discipline.name}
                </h1>
                <h2
                    className="title-hours"
                >
                    Кол-во часов в семестр : {discipline.hours}
                </h2>
            </Card>
        </div>
     );
}
 
export default DisciplineItem;