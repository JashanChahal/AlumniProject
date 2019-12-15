import React from 'react';

export default function PostCard(props){
    return (
        <div className="card" >
        <hr/>
            <div className="d-flex mx-4">
                <img src={props.postContent.user.userImg} className="card-img-top" alt="" style={{width:'50px'}}/>
                <div className="text-left mx-4 lead small">
                    <div>{props.postContent.user.userName}</div>
                    <div>{props.postContent.user.followers} followers</div>
                    <div>1d</div>
                </div>
            </div>
            <div className="card-body text-left  p-2">
                <p className="card-text ">{props.postContent.title}</p>
                <img src={props.postContent.imgURL} class="rounded" style={{maxWidth:'100%'}} alt=""></img>
                <span>{` Likes ${props.postContent.likes} Comments ${props.postContent.comments}`}</span>
            </div>
        </div>
    );
}
