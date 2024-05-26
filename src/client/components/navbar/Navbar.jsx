import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Navbar.css';
import Sidebar from '../sidebar/Sidebar'; // Import Sidebar component

const users = [
  { id: 1, name: 'User 1' },
];

const imageData = [
  { src: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/386095497_846897713781473_3023870022084553956_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEEInYQkJxQeGUM2QzlqAQIgWsj0z6VTh-BayPTPpVOH2_MK0BdKCJv1Ffu9bUEX-n7h59XpCTsKWFmS3XUkH-I&_nc_ohc=l6XSpulEwNwQ7kNvgHfYQ3g&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYDwsj9kq53_34qmLuzgebirD2FY7u6xoqpINb_RPiIc7w&oe=66555C93", alt: "Image 1" },

];

const Navbar = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="navbar">
      <div className="buttonGroup">
        {/* Add buttons here if needed */}
        <div className="sidebar-container">
          <Sidebar /> {/* Render the Sidebar component */}
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
                <button>DƠNLOAD CV</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



export default Navbar;


// <div className="user-container">
//           <div className="user-content">
//             <h1>USER MANAGEMENT</h1>
//             <div className="user-list">
//               {users.map((user) => (
//                 <div key={user.id} className="user-card">
//                   <div className="image-container">
//                     {/* <img
//                       src={require(`./PHONGVIP1.jpg`)}
//                       alt={user.name}
//                       className="user-image"
//                     /> */}
//                   </div>
//                   <h2>{user.name}</h2>
//                   {/* <p>Type: {user.type}</p> */}
//                   {/* <p>Price: ${user.price} per night</p> */}
//                   <button onClick={() => handleViewDetails(user)}>View Details</button>
//                 </div>
//               ))}
//             </div>
//             {selectedUser && (
//               <div className="user-details-overlay">
//                 <div className="user-details">
//                   <div className="image-container">
//                     {/* <img
//                       src={require(`./PHONGVIP1.jpg`)}
//                       alt={selectedUser.name}
//                       className="user-image-details"
//                     /> */}
//                   </div>
//                   <p>ID: </p>
//                   <p>FullName: </p>
//                   <p>Birthday: </p>
//                   <p>Address: </p>
//                   <p>Phone: </p>
//                   <p>Email: </p>
//                   <p>Code: </p>
//                   <p>Role: </p>
//                   <button onClick={() => setSelectedUser(null)}>Close</button>
//                 </div>
//               </div>
//             )}
//           </div>


// const users = [
//   { id: 1, name: 'User 1' },
//   { id: 2, name: 'User 1' },
//   { id: 3, name: 'User 1' },
//   { id: 4, name: 'User 1' },
//   { id: 5, name: 'User 1' },
//   { id: 6, name: 'User 1' },
//   { id: 7, name: 'User 1' },
//   { id: 8, name: 'User 1' },
//   { id: 9, name: 'User 1' },
// ];


// { src: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/439227836_966479991823244_2568427558165172760_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGA3fmgp4NCr2zXKk9n2D1Q2ozGtpIgqinajMa2kiCqKV9CQM0_GuJZLPmDzkDW8D2TxpPCSgijaVsCL7qKX4tn&_nc_ohc=WWAZng_dsP8Q7kNvgHO61LA&_nc_ht=scontent.fsgn2-8.fna&oh=00_AYCy87-w3d3T2wmQSxNaHYvh5Ztj5mFvOxxCr87quWImOg&oe=66555C18", alt: "Image 2" },
// { src: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/430282997_929505738854003_4533174467610362373_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGnVGex0jd4D01fIlmLotAOboRjRB_zo3puhGNEH_OjemWHhnlFGCnW1b-g4HPbfbR_AqKp2ir2f7iREwtdraZx&_nc_ohc=gTkrqPZSL5YQ7kNvgFHffUT&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYB22RYO9C-ukc416JFrTZlh8n_Lilg5jH9UiArGf21NeA&oe=665569C9", alt: "Image 3" },
// { src: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/391586212_851535819984329_5135781134626664019_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHcZeclaXDVfCgW9gcuANlsp4gUN3IYAUyniBQ3chgBTGVUvvhzhlwHwDH34tqM8pfUais0z2b8UeMikIFLIOkC&_nc_ohc=6Ng7R-h_aOcQ7kNvgHh7hu2&_nc_ht=scontent.fsgn2-10.fna&oh=00_AYARoeLdye8R5rosVd4FoFB8s-YWEcWgOc4zqtgJ75ehdg&oe=66553B7E", alt: "Image 1" },
// { src: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/410217245_882080576929853_4750401315004702030_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFxDakqdqzNErD5XRYUeJfxcL1-B2MLZKZwvX4HYwtkppQUA9OfvY1D3cRT2dqW6w8wusHWAU7QVRIgIJABkEv-&_nc_ohc=poHz0-_Jt-MQ7kNvgGGPvrz&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYCgLGLGwY5Ub0dbF2puYGt_gr90c4nJ21TmDfX8C9bQOQ&oe=6655574E", alt: "Image 3" },
// { src: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/405271113_873080964496481_994749163314366702_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEuody5c9fS271_xRCf3Q3jxZpVa1v1h9LFmlVrW_WH0ro8p30YFo5TEx7K36CjgVy3_OoXXp3_J_aCg91_NJKG&_nc_ohc=6rRUlYh4uUAQ7kNvgGu8wif&_nc_ht=scontent.fsgn2-10.fna&oh=00_AYDYJGvWMZKJBBIIpaHwjavSNSq_CwKZlvVItgqK5xWVEQ&oe=665559E1", alt: "Image 3" },
// { src: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/364078255_809207030883875_6673894462069940129_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGFYeDRQWiTxyNSFix03NnxCJeV_df_0QwIl5X91__RDD_rBIw5ZMMIHX4tjZGkxOyqOBGFycZFsxgYW9XdhRwz&_nc_ohc=J6zrYmF_5p8Q7kNvgF7K6UC&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYBziEPpURzCf-AUNK0ynL8my9oUXE0p-4IVh4pluHKNlQ&oe=665558CF", alt: "Image 3" },
// { src: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/347269168_775900334214545_4284690616898969472_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHsmgM65GD0VxH1OKxJF3JuvAua4-OgOSe8C5rj46A5Jz49w9VLIDUypPpraXzprzOmzzEaXQfWGxoWkYxjeyyg&_nc_ohc=pOGJacaAkNcQ7kNvgHzYduf&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYDZ-U3POKfZtbJMdHmp6vM-n7gDYNXNEVkVEP_tTBGeEQ&oe=66554A5D", alt: "Image 3" },
// { src: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/336251290_3374346279470821_9132223158597616312_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGQ7RWrEi9dfnqJglfDJdgRWFISyzR2dWFYUhLLNHZ1YRsgN5yz64Py0-HW5kzX5bhL_kLS7ZAHWoSUdpaLS3NU&_nc_ohc=_tAjBMnb5qkQ7kNvgF2AYL2&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYBzYQZSeLnKeB61u_aWmeXw1Dlq096Q4YwWSeA6k3Nn9g&oe=66554364", alt: "Image 3" },
