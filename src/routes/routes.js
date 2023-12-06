import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import GoogleMap from '../components/googlemap';

const Home = () => {
  return <div>

    <h1>This is UCR housing project being done by Aadil, Mash, Sarah, Kavin</h1>
  </div>
}

export const AllRoutes = () => {

    const allroutes = [
        { url: "map", component: <GoogleMap/>},
        { url: "/", component: <Home/>}
    ]
  return (
    <Routes>

       {
        allroutes.map( (data, i)=>(
            <Route
            key={i}
            exact
            path= {`${data.url}`}
            element={data.component}
            >

            </Route>
        ))
       } 
    </Routes>
  )
}
