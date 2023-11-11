const defaultState = {
    auth: false,
    role: 'responsible'
}

export const EXIT = 'EXIT'
export const RESPONSIBLE_ENTER = 'RESPONSIBLE_ENTER'
export const TEACHER_ENTER = 'TECHER_ENTER'
export const MANAGER_ENTER = 'MANAGER_ENTER'


export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RESPONSIBLE_ENTER:
            return { ...state, auth: true, role: 'responsible' }
        case TEACHER_ENTER:
            return { ...state, auth: true, role: 'teacher' }
        case MANAGER_ENTER:
            return { ...state, auth: true, role: 'manager' }
        case EXIT:
            return { ...state, auth: false}
        default: return state
    }
}