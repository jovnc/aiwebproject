import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/nav/Footer";
import LoginPage from "./pages/Login";

const Layout = () => (
  <div className="flex flex-col w-full h-screen">
    <Navbar />
    <Outlet />
    <div className="flex-grow" />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout to include Navbar
    children: [
      {
        path: "/",
        element: <Home />, // Home page as a child route
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return (
    <main className="w-full min-h-screen bg-slate-100">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
