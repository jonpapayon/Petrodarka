import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
// import { App } from "./components/App";
import { Spinner } from "./components/Spinner";

// ** Lazy load app
const LazyApp = lazy(() => import("./components/App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <LazyApp />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
