import React, {useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);


  const disableLoading = () => setLoading(false);

  const callNewsApi = async (pageNo) => {
    props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}&category=${props.category}&page=${pageNo}&pageSize=${props.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?q=cricket&apiKey=9c88d49ed44e4197a9c6f974eabea7c7&page=${pageNo}&pageSize=${props.pageSize}`;
    // enableLoading();
    let data = await fetch(url);
    props.setprogress(50);
    let parsedData = await data.json();
    props.setprogress(70);
    disableLoading();
    props.setprogress(100);
    return parsedData;
  };
useEffect (()  => {
  async function f(){
    
    let parsedData =  await callNewsApi(1);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  }
  f();

  
}, [])


  const fetchMoreData = async () => {
    let parsedData = await callNewsApi(page + 1);
    setPage(page + 1);
    setArticles(articles.concat(parsedData.articles));
  };
    return (
      <>
        <h1 className="text-center" style={{marginTop : '30px'}}>NewsMonkey - Top Headlines</h1>
        {loading === false ? (
          articles && (
            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              // style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
              hasMore={totalResults !== articles.length}
              loader={<Spinner />}
              scrollableTarget="scrollableDiv"
            >
              <div className="container my-3">
                <div className="row">
                  {articles.map((element) => {
                    return (
                      <div className="col-md-4" key={element.url}>
                        <NewsItem
                          title={element.title}
                          description={element.description}
                          imageUrl={element.urlToImage}
                          newsUrl={element.url}
                          author={element.author}
                          publishedAt={new Date(
                            element.publishedAt
                          ).toGMTString()}
                          source={element.source.name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </InfiniteScroll>
          )
        ) : (
          <Spinner />
        )}
      </>
    );
}

export default News;
