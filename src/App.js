import './App.css';
import logo from './assets/azri_logo.png';
import profilePic from './assets/dummy_profile.png';
import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { getSocialData } from './models/social';
import { getRepo } from './models/github_repo';
import resume from './assets/resume.pdf';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Adjust this value to add the desired distance
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  function fadeInOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight) {
        element.classList.add('show');
      }
    });
  }

  // Call the function when the page is loaded and when scrolling occurs
  document.addEventListener('DOMContentLoaded', fadeInOnScroll);
  window.addEventListener('scroll', fadeInOnScroll);

  const socialData = getSocialData();
  const githubRepo = getRepo();

  return (
    <div className='w-[100%] bg-white'>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='top'
        lockBackgroundScroll={true}
      >
        <div className='pt-10'>
          <nav className='flex flex-col gap-5 items-center'>
            <span className='cursor-pointer text-slate' onClick={() => scrollToSection('home')}>Home</span>
            <span className='cursor-pointer text-slate' onClick={() => scrollToSection('about')}>About</span>
            <span className='cursor-pointer text-slate' onClick={() => scrollToSection('contact')}>Contact</span>
            <a
              href={resume}
              download="resume"
              target="_blank"
              rel="noreferrer"
              className='cursor-pointer'>
              <button className='bg-slate-700 hover:bg-slate-800 text-white p-3'>
                Download CV</button>
            </a>
          </nav>
        </div>
      </Drawer>
      {/* logo and navbar */}
      <div className='px-5 py-5 sticky top-0 z-10 bg-gradient-to-t from-transparent to-white'>
        <div className='flex w-full justify-between items-center'>
          <div className='burger-menu' onClick={toggleDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div>
            <img src={logo} alt="Logo" className='h-6' />
          </div>
          <div className='nav-bar-menu'>
            <nav className='flex gap-10 items-center'>
              <span className='cursor-pointer text-slate hover:border-b-4 border-slate-700' onClick={() => scrollToSection('home')}>Home</span>
              <span className='cursor-pointer text-slate hover:border-b-4 border-slate-700' onClick={() => scrollToSection('about')}>About</span>
              <span className='cursor-pointer text-slate hover:border-b-4 border-slate-700' onClick={() => scrollToSection('contact')}>Contact</span>
              <a
              href={resume}
              download="resume"
              target="_blank"
              rel="noreferrer"
              className='cursor-pointer'>
              <button className='bg-slate-700 hover:bg-slate-800 text-white p-3'>
                Download CV</button>
            </a>
            </nav>
          </div>
        </div>
      </div>
      <div>
        {/* home section */}
        <section className='p-5 h-screen w-full bg-gradient-to-t flex justify-center from-slate-100 to-white' id='home'>
          <div className='flex flex-col lg:flex-row justify-evenly items-center w-[90%] pb-40 '>
            <div className='space-y-5 order-2 lg:order-1 justify-center items-center lg:items-start flex flex-col'>
              <div className='text-center lg:text-left'>
                <h1 className='text-4xl font-bold mb-2'>Hello, I'm Azri</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <a
              href={resume}
              download="resume"
              target="_blank"
              rel="noreferrer"
              className='cursor-pointer'>
              <button className='bg-slate-700 hover:bg-slate-800 text-white p-3'>
                Download CV</button>
            </a>
            </div>
            <div className='order-1 lg:order-2'>
              <img src={profilePic} alt="Azri" className='w-[300px] lg:w-[400px]' />
            </div>
          </div>
        </section>
        {/* about section */}
        <section className='p-5 w-full flex flex-col items-center space-y-10 lg:space-y-32 bg-gradient-to-t from-slate-200 to-slate-100' id='about'>
          <div className='space-y-5 text-center'>
            <h1 className='text-4xl font-bold'>Latest Project</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='lg:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
              githubRepo.map((item, index) => (
                <div key={index} className='grid grid-cols-1 lg:grid-cols-2 bg-slate-400 p-5 rounded-xl min-h-[200px]'>
                  <div className='mb-5 lg:mb-0 lg:mr-5'>
                    <img src={item.imageUrl} alt={item.name} className='w-[100%] h-[100%] rounded-xl' style={{ objectFit: 'cover' }} />
                  </div>
                  <div className='flex flex-col'>
                    <div className='space-y-2 flex-1'>
                      <h1 className='text-white font-bold text-2xl'>{item.name}</h1>
                      <h4 className='text-sm'>{item.description}</h4>
                    </div>
                    <div className='overflow-hidden mt-4'>
                      <h4 className='text-sm'>{item.url}</h4>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>

        </section>
        {/* contact section */}
        <section className='p-5 h-screen w-full grid place-items-center bg-gradient-to-t from-slate-100 to-slate-200' id='contact'>
          <div className='grid grid-cols-1 sm:grid-cols-2 justify-evenly lg:w-[90%] gap-6 sm:mx-10'>
            {/* text container */}
            <div className=''>
              <h1 className='text-4xl font-bold mb-2'>Get In Touch</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            {/* platform container */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 fade-in'>
              {
                socialData.map((item, index) => (
                  <div key={index} className='bg-slate-400 p-5 rounded-xl'>
                    <h1 className='text-white font-bold'>{item.type}</h1>
                    <h4 className='text-sm'>{item.name}</h4>
                    <h4 className='text-sm'>{item.socialName}</h4>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </div>
      {/* footer */}
      <div className='w-[100%] h-[200px] bg-slate-800' id='footer'>

      </div>
    </div>
  );
}

export default App;