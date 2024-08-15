import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

// Function to fetch markdown files
const fetchMarkdownFiles = (requireContext) => {
  const keys = requireContext.keys();
  return keys.map((key) => ({
    path: key,
    content: requireContext(key).default,
  }));
};

const ContentLoader = ({ isArticleSelected, onArticleSelect }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const requireContext = require.context('./writings', false, /\.md$/);
    const files = fetchMarkdownFiles(requireContext);

    const parsedPosts = files.map((file) => {
      const content = file.content;
      const meta = content.split('---')[1].split('\n').reduce((acc, line) => {
        const [key, value] = line.split(': ');
        if (key && value) acc[key] = value;
        return acc;
      }, {});
      return {
        title: meta.title,
        description: meta.description,
        content: content.split('---')[2],
      };
    });

    setPosts(parsedPosts);
  }, []);

  const handlePostClick = (content) => {
    setSelectedPost(content);
    onArticleSelect(); // Notify MainPage that an article is selected
  };

  if (isArticleSelected && selectedPost) {
    return (
      <div className="post-content">
        <ReactMarkdown>{selectedPost}</ReactMarkdown>
      </div>
    );
  }

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <div key={index} className="post-item" onClick={() => handlePostClick(post.content)}>
          <h4>{post.title}</h4>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentLoader;