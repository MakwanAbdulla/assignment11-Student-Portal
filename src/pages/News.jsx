import { useEffect, useState } from "react";

export default function News() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div className="container mt-4">
            <h2>Nyheter</h2>
            {posts.map((post) => (
                <div key={post.id} className="mb-3">
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}
