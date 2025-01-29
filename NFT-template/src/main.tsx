import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './pages/App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <App /> },
      // { path: "/signup", element: <SignUp /> },
      // { path: "/login", element: <Login /> },
      // { path: "/popular", element: <Popular /> },
      // { path: "/nowplaying", element: <NowPlaying /> },
      // { path: "/toprated", element: <TopRated /> },
      // { path: "/upcoming", element: <Upcoming /> },
      // { path: "/movie/:id", element: <MovieDetail /> },
      // { path: "*", element: <NotFound /> }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
