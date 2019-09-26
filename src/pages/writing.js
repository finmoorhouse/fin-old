import React from "react"
import Layout from "../components/layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"

export default () => {
  const posts = usePosts()
  return (
    <>
      <Layout>
        <h1>My Writing</h1>
        <h4>This is a short description of my writing. Why is it here?</h4>
        {posts.map(post => {
          return <PostPreview key={post.slug} post={post} />
        })}
      </Layout>
    </>
  )
}
