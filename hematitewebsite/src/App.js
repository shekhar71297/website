// import logo from './logo.svg';
import React, { useState, useEffect, createContext } from 'react';
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import OurCourses from './pages/course/OurCourses';
import AllCourses from './pages/course/AllCourses';
import AllUpcomingCourse from './pages/course/AllUpcomingCourse';
import CourseDetails from './pages/course/CourseDetails';
import AboutPage from './pages/about/AboutPage';
import PlacementPage from './pages/placement/PlacementPage';

import ServicePage from './pages/service/ServicePage';
import ContactPage from './pages/contact/ContactPage';



export const WebContext = createContext();

function App() {

  const [dataJson, setDataJson] = useState(null);

  const fetchJson = async () => {
    const res = await fetch('/db.json')
    const jsonRes = await res.json();
    console.log(jsonRes);
    setDataJson(jsonRes);
  }

  useEffect(() => {
    fetchJson();
  }, []);

  const router = createBrowserRouter([
    { path: "/contact", element: <ContactPage /> },
    { path: "", element: <HomePage /> },
    { path: "/courses", element: <AllCourses /> },
    { path: "/batches", element: <AllUpcomingCourse /> },
    { path: "/course/:title", element: <CourseDetails /> },
    { path: "/about-us", element: <AboutPage /> },
    { path: "/placement", element: <PlacementPage /> },
    { path: "/services", element: <ServicePage /> },
  ]);

  return (
    <WebContext.Provider value={dataJson}>
      <div className="App" data-testid="AppWrapper">
        <RouterProvider router={router} />
      </div>
    </WebContext.Provider>
  );
}

export default App;
