import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { FifthTask } from "./task5/index.jsx";
import { SixthTask } from "./task6/index.jsx";
import { SeventhTask } from "./task7/index.jsx";
import { EightTask } from "./task8/index.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import Tenthtask from "./task10/index.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TwelfthTask } from "./task12/index.jsx";

const queryClient = new QueryClient();

const TaskSecondPage = lazy(() => import("./task2/index.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="task2"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <TaskSecondPage />
                </Suspense>
              }
            />
            <Route path="task5" element={<FifthTask />} />
            <Route path="task6" element={<SixthTask />} />
            <Route path="task7" element={<SeventhTask />} />
            <Route path="task8" element={<EightTask />} />
            <Route path="cart" element={<Tenthtask />} />
            <Route path="trello" element={<TwelfthTask />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
