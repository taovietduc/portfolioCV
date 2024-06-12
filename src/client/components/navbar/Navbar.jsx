import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Navbar.css';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar'; // Import Sidebar component
import Home from '../home/Home';
import About from '../about/About';
import Skills from '../skills/Skills';
import Project from '../project/Project';
import Contact from '../contact/Contact';

const users = [
  { id: 1, name: 'User 1' },
];

const imageData = [
  { src: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/386095497_846897713781473_3023870022084553956_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lqy6RuCtdwYQ7kNvgH9ZEQ5&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYBIwGTbNoa9pF-vAwtYVgIPEUSCVf26ll9W9-XVNweKmQ&oe=665A6A53", alt: "Image 1" },

];

const Navbar = () => {
  useEffect(() => {
    // var copy = document.querySelector(".line-slide").cloneNode(true);
    // document.querySelector(".line-container").appendChild(copy);
    // Nếu vị trí của line-slide thứ 2 không bằng 0 thì sẽ không chạy animation
    var lineSlide = document.querySelector(".line-slide-home");
    var lineContainer = document.querySelector(".line-home");
    var copy = lineSlide.cloneNode(true);
    lineContainer.appendChild(copy);
  }, [])


  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  const [selectedButton, setSelectedButton] = useState(0);

  const renderContent = () => {
    switch (selectedButton) {
      case 0:
        return <Home />;
      case 1:
        return <About />;
      case 2:
        return <Skills />;
      case 3:
        return <Project />;
      case 4:
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="navbar">
      <div className="buttonGroup">
        {/* Add buttons here if needed */}
        <div className="sidebar-container">
          <Sidebar selectedButton={selectedButton} setSelectedButton={setSelectedButton} /> {/* Render the Sidebar component */}
        </div>
      </div>


      <div className="room-detail-top">
        <div className="carousel-container">
          <Carousel
            autoPlay
            interval={2000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            emulateTouch
          >
            {imageData.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </Carousel>
        </div>


  
        <div className="introduce-right">
          <div class="line-home">
            <div class="line-slide-home">
              <text>Tào Việt Đức</text>
            </div>
          </div>
          <h3>HELLO!</h3>
          <h2>My name is Tao Viet Duc</h2>
          <h2>I'm a Web Developer</h2>
          <h4>A ReactJS web developer specializes in using the React JavaScript library to build dynamic and responsive user interfaces for web applications. They must be proficient in JavaScript, HTML, and CSS, and have a strong understanding of React components, state management, and hooks. Additionally, they should be familiar with tools like Redux for state management, React Router for navigation, and webpack for module bundling.</h4>
          {users.map((user) => (
            <button onClick={() => handleViewDetails(user)}>View CV</button>
          ))}
          {selectedUser && (
            <div className="user-details-overlay">
              <div className="user-details">
                <img src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/05/harvard-cv-chuan.jpg" alt="Logo" />
                <button onClick={() => setSelectedUser(null)}>Close</button>
              </div>
              <div className='download-details'>
                <button>DOWNLOAD CV</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      <footer className="footer">
        <p>&copy; 2024 Tao Viet Duc. All rights reserved.</p>
        <p>Địa chỉ: Số 123, Đường ABC, Quận XYZ, Thành phố HCM  |  Email: <a href="mailto:contact@taovietduc.com">contact@taovietduc.com</a>  |  Điện thoại: 0123 456 789</p>
      </footer>
    </div>
  );
};



export default Navbar;
