import { ADD_DISCIPLINE, ATTACH_TEACHER, DETTACH_TEACHER, REMOVE_DISCIPLINE } from "../reducers/disciplineReducer"
import { EXIT, MANAGER_ENTER, RESPONSIBLE_ENTER, TEACHER_ENTER } from "../reducers/userReducer"
import { ADD_TEACHER, ATTACH_DESIRED_DISCIPLINE, ATTACH_DISCIPLINE, DETTACH_DESIRED_DISCIPLINE, DETTACH_DISCIPLINE, REMOVE_TEACHER } from "../reducers/teacherReducer"
import { INCREASE_DISCIPLINE_COUNT } from "../reducers/teacherReducer"

export const exitAction = (payload) => ({ type: EXIT, payload })
export const responsibleEnterAction = (payload) => ({ type: RESPONSIBLE_ENTER, payload })
export const managerEnterAction = (payload) => ({type: MANAGER_ENTER, payload})
export const teacherEnterAction = (payload) => ({type: TEACHER_ENTER,   payload})
export const addDisciplineAction = (payload) => ({ type: ADD_DISCIPLINE, payload})
export const removeDisciplineAction = (payload) => ({ type: REMOVE_DISCIPLINE, payload })
export const addTeacherAction = (payload) => ({ type: ADD_TEACHER, payload })
export const removeTeacherAction = (payload) => ({ type: REMOVE_TEACHER, payload })
export const attachTeacherAction = (payload) => ({type: ATTACH_TEACHER, payload})
export const attachDisciplineAction = (payload) => ({ type: ATTACH_DISCIPLINE, payload })
export const dettachTeacherAction = (payload) => ({ type: DETTACH_TEACHER, payload })
export const dettachDisciplineAction = (payload) => ({ type: DETTACH_DISCIPLINE, payload })
export const attachDesiredDisciplineAction = (payload) => ({ type: ATTACH_DESIRED_DISCIPLINE, payload })
export const dettachDesiredDisciplineAction = (payload) => ({ type: DETTACH_DESIRED_DISCIPLINE, payload })