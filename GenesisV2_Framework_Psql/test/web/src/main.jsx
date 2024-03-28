import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import selectMarque from './pages';
import selectVoiture from './pages';


const routes = createBrowserRouter([
{
 path:'/',
 element: <App>
  <Outlet/>
 </App> ,
 children: [

{
	path: 'selectmarque',
	element: <selectMarque/> },
{
	path: 'insertionmarque',
	element: <insertionMarque/>
},
{
	path: 'selectvoiture',
	element: <selectVoiture/> },
{
	path: 'insertionvoiture',
	element: <insertionVoiture/>
},
 ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
