// import logo from './logo.svg';
import React, { useState, useEffect, createContext } from 'react';
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './pages/home/HomePage';



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

    { path:"", element: <HomePage /> }
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
