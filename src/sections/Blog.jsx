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
      date: 'December 4, 2023',
      title: 'CSS Reset: A Crucial Step in Web Development',
      link: '#/page/1'
    },
    {
      date: 'January 10, 2024',
      title: 'Flexbox Styling: A Comprehensive Guide to Use Cases and Scenarios',
      link: '#/page/2'
    },
    {
      date: 'February 12, 2024',
      title: 'Best Practices in JavaScript Programming',
      link: '#/page/3'
    },
    {
      date: 'March 8, 2024',
      title: 'Optimizing React Performance',
      link: '#/page/4'
    },
    {
      date: 'July 9, 2024',
      title: 'Best Books to Refer for Learning JavaScript',
      link: '#/page/5'
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

        {articles.reverse().map((article, index) => (
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
