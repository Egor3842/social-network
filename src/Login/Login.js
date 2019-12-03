import React from 'react'
import {reduxForm} from 'redux-form'
import {Field} from 'redux-form'
import {connect} from 'react-redux'
import {login} from '../redux/AuthReducer'
import {Validation} from '../Helper/Helper'
import {Redirect} from 'react-router-dom'
import {TextArea} from '../Forms/Forms'
import s from '../Forms/Forms.module.css'



const Login = (props)=>{
    const onSubmit=(formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth===true)  return <Redirect to={'/profile'}/>
    return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  
}



const LoginForm=(props)=>{
return <form onSubmit={props.handleSubmit}>
    <div> <Field placeholder={'Login'} name={"email"} validate={[Validation]} component={TextArea} /> </div>
    <div> <Field placeholder={'Password'} name={"password"} validate={[Validation]} component={TextArea}/> </div>
    <div> <Field type={'checkbox'} name={"rememberMe"} component={"input"} />Запомнить меня </div>
   {props.error && <div className={s.formsummaryerror}>{props.error} </div>}
    <div><button>Submit</button></div>
</form>
}

const mapStateToProps=(state)=>({
    isAuth:state.Auth.isAuth
})
const LoginReduxForm=reduxForm({
    form:'login'
})(LoginForm)
export default connect(mapStateToProps,{login}) (Login)