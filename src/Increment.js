import { useState } from "react";
import Comment from "./Comment";
import CreatePost from "./CreatePost";

export const Increment = () => {
    
    const posts = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        }
    ];

    const [data, setData] = useState(posts);

    const defaultPostData = {
        "userId" : 1,
        "id" : 0,
        "title" : "",
        "body" : ""
    };

    const [newPost, setNewPost] = useState(defaultPostData);



    const deletePost = (postId) => {
        console.log(postId);
        setData((prevPostsData) => {
            return prevPostsData.filter((post) => post.id !== postId);
        })
    }

    const addPost = (newOrUpdatedPost) => {
        if (newOrUpdatedPost.id !== 0) {
            setData(data.map((post) => newOrUpdatedPost.id === post.id ? newOrUpdatedPost : post));
            setNewPost(defaultPostData);

        } else {
            newOrUpdatedPost.userId = 1;
            newOrUpdatedPost.id = data.length+1;
            setData( [...data, newOrUpdatedPost]);
        }
        newOrUpdatedPost = {};
    }

    const updatePost = (post) => {
        setNewPost(post);
    }

    return (
        <section>
            <section>
                <CreatePost postData = {newPost} postCreation = {addPost} />
            </section>
           {
            data.map((post) => {
                const {id, title, body} = post;
                return <Comment key = {id} id = {id} title = {title} body = {body} deletePost = {deletePost}  updatePost = {updatePost} />
            })
           }
        </section>
    );
}