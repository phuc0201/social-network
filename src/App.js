import React from 'react'
import {RouterProvider,createBrowserRouter, Outlet} from 'react-router-dom';
import Home from "./page/home/Home";
import Marketplace from "./page/marketplace/Marketplace";
import Header from "./components/header/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
function App() {
    const router = createBrowserRouter([
        {
            path: '',
            element: <Layout />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/marketplace', element: <Marketplace /> },
            ]
        }
    ])
    return <RouterProvider router = {router}/>
}

export default App