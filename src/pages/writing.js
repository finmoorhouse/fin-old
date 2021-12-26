import React from "react"
import Layout from "../components/layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"
import Seo from "../components/seo"

const AllPosts = () => {
  const posts = usePosts()
  return (
    <>
      <Layout path="writing-colour">
      <Seo title="✒️ Writing" pageThumb = "/meta-writing.jpg"/>
        <div className="page-wrapper writing-wrapper">
          <h1 className="page-title writing-title">Writing</h1>
          <hr/>
          <span className='spacer'/>
          {posts.map(post => {
            return <PostPreview key={post.slug} post={post} />
          })}
        </div>
      </Layout>
    </>
  )
}

export default AllPosts