import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Amthal from './components/amthal/Amthal';
import Header from './components/header/Header';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Gallery from './components/gallery/Gallery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>

        {/* to make the header applied to all components */}
        <Header/>
      
        <Routes>

            <Route path='/' element={<App/>}/>
            <Route path='/amthal' element={<Amthal/>}/>
            <Route path='/gallery' element={<Gallery/>}/>

        </Routes>
        
    </Router>

  </React.StrictMode>
);


