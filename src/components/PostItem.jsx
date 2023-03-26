import React from "react"
import { useHistory } from "react-router";
import MyButton from "./UI/Button/Mybutton";

const PostItem = (props) => {
    const router = useHistory()
    console.log(router)

    return (
        <div className="post">
        <div className="post_content">
          <strong> {props.post.id}. {props.post.title} </strong>
            <div>
              {props.post.body}
            </div>
        </div> 
        <div className="post_btns">
        <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
              Open
            </MyButton>
          <MyButton onClick={() => props.remove(props.post)}>
              Delete
            </MyButton>
        </div>
      </div>

    );
};



export default PostItem;