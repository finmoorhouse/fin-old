import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Layout>
        <h2>Read my blog</h2>

        {posts.map(post => {
          return (<PostPreview key={post.slug} post={post} />);
        })}
      </Layout>
    </>
  );
};