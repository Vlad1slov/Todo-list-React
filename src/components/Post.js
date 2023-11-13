import "../Post.css";

function Post({ userId, id, title, body }) {
    return (
        <div className="post">
            <h2>{id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <h1>User id:{userId}</h1>
        </div>
    );
}

export default Post;
