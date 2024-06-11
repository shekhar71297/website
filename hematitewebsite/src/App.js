// import logo from './logo.svg';
import React, { useState, useEffect, createContext } from 'react';
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import OurCourses from './pages/course/OurCourses';
import AllCourses from './pages/course/AllCourses';
import AllUpcomingCourse from './pages/course/AllUpcomingCourse';
import CourseDetails from './pages/course/CourseDetails';



export const WebContext = createContext();

function App() {

  const [dataJson, setDataJson] = useState(null);

  const fetchJson = async () => {
    const res = await fetch('/db.json')
    const jsonRes = await res.json();
    setDataJson(jsonRes);
  }

  useEffect(() => {
    fetchJson();
  }, []);

  const router = createBrowserRouter([

    { path:"", element: <HomePage /> },
    { path: "/courses", element: <OurCourses /> },
    { path: "/allcourse", element: <AllCourses /> },
    { path: "/upcomingcourse", element: <AllUpcomingCourse /> },
    { path: "/coursedetail/:id", element: <CourseDetails /> },

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
