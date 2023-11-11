

const defaultState = {
    disciplines: [
        {id:1, name: 'Введение ', hours: '70', teachers: []},
        {id:2, name:'Введение в ', hours:'90', teachers: []},
        {id:3, name:'Введение в It', hours:'72', teachers: []},
    ],
}

export const ADD_DISCIPLINE = 'ADD_DISCIPLINE'
export const REMOVE_DISCIPLINE = 'REMOVE_DISCIPLINE'
export const ATTACH_TEACHER = 'ATTACH_TEACHER'
export const DETTACH_TEACHER = 'DETTACH_TEACHER'

export const disciplineReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_DISCIPLINE:
            return { ...state, disciplines: [...state.disciplines, action.payload] }
        case REMOVE_DISCIPLINE:
            return { ...state, disciplines: state.disciplines.filter((discipline) => discipline.id != action.payload) }
        case ATTACH_TEACHER:
            return {
                ...state,
                disciplines: state.disciplines.map((d) =>
                    d.id === action.payload.disciplineId
                        ? {
                            ...d, teachers: [...d.teachers, { id: action.payload.id, name: action.payload.name, surname: action.payload.surname }]
                        }
                        : d
                )      
            }
        case DETTACH_TEACHER:
            return {
                ...state,
                disciplines: state.disciplines.map((d) =>
                    d.id === action.payload.disciplineId
                        ? {
                        ...d, teachers: d.teachers.filter((teacher) => teacher.id != action.payload.teacherId)
                        }
                        : d
                )
            }
        default: return state
    }
}