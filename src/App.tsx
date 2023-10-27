import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import tabs from "./tabs.json";
import { getPath } from "./utils/getPath";
import Tabs from "./components/Tabs";

const DummyChart = lazy(() => import("./components/DummyChart"));
const DummyList = lazy(() => import("./components/DummyList"));
const DummyTable = lazy(() => import("./components/DummyTable"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  const firstTab = tabs.find((tab) => tab.order === 0)!;
  const firstTabPath = getPath(firstTab.path);

  const routes = [
    {
      id: 1,
      path: "/",
      component: <Navigate to={firstTabPath} />,
    },
    {
      id: 2,
      path: "/dummyTable",
      component: <DummyTable />,
    },
    {
      id: 3,
      path: "/dummyChart",
      component: <DummyChart />,
    },
    {
      id: 4,
      path: "/dummyList",
      component: <DummyList />,
    },
    {
      id: 5,
      path: "*",
      component: <NotFound />,
    },
  ];

  return (
    <main className="container">
      <h1>CMS Test task</h1>
      <Tabs tabs={tabs} />

      <section>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {route.component}
                </Suspense>
              }
            />
          ))}
        </Routes>
      </section>
    </main>
  );
}

export default App;
