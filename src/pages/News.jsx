import { useEffect, useState } from "react";

export default function News() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=8")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1>News</h1>
            {posts.map((post) => (
                <div key={post.id} className="mb-3">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}
