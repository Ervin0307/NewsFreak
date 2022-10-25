import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const  App=()=>{
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={4}
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="General"
                  pageSize={pageSize}
                  country="in"
                  category="General"
                />
              }
            ></Route>
            <Route
              exact
              path="business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="Entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="sports"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;