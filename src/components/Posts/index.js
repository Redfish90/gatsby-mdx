import React from "react"
import Post from "./Post"
import Banner from "../Banner"
const Posts = ({ posts, title }) => {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        {/* posts column */}
        <article>
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </article>
        <article>
          {/* banner column */}
          <Banner />
        </article>
      </div>
    </section>
  )
}

export default Posts
