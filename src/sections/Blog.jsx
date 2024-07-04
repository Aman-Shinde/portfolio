import React from 'react';
import { Box } from '@mui/material';
import BlogCard from '../components/BlogCard';

const containerStyle = {
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  marginBottom: "48px",
};

const titleStyle = {
  textAlign: "center",
  fontSize: "xl",
  fontWeight: "bold",
  fontFamily: "lato",
};

const Blog = () => {
  const articles = [
    {
      date: 'June 15, 2024',
      title: 'Understanding React Components',
      link: 'https://example.com/article1'
    },
    {
      date: 'May 22, 2024',
      title: 'A Guide to JavaScript ES6 Features',
      link: 'https://example.com/article2'
    },
    {
      date: 'June 15, 2024',
      title: 'Understanding React Components',
      link: 'https://example.com/article1'
    },
    {
      date: 'May 22, 2024',
      title: 'A Guide to JavaScript ES6 Features',
      link: 'https://example.com/article2'
    },
    {
      date: 'June 15, 2024',
      title: 'Understanding React Components',
      link: 'https://example.com/article1'
    },
    {
      date: 'May 22, 2024',
      title: 'A Guide to JavaScript ES6 Features',
      link: 'https://example.com/article2'
    }
  ];

  return (
    <Box id="blog">

      <Box>

        <Box sx={containerStyle}>
          <p className="font-size-xl lato-bold" style={titleStyle}>
            Blogs
          </p>
        </Box>

        {articles.map((article, index) => (
          <BlogCard
            key={index}
            date={article.date}
            title={article.title}
            link={article.link}
          />
        ))}

      </Box>

    </Box>
  );
};

export default Blog;
