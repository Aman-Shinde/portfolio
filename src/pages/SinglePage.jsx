import { Box, Typography } from "@mui/material";

import ArticleDetails from "../components/articleComponents/ArticleDetails";
import ArticleTitle from "../components/articleComponents/ArticleTitle";
import ArticleParagraph from "../components/articleComponents/ArticleParagraph";
import ArticleList from "../components/articleComponents/ArticleList";
import ArticleBlock from "../components/articleComponents/ArticleBlock";
import ArticleCodeBlock from "../components/articleComponents/ArticleCodeBlock";
import ArticleLinks from "../components/articleComponents/ArticleLinks";

import articleData from '../../public/article-03.json';


function SinglePage() {
    const containerWrapperStyle = {
        position: "relative",
        padding: { lg: "48px", md: "32px", sm: "16px", xs: "16px" },
        margin: { lg: "50px 20px", md: "50px 20px", sm: "30px 30px", xs: "30px 30px" },
        height: { lg: "calc(100vh - 100px)", md: "calc(100vh - 100px)", sm: "auto", xs: "auto" },
        maxWidth: "100%"
    };

    const containerStyle = {
        overflowY: "scroll",
        width: { lg: "680px", md: "540px", sm: "100%", xs: "100%" },
        margin: { lg: "0px auto", md: "0px auto", sm: "0px", xs: "0px" },
        height: "100%"
    };

    const article = {
        title: 'The Future of Technology',
        subtitle: 'Exploring the advancements in AI and Machine Learning',
        byline: 'By John Doe',
        publishedDate: 'July 4, 2024',
    };

    const code = `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    
    ReactDOM.render(<App />, document.getElementById('root'));
    `

    return (
        <Box sx={containerWrapperStyle}>

            <Box className="hide-scrollbar" sx={containerStyle}>

                <Box>

                    {articleData.map((article, index) => (
                        <div key={index}>
                            <ArticleDetails
                                title={article.title}
                                subtitle={article.subtitle}
                                byline={article.byline}
                                publishedDate={article.publishedDate}
                            />
                            {article.codeblocks.map((block, blockIndex) => (
                                <ArticleBlock key={blockIndex}>
                                    {block.map((item, itemIndex) => {
                                        switch (item.type) {
                                            case 'title':
                                                return <ArticleTitle key={itemIndex} title={item.content} />;
                                            case 'description':
                                                return <ArticleParagraph key={itemIndex} description={item.content} />;
                                            case 'list':
                                                return <ArticleList key={itemIndex} listItems={item.content} />;
                                            case 'code':
                                                return <ArticleCodeBlock key={itemIndex} code={item.content} />;
                                            case 'links':
                                                return <ArticleLinks key={itemIndex} links={item.content} />;
                                            default:
                                                return null;
                                        }
                                    })}
                                </ArticleBlock>
                            ))}
                        </div>
                    ))}

                </Box>

            </Box>

        </Box>
    )
}

export default SinglePage
