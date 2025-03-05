import {
  ErrorFallback,
  LoadingScreen,
  OfflineFallBack,
} from "@/components/misc";
import AppRoutes from "@/routes";
import "@/styles/index.scss";
import "@/styles/prime.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ErrorInfo, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useOnlineStatus } from "./hooks";
import { IRoute, ISubRoute } from "./types";

const NotFound = lazy(() => import("@/components/misc/NotFound"));

function App() {
  // const { theme: storeTheme } = useAppStore();

  /**
   * @description This function renders the routes
   * @param {IRoute[]} routes
   */

  const handleError = (error: Error, info: ErrorInfo) => {
    if (!info.componentStack) return;
    const _error = info?.componentStack.split("\n")[1];
    console.log(error, "Error =>", _error);
  };

  const renderRoutes = (routes: IRoute[]) =>
    routes.map((route: IRoute, i: number) => (
      <Route key={route.path} path={route.path}>
        <Route key={`${route.path}_${i}`} index element={<route.element />} />
        {route?.sub?.map?.((sub: ISubRoute, j: number) => (
          <Route
            key={`${sub.path}_${j}`}
            path={sub.path}
            element={
              <Suspense fallback={<LoadingScreen />}>
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onError={handleError}
                >
                  <sub.subElement />
                </ErrorBoundary>
              </Suspense>
            }
          />
        ))}
      </Route>
    ));

  const isOnline = useOnlineStatus();

  return (
    <>
      {isOnline ? (
        <Suspense fallback={<LoadingScreen />}>
          <Router>
            <Routes>
              {renderRoutes(AppRoutes)}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </Suspense>
      ) : (
        <OfflineFallBack />
      )}
    </>
  );
}

export default App;
