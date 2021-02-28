import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {
      /* add extra html with javascript attributes here */
      <header>
        <h1>{props.article.title}</h1>
        <address>
          {props.article.author} (<a href="mailto:kate.farley@nytimes.com">{props.article.authorEmail}</a>)
          <br />
        </address>
        <time datetime={props.article.timeStamp}>{props.article.displayDate}</time>
      </header>
      }
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;