import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = (props) => {

    const articleList = props.articles.map((article) => (
        <ArticleListItem key={article.slug} article={article} />
    ));

    return (
        <div>
            {articleList}
        </div>
    );

};

export default ArticleList;