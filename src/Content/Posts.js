import React from 'react';
import s from './Posts.module.css';
import Post from './Post';
import {reduxForm,Field} from 'redux-form'
import {Validation,MaxLength} from '../Helper/Helper'
import {TextArea} from '../Forms/Forms'

 let MaxLengthPost=MaxLength(10)

const Posts= (props) => {
    let PostsElement=props.AllPosts.map(p=> <Post message={p.message} likes={p.likes} ava={p.ava}/>);

    let AddPost=(values)=>{
     props.AddPost(values.NewPostText);
    }
   
 return(
     <div className={s.posts} >
          My posts<br/>
       <PostReduxForm onSubmit={AddPost}/>
       {PostsElement}
     </div>
 )
}

const PostForm=(props)=>{
   return  <form onSubmit={props.handleSubmit}>
        <Field name='NewPostText' component={TextArea} validate={[Validation,MaxLengthPost]} placeholder='Введите пост' />
        <button >Отправить</button>
    </form>
}
const PostReduxForm=reduxForm(
    {form:'posts'}
)(PostForm)
export default Posts