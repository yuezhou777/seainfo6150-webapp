import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import ArticleList from "./ArticleList/ArticleList";
import { isEmpty } from "lodash";

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      const responseJson = await response.json();
      console.log("Response Json: ", responseJson);
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? <div>You have no data!</div> : (
    <div className="App">
      <Switch>
        <Route exact path={`/articlelist`}>
          <ArticleList articles={Object.values(fetchedData)}></ArticleList>
        </Route>

        <Route
          path={`/articlelist/:slug`}
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            const thisSlug = match.params.slug;
            console.log("this slug", thisSlug);
            let index = 0;
            Object.values(fetchedData).map((cont, idx) => {
              if(cont.slug === thisSlug) {
                index = idx;
              }
            })
            return <DynamicArticle article={Object.values(fetchedData)[index]} />;
          }}
        />

        <Route>
          <DynamicArticle article={Object.values(fetchedData)[1]} />
        </Route>

        <Route>
          <Link to="/articlelist">Go to article list</Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
