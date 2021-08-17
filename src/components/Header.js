import React, { useState } from 'react';
import img from './img/banner.jpg'

const Header = () => {

    const [navUl, setNavUl] = useState('hide');

    return (
        <>
            <header>
                <nav>
                    <div className='container'>
                        <h2>Start Bootstrap</h2>
                        <div className='icons'>
                            <i className='fas fa-bars' id='bars' onClick={() => (navUl === 'hide')? setNavUl('show'):setNavUl('hide')}></i>
                        </div>
                        <ul className={navUl}>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Blogs</a></li>
                            <li><a href='#'>Service</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <main>
                    <h3>Welcome To Our Studio</h3>
                    <h1>IT'S NICE TO MEET YOU</h1>
                    <a href='#'>TELL ME MORE</a>
                </main>
            </header>
        </>
    );
};

export default Header;