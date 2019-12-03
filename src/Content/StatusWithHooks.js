import React,{useState,useEffect} from 'react'

const StatusWithHooks =(props)=> {

    let [editMode,setEditMode]=useState(false)
    let [status,setStatus]=useState(props.status)
    const OnStatusChange=()=>{
        setEditMode(true)
    
}
    useEffect(()=>{
        setStatus(props.status)},[props.status])
    const OffStatusChange=()=>{
        setEditMode(false)
        props.UpdateStatus(status)
    }
    const onStatusValueChange=(e)=>{
        setStatus(e.currentTarget.value) 
     }
        return (
            <div>
               { !editMode &&
                <div>
                <span onDoubleClick={OnStatusChange} >{props.status || '-----'}</span>
                </div>}
                {editMode &&
                <div>
                    <input value={status} onChange={onStatusValueChange} autoFocus={true} onBlur={OffStatusChange}  />
                </div>}
            </div>
        )
    }

export default StatusWithHooks