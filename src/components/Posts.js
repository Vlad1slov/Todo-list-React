import Post from "./Post";
import { useState, useEffect } from "react";

function Posts() {
    const [posts, setPost] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                const posts = await res.json();
                setPost(posts);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        }
        fetchData();
    }, []);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((response) => response.json())
    //         .then((json) => setPost(json))
    //         .catch((error) => setError(error.message))
    //         .finally(() => setIsLoading(false));
    // }, []);

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <hr></hr>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                posts.map((post) => <Post {...post} key={post.id} />)
            )}
        </div>
    );
}

export default Posts;
