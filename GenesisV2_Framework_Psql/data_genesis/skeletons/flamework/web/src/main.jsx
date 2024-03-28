import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
[importpage]


const routes = createBrowserRouter([
{
 path:'/',
 element: <App>
  <Outlet/>
 </App> ,
 children: [
[mappinglienpage]
 ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
