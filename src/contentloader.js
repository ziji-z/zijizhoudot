import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const ContentLoader = ({ folderPath }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch markdown files
    const fetchMarkdownFiles = async () => {
      const files = await fetch(folderPath).then(res => res.json());
      const loadedPosts = files.map(file => import(`${folderPath}/${file}`).then(res => res.default));
      Promise.all(loadedPosts).then(setPosts);
    };

    fetchMarkdownFiles();
  }, [folderPath]);

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <ReactMarkdown>{post}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};