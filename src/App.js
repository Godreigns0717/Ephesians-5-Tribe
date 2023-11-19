import { useState, useEffect } from 'react';
// import Slideshow from './components/Slideshow';
// import MinistryCard from './components/MinistryCard';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Donate from './components/Pages/Donate/Donate';
import Contact from './components/Pages/Contact/Contact';
import Blog from './components/Pages/Blog/Blog';
import Gallery from './components/Pages/Gallery/Gallery';
import Ministries from './components/Pages/Ministries/Ministries';
import OnlineMeetings from './components/Pages/Ministries/OnlineMeetings'
import TheCouch from './components/Pages/Ministries/TheCouch';
import Touched from './components/Pages/Ministries/Touched'
import './App.css';
import Loading from './components/Pages/Home/Loading';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* <Home /> */}
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/donate" element={<Donate />} />
          <Route path='/the couch' element={<TheCouch />} />
          <Route path='/touched' element={<Touched />} />
          <Route path='/online_meetings' element={<OnlineMeetings />} />
          {/* Add more routes and components as needed */}
        </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;


/* <Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/contact" element={<Contact />} />
<Route path="/ministries" element={<Ministries />} />
<Route path='/blog' element={<Blog />} />
<Route path="/donate" element={<Donate />} />
</Routes> */
