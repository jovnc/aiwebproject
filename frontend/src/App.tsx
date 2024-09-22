import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/nav/Footer";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
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
      // Add more routes as needed
    ],
  },
]);

function App() {
  return (
    <main className="purple-gradient-bg">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
