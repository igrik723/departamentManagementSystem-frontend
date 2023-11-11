import { DISCIPLINES_ROUTE, LOGIN_ROUTE, TEACHERS_ROUTE, DISCIPLINE_ROUTE, TEACHER_ROUTE,} from "./utils/consts";
import Disciplines from './pages/Disciplines/Disciplines'
import Teachers from './pages/Teachers/Teachers'
import Auth from "./pages/Auth/Auth";
import DisciplinePage from "./pages/DisciplinePage/DisciplinePage";
import TeacherPage from "./pages/TeacherPage/TeacherPage";
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }
]
export const responsibleRoutes = [
    {
        path: DISCIPLINES_ROUTE,
        Component: Disciplines,
    },
    {
        path: TEACHERS_ROUTE,
        Component: Teachers
    },
    {
        path: DISCIPLINE_ROUTE + '/:id',
        Component: DisciplinePage
    }
]

export const managerRoutes = [
    {
        path: DISCIPLINES_ROUTE,
        Component: Disciplines,
    },
     {
        path: DISCIPLINE_ROUTE + '/:id',
        Component: DisciplinePage
    }
]

export const teacherRoutes = [
    {
        path: TEACHER_ROUTE + '/:id',
        Component: TeacherPage
    }
]