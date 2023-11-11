import React from "react";
import { useState } from "react";
import { Container, Card, Button} from "react-bootstrap";
import './Disciplines.css'
import DisciplineList from "../../components/UI/DisciplineList/DisciplineList";
import CreateDiscipline from "../../components/modals/CreateDiscipline";
import { useDispatch } from "react-redux";
import './Disciplines.css'

const Disciplines = () => {
    const [disciplineVisible, setDisciplineVisible] = useState(false)
    return (
        <Container
            className='disciplines-wrapper'
        >
            <Button
                className='disciplines_btn'
                onClick={() => setDisciplineVisible(true)}
            >
                <h2>
                    Добавить дисциплину
                </h2>
            
            </Button>
            <CreateDiscipline show={disciplineVisible} onHide={() => setDisciplineVisible(false)}/>
           <DisciplineList/>
        </Container>

    );
}
 
export default Disciplines;