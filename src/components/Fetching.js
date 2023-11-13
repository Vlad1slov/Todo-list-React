import { useEffect, useState } from "react";

const Fetching = () => {
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json())
            .then((json) => setTodo(json));
    }, []);

    return <div>{todo && <h1>{todo.title}</h1>}</div>;
};

export default Fetching;
