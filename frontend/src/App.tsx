import { Suspense } from "react";
import { Routes, Route, useNavigate, useRoutes } from "react-router-dom";
import routes from "tempo-routes";
import PerspectiveForm from "./components/perspective/PerspectiveForm";
import LoadingTransition from "./components/perspective/LoadingTransition";
import VideoResults from "./components/perspective/VideoResults";

function App() {
  const navigate = useNavigate();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <PerspectiveForm
                onSubmit={(perspective) => {
                  // Navigate to loading page with state
                  navigate("/loading", { state: { perspective } });
                }}
              />
            }
          />
          <Route
            path="/loading"
            element={
              <LoadingTransition
                isLoading={true}
                message="Generating your perspective videos..."
              />
            }
          />
          <Route
            path="/results"
            element={<VideoResults />}
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
