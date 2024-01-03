import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    console.log(posts)
    
    const AllPosts = posts.map((post) => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
    })
       
    return (
        <div id="posts">
            <main  id="article-list">{AllPosts}</main>
        </div>
    )

}

export default ArticleList
