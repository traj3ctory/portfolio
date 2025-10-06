import { ErrorFallback, LoadingScreen } from "@/components/misc";
import AppRoutes from "@/routes";
import "@/styles/index.scss"; // Legacy / component SCSS overrides
import "@/styles/prime.css"; // PrimeReact theme
import { ErrorInfo, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useOnlineStatus } from "./hooks";
import "./styles/tailwind.css"; // Tailwind first
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
      {/* {isOnline ? ( */}
      <Suspense fallback={<LoadingScreen />}>
        {!isOnline ? null : (
          <div className="bg-amber-700 text-gray-200 text-center py-1 text-xs">
            You are currently offline. Some features may be unavailable.
          </div>
        )}
        <Router>
          <Routes>
            {/* create a banner to show offline */}
            {/* --- IGNORE --- */}
            {renderRoutes(AppRoutes)}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
      {/* ) : (
        <OfflineFallBack />
      )} */}
    </>
  );
}

export default App;
