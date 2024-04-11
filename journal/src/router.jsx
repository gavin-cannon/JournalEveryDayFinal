import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./routes/Dashboard.jsx";
import Calendar from "./routes/Calendar.jsx";
import Entry from "./routes/Entries";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/calendar", element: <Calendar /> },
    { path: ":slug", element: <Entry /> },
    { path: "/dashboard/:slug", element: <Entry /> }
]);


