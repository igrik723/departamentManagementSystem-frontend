import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DisciplineItem from '../DisciplineItem/DisciplineItem';
import { removeDisciplineAction } from '../../../store/action-creators/action-creators';
import './DisciplineList.css'

const DisciplineList = () => {
    const disciplines = useSelector(state => state.discipline.disciplines)
    const dispatch = useDispatch()

    const removeDiscipline = (id) => {
        dispatch(removeDisciplineAction(id))
    }
    return ( 
        <div
        >
            {disciplines.map(discipline => 
                <div className='discipline-list_container'>
                    <DisciplineItem discipline={discipline}/>
                    <Button
                        variant='warning'
                        className='discipline-list_btn'
                        onClick={() => removeDiscipline(discipline.id)}
                    >
                        Удалить
                    </Button>
                </div>
                
            )}
        </div>
     );
}
 
export default DisciplineList;