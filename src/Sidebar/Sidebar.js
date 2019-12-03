import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar= () => {
 return(
     <div className={s.Sidebar}>
       <div>
           <ul>
               <NavLink to='profile'>
               <li> Профиль </li>
                </NavLink >
                <NavLink to='dialog'>
               <li> Сообщения </li>
                </NavLink >
                <NavLink to='users'>
               <li> Пользователи </li>
                </NavLink >
                <a href="#">
               <li> Новости </li>
                </a >
                <a href="#">
               <li> Музыка </li>
                </a >
                <a href="#">
               <li> Настройки </li>
                </a >
           </ul>
       </div>
     </div>
 )
}
export default Sidebar