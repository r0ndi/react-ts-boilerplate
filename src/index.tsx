import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import SuspenseFallback from "./components/suspense-fallback/SuspenseFallback";
import UserContextProvider from "./contexts/user-context/UserContextProvider";
import "./translations/translations";

const App = lazy(() => import('./layout/app/App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<SuspenseFallback />}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
