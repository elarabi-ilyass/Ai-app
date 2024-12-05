import  { useState, useEffect } from 'react';
import './index.css'; // Main CSS file
import Sidebar from './SideBar/Sidebar'; // Sidebar Component
import Header from './Header/Header'; // Header Component
import LowerSide from './LowerSide/LowerSide'; // Main Content Component
import AOS from 'aos';



function App() {
  // State to manage sidebar visibility
  const [isOpen, setIsOpen] = useState(false);
  
  
  // Function to toggle the sidebar
  const handleSideBar = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Section */}
      <Header 
        isOpen={isOpen}   
        handleSideBar={handleSideBar}
        data-aos='fade-left' />
      
      {/* Main Content Section */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar 
         isOpen={isOpen}
         
          />

        {/* Lower Side (Main Content Area) */}
        <LowerSide 
          isOpen={isOpen}
          data-aos='fade-left'
          

        />
      </div>
    </div>
  );
}

export default App;
