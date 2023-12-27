import { useEffect, useState } from "react";
import Comment from "./Comment";
import CreatePost from "./CreatePost";

export const Increment = () => {
    
    const defaultPostData = {
        "idDrink" : 0,
        "strDrink" : "",
        "strGlass" : "",
        "strVideo" : ""
    };

    const [newPost, setNewPost] = useState(defaultPostData);
    const [data, setData] = useState([]);
    const [isLoading, setLoadingState] = useState(false);
    const [searchingDrinkName, setSearchingDrinkName ] = useState("");

    const postsUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

    const fetchPosts = async (postApi)  => {
        try {
            setLoadingState(true);
            const response = await fetch(postApi+searchingDrinkName);
            const data = await response.json();
            setData(data.drinks);
            setLoadingState(false);
        } catch (e) {

        }
   }

   useEffect(() => {
    fetchPosts(postsUrl);
   }, [searchingDrinkName]);



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
            {
                        console.log(data)
            }
            <section>
                <div>
                    <input type = "text" name = "drink_name" value = {searchingDrinkName} onChange = {(e) => setSearchingDrinkName(e.target.value)} />
                </div>
            </section>
            <section >
                {
                    isLoading ? <center>Is Loading ----</center> : ( data === null ? <center>Search for Drinks</center> : 
                    <main className = "drinks-container">
                    {
                        data.map((post) => {
                            const {idDrink,  strDrinkThumb } = post;
                            return <img className = "drink" key = {idDrink} src = {strDrinkThumb} alt = {idDrink}/>
                        }) 
                    }
                    </main>
                    )
                        
                }
            </section>
        </section>
    );
}

