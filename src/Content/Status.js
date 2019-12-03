import React from 'react'

class Status extends React.Component {

   

state={
    editMode: false,
    status:this.props.status
}

OnStatusChange=()=>{
this.setState({
editMode:true
})

}
OffStatusChange=()=>{
    this.setState({
    editMode:false
    })
    this.props.UpdateStatus(this.state.status)
    } 
    onStatusValueChange=(e)=>{
       this.setState({status:e.currentTarget.value}) 
    }
componentDidUpdate(prevProps){
if (prevProps.status!=this.props.status){
    this.setState({status:this.props.status})
}
}
    
    render() {
        return (
            <div>
               { !this.state.editMode &&
                <div>
                <span onDoubleClick={this.OnStatusChange}>{this.props.status}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusValueChange} autoFocus={true} onBlur={this.OffStatusChange} value={this.state.status} />
                </div>}
            </div>
        )
    }
}
export default Status