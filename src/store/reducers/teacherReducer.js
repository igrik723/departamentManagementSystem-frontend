const defaultState = {
    teachers: [
        {id: '3', name: 'Петр', surname:'Павлов', age:'30', position:'Доцент', password:'1234', desiredDisciplines:[], disciplines:[] },
        {id: '4', name: 'Иван', surname:'Иванов', age:'34', position:'Кандидат наук', password:'1234', desiredDisciplines:[], disciplines: []  },
        {id: '5', name: 'Владимир', surname:'Лутин', age:'31', position:'Нет ученой степени', password:'1234', desiredDisciplines:[], disciplines: [] },
    ]
}


export const ADD_TEACHER = 'ADD_TEACHER'
export const REMOVE_TEACHER = 'REMOVE_TEACHER'
export const ATTACH_DISCIPLINE = 'ATTACH_DISCIPLINE'
export const DETTACH_DISCIPLINE = 'DETTACH_DISCIPLINE'
export const ATTACH_DESIRED_DISCIPLINE = 'ATTACH_DESIRED_DISCIPLINE'
export const DETTACH_DESIRED_DISCIPLINE = 'DETACH_DESIRED_DISCIPLINE'


export const teacherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TEACHER:
            return { ...state, teachers: [...state.teachers, action.payload] }
        case REMOVE_TEACHER:
            return { ...state, teachers: state.teachers.filter((teacher) => teacher.id != action.payload) }
        case ATTACH_DISCIPLINE:
            return {
                ...state,
                teachers: state.teachers.map((teacher) =>
                    teacher.id === action.payload.id
                        ? {
                            ...teacher, disciplines: [...teacher.disciplines, {disciplineId: action.payload.disciplineId, name: action.payload.name}]
                        }
                        : teacher
                )
            }
        case DETTACH_DISCIPLINE:
            return {
                ...state,
                teachers: state.teachers.map((teacher) => 
                    teacher.id === action.payload.id
                        ? {
                        ...teacher, disciplines: teacher.disciplines.filter((d) => d.disciplineId != action.payload.disciplineId)
                        }
                        : teacher
                )
            }
        case ATTACH_DESIRED_DISCIPLINE:
            return {
                ...state,
                teachers: state.teachers.map((teacher) =>
                    teacher.id === action.payload.id
                        ? {
                            ...teacher, desiredDisciplines: [...teacher.desiredDisciplines, {disciplineId: action.payload.disciplineId, name: action.payload.name}]
                        }
                        : teacher
                )
            }
        case DETTACH_DESIRED_DISCIPLINE:
            return {
                ...state,
                teachers: state.teachers.map((teacher) => 
                    teacher.id === action.payload.id
                        ? {
                        ...teacher, desiredDisciplines: teacher.desiredDisciplines.filter((d) => d.disciplineId != action.payload.disciplineId)
                        }
                        : teacher
                )
            }
        default: return state
    }
}