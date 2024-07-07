import { Box } from "@mui/material";
import { useParams } from 'react-router-dom';

import { useState, useEffect } from "react";

import ArticleDetails from "../components/articleComponents/ArticleDetails";
import ArticleTitle from "../components/articleComponents/ArticleTitle";
import ArticleParagraph from "../components/articleComponents/ArticleParagraph";
import ArticleList from "../components/articleComponents/ArticleList";
import ArticleBlock from "../components/articleComponents/ArticleBlock";
import ArticleCodeBlock from "../components/articleComponents/ArticleCodeBlock";
import ArticleLinks from "../components/articleComponents/ArticleLinks";

import Loader from "../components/Loader";
import Error from "../components/Error";

function SinglePage() {

    const { id } = useParams();
    const [jsonData, setJsonData] = useState(null);
    const [error, setError] = useState(null);
    const [wait, setWait] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`../../portfolio/article-${id}.json`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for ID: ${id}`);
                }
                const data = await response.json();
                setJsonData(data);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
        setTimeout(() => {
            const mainContainer = document.querySelector('.main-inner-container');
            if (mainContainer) {
                mainContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 500)
    }, [id]);

    if (error) {

        setTimeout(() => {
            setWait(false);
        }, 2000)
        return (
            <>
                {
                    wait ? <Loader /> : <Error />
                }
            </>
        );
    }

    if (!jsonData) {
        return (<Loader />);
    }

    return (

        <Box className="main-inner-container">

            {

                jsonData.map((article, index) => (
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
                ))


            }

        </Box>

    )
}

export default SinglePage
