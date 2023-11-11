import React from "react";
import {Navigate, Route, Routes} from 'react-router-dom'
import { publicRoutes, responsibleRoutes, managerRoutes, teacherRoutes } from "../routes";
import { useSelector } from "react-redux";

const AppRouter = () => {
    const user = useSelector(state => state.user)
    let responsibleAuth = null
    let managerAuth = null
    let teacherAuth = null

    if (user.auth && user.role === 'responsible') {
        responsibleAuth = true
    } else if (user.auth && user.role === 'manager') {
        managerAuth = true
    } else if (user.auth && user.role === 'teacher') {
        teacherAuth = true
    }
    
    return ( 
        <Routes>
            {responsibleAuth && responsibleRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {managerAuth && managerRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {teacherAuth && teacherRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {responsibleAuth && <Route path='*' element={<Navigate to='disciplines'/>}/>}
            {managerAuth && <Route path='*' element={<Navigate to='disciplines'/>}/>}
            {user.auth === false && <Route path='*' element={<Navigate to='login'/>}/>}
        </Routes>
     );
}
 
export default AppRouter