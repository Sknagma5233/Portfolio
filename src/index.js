import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'boxicons/css/boxicons.min.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Body from './components/body';
import About from './components/about';
import Skill from './components/skill';
import Projects from './components/projects';
import Services from './components/services';
import Contacts from './components/contacts';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Body/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skill' element={<Skill/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
