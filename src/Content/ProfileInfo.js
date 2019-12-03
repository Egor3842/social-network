import React from 'react';
import s from './Content.module.css';
import Preloader from '../Preloader';
import StatusWithHooks from './StatusWithHooks';


const ProfileInfo= (props) => {
    if (!props.profile){
        return <Preloader/>
    }
 return(
     <div className={s.Content}>
         <img src={props.profile.photos.large}/><br/>
         {props.profile.fullName}<br/>
         <StatusWithHooks status={props.status} UpdateStatus={props.UpdateStatus}/>
           {props.profile.aboutMe} <br/>
           Ссылка в вк <br/>
           {props.profile.contacts.vk}
     </div>
 )
}
export default ProfileInfo




