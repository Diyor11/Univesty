import React from 'react';
import img from './img/banner.jpg';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className='title'>
                <h1>Portfolio</h1>
                <i>Lorem apsum dolor and something and nobody</i>
            </div>
            <div className='container'>
            <div className='row mb-20'>
                    <div className='col-4'>
                        <img src={img} alt='img' />
                        <h2>soem</h2>
                        <p>some thing</p>
                    </div>
                    <div className='col-4'>
                        <img src={img} alt='img' />
                        <h2>soem</h2>
                        <p>some thing</p>
                    </div>
                    <div className='col-4'>
                        <img src={img} alt='img' />
                        <h2>soem</h2>
                        <p>some thing</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <img src={img} alt='img' />
                        <h2>soem</h2>
                        <p>some thing</p>
                    </div>
                    <div className='col-4'>
                        <img src={img} alt='img' />
                        <h2>soem</h2>
                        <p>some thing</p>
                    </div>
                    <div className='col-4'>
                        <img src={img} alt='img' />
                        <h2>soem</h2>
                        <p>some thing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;