import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () =>{

  const [progress,setprogress] = useState(0);

  
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const setProgress = (progress) => {
    setprogress(progress);
  };
    return (
      <BrowserRouter>
        <div>
          <LoadingBar progress={progress} />
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  apiKey={apiKey}
                  progress={progress}
                  setprogress={setProgress}
                  key="general"
                  pageSize={6}
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  apiKey={apiKey}
                  progress={progress}
                  setprogress={setProgress}
                  key="business"
                  pageSize={6}
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  apiKey={apiKey}
                  progress={progress}
                  setprogress={setProgress}
                  key="entertainment"
                  pageSize={6}
                  category="entertainment"
                />
              }
            />

            <Route
              path="/health"
              element={
                <News
                  apiKey={apiKey}
                  progress={progress}
                  setprogress={setProgress}
                  key="health"
                  pageSize={6}
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  apiKey={apiKey}
                  progress={progress}
                  setprogress={setProgress}
                  key="science"
                  pageSize={6}
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  apiKey={apiKey}
                  progress={progress}
                  setprogress={setProgress}
                  key="sports"
                  pageSize={6}
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  apiKey={apiKey}
                  progress={progress}
                  setprogress={setProgress}
                  key="technology"
                  pageSize={6}
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
}
export default App;