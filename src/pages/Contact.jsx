import React from 'react';

function Contact() {
    return (
        <div class="flex flex-col justify-center items-center py-6">
            <div class="flex-col bg-slate-200 m-2 border-2 border-slate-500 rounded-lg px-10 py-3">
                <p>Hi! I'm Nick, the creator of this website.</p>
                <p>This website is meant to be a personal project site showcasing my skills and acting as a portfolio for my other projects.</p>              
                <a class="text-sky-400" href="https://www.linkedin.com/in/nicholas-nguyen-185499179/">Connect with me on LinkedIn</a>
                <br></br>
                <a  class="text-sky-400" href="https://github.com/nicknguyen-nc">Personal/School Github</a>
                <br></br>
                <a  class="text-sky-400" href="https://github.com/nicholasnguyennc/">SonoVol Internship Github</a>
            </div>
        </div>
    )
}

export default Contact;