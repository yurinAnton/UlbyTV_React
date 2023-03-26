import React, { useRef, useState } from "react";
import MyButton from "./UI/Button/Mybutton";
import MyInput from "./UI/Input/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
      }

    return (
        <form>

        {/* //--Управляемый компонент */}
        <MyInput 
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text" 
        placeholder="Title post"/>

        {/* //-- Не управляемый компонент */}
        <MyInput 
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text" 
        placeholder="Description post"/>

        <MyButton onClick={addNewPost} >Add post</MyButton>
      </form>

    );
};




export default PostForm;
