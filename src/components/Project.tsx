import React from "react";

import mock05 from '../assets/images/mock12.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock11 from '../assets/images/mock11.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://resume-craft-five.vercel.app/" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://resume-craft-five.vercel.app/" target="_blank" rel="noreferrer"><h2>ResumeCraft</h2></a>
                <p>ResumeCraft is an intuitive resume-building application designed to help users create professional and customizable resumes effortlessly. The platform offers a variety of templates, real-time previews, and AI-powered content suggestions, ensuring that users can highlight their skills and experiences effectively.</p>
            </div>
            <div className="project">
                <a href="https://carepluse-phi.vercel.app/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://carepluse-phi.vercel.app/" target="_blank" rel="noreferrer"><h2>CarePluse</h2></a>
                <p>A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.</p>
            </div>
            <div className="project">
                <a href="https://expense-chi-gold.vercel.app/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://expense-chi-gold.vercel.app/" target="_blank" rel="noreferrer"><h2>Expense Tracker</h2></a>
                <p>Expense Tracker allows users to efficiently track and manage their personal expenses while gaining insights into their spending habits. The app is built with Ruby on Rails and JavaScript, providing a secure and user-friendly experience.</p>
            </div>
            <div className="project">
                <a href="https://real-time-chat-self-nine.vercel.app/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://real-time-chat-self-nine.vercel.app/" target="_blank" rel="noreferrer"><h2>Real Time Chat</h2></a>
                <p>Real-Time Chat is a dynamic chat application built with raw WebSockets in Node.js, enabling admins to create customizable chat rooms with features like live messaging, upvote-based message prioritization, and real-time alerts for highly upvoted messages, ensuring an engaging and interactive user experience.</p>
            </div>
            <div className="project">
                <a href="https://techcare-9nyjdwt0t-yadavshubham01s-projects.vercel.app/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://techcare-9nyjdwt0t-yadavshubham01s-projects.vercel.app/" target="_blank" rel="noreferrer"><h2>Tech Care</h2></a>
                <p>TechCare is a web application designed to enhance healthcare services by streamlining doctor-patient interactions. It provides features like appointment scheduling, patient management, and seamless communication tools, ensuring a user-friendly experience.</p>
            </div>
            <div className="project">
                <a href="https://mate-x.vercel.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://mate-x.vercel.app/" target="_blank" rel="noreferrer"><h2>MateX</h2></a>
                <p>Build teams to bring their ideas to life. Leveraged technologies such as React for the frontend, Node.js and Express for the backend, MongoDB for data storage, and integrated real-time messaging using Socket.IO. Implemented user authentication with JWT, Google OAuth, and features like project liking, commenting, and sharing to enhance user engagement and interaction.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;