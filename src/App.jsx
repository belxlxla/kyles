// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Main from './components/pages/main';
import SecondSection from './components/pages/secondSection';
import About from './components/pages/about';
import Skill from './components/pages/skill';
import Archiving from './components/pages/archiving';
import Projects from './components/pages/projects';
import Career from './components/pages/career';
import Contact from './components/pages/contact';
import Login from './components/pages/login';
import Payments from './components/pages/payments';
import Map from './components/pages/map';
import Chat from './components/pages/chat';
import Editor from './components/pages/editor';
import Calendar from './components/pages/calendar';
import AI from './components/pages/ai';

function App() {
 return (
   <Routes>
     <Route 
       path="/login"
       element={
         <>
           <Header />
           <Login />
         </>
       } 
     />
     <Route 
       path="/" 
       element={
         <>
           <Header />
           <Main />
           <SecondSection />
           <About />
           <Skill />
           <Archiving />
           <Projects />
           <Career />
           <Contact />
         </>
       } 
     />
     <Route 
       path="/payments"
       element={
         <>
           <Header />
           <Payments />
         </>
       } 
     />
     <Route 
       path="/map"
       element={
         <>
           <Header />
           <Map />
         </>
       } 
       />
       <Route 
         path="/chat"
         element={
           <>
             <Header />
             <Chat />
           </>
         } 
         />
         <Route 
           path="/editor"
           element={
             <>
               <Header />
               <Editor />
             </>
           }
           />
           <Route 
             path="/calendar"
             element={
               <>
                 <Header />
                 <Calendar />
               </>
             }
             />
             <Route 
               path="/ai"
               element={
                 <>
                   <Header />
                   <AI />
                 </>
               }   
     />
   </Routes>
 );
}

export default App;