import React, { useEffect, useState } from 'react';
import './Sidebar.css'; // Import sidebar styles

const Sidebar = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

useEffect(() => {
    handleButtonClick(0);
    }, []);

  return (
    <div className="sidebar">
      <div className="logoContainer">
        <img src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/445533262_982412266896683_8228597363736958848_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHqOV1MpjPXpmGZehdI9nIuvFqbaex7r1m8Wptp7HuvWbLViCA57aHKsVpghD0Fw8qXuKxChOrbFEnXzQFLBEEN&_nc_ohc=z0H2dfyvZnsQ7kNvgHj78Oi&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYCy3jvN9J8iZGCNEjceB2qXZCKJ2r731QpxvOWv4WkB6Q&oe=6657771B" alt="Logo" />
      </div>
      <div className="buttonGroup">
        <div className="buttonGroup">
          {["HOME", "PROJECT", "CONTACT"].map((buttonName, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={selectedButton === index ? 'selected' : ''}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>
      <div className="contactGroup">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Logo" />
        <img src="https://freepngtransparent.com/wp-content/uploads/2023/03/tiktok-png-104.png" alt="Logo" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuBWrGRmIOUnNMkJ0aKX3UEU4I8oHy1hjucelw6L2TVUD68P1eiQoTyiYfKXRRZc6yrE&usqp=CAU" alt="Logo" />
      </div>

    </div>
  );
};

export default Sidebar;
