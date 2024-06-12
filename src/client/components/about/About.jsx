import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import HorizontalScrollableContent from '../horizontalScrollableContent/HorizontalScrollableContent';


const About = () => {
  useEffect(() => {
    const stickySections = [...document.querySelectorAll('.sticky_wrap')]
    window.addEventListener('scroll', (e) => {
      for (let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i])
      }
    })

    function transform(section) {
      const offsetTop = section.parentElement.offsetTop;
      const scrollSection = section.querySelector('.horizontal_scroll')
      let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;
      scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
    }
  }, [])

  return (
    <div className="about">
      <div className="intro">
        <h1>Câu chuyện về Tào Việt Đức</h1>
        <h2>Chào mừng bạn đến với trang web của tôi</h2>
      </div>

      <div className="line">
        <div className="line-container">
          <div className="line-slide">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png" alt="HTML" className="icon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt="CSS" className="icon" />
            <img src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="JavaScript" className="icon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" className="icon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/2560px-Spring_Framework_Logo_2018.svg.png" alt="Spring" className="icon" />
            <img src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png" alt="MySQL" className="icon" />
            <img src="https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-8.png" alt="Redux" className="icon" />
          </div>
        </div>
      </div>


      <div className="hybrid">
        <div className="hybrid-top">
          <img src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/431370144_934070165064227_4112935974353204257_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nkRbvTRfvhgQ7kNvgF5XT1i&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYDHT4A-W6x_TtDT-sVXy0qEabn84SyEC_FuhggQW035qQ&oe=665E98FD" alt="hybrid" />
        </div>

        <div className="scroll_container">

          <div className="sticky_wrap">

            <div className="horizontal_scroll" >
              <div className="scroll_contents">
                <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/430266692_933023031835607_7149511214013367411_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TNu_unwMwFIQ7kNvgHYxPsr&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBPWwdljasv07qcq1nBFGtXH7t-tGNfB7t340ySYrwwxw&oe=665E6DA6" alt="hybrid" />
                <img src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/439227836_966479991823244_2568427558165172760_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pk1Ep6t1W58Q7kNvgEcNdlq&_nc_ht=scontent.fsgn2-8.fna&oh=00_AYBrSbj2skhpsgVomVzd6ZUjknPCd-6kOw_a7EMhx1NjpA&oe=665E9698" alt="hybrid" />
                <img src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/386095497_846897713781473_3023870022084553956_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mzSFT3uJ_asQ7kNvgHH31W6&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYDM-m-boVARkinInFJ7U9KFOkCj6PbJMA2GhBCFDCQQ4Q&oe=665E9713" alt="hybrid" />
              </div>
            </div>

          </div>
        </div>

        <div className="hybrid-bottom">
          <div className="service-detail-bottom-1">
            <div className="service-detail-image-container-1">
              <img src="https://picsum.photos/seed/picsum/600/400" alt="Service Detail" className="service-detail-image-1" />
            </div>
            <div className="service-detail-info-1">
              <h2>Room Information</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
              <p>Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.</p>
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          </div>
          <div className="service-detail-bottom-1">
            <div className="service-detail-info-1">
              <h2>Room Information</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
              <p>Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.</p>
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            <div className="service-detail-image-container-1">
              <img src="https://picsum.photos/seed/picsum/600/400" alt="Service Detail" className="service-detail-image-1" />
            </div>
          </div>

        </div>
      </div>
      {/* Add more sections as needed */}
    </div >

  );
};

export default About;


