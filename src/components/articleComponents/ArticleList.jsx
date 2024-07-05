import React from 'react'

function ArticleList({ listItems }) {
    return (
        <ol className="noticia-text-regular font-size-md" style={{ marginBottom: "8px" }}>

            {listItems.map((listItem,index) => (
                <li key={index}> {listItem} </li>
            ))}

        </ol>
    )
}

export default ArticleList
