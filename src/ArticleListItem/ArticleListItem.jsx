import React from "react";

const ArticleListItem = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <h2>{props.article.title}</h2>
                </li>
                <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
                <p>{props.article.shortText}</p>
            </ul>
        </div>
    );
};

export default ArticleListItem;