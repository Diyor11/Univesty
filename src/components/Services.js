import React from 'react';

const Services = () => {
    return (
        <div className='service'>
            <div className='title'>
                <h1>Services</h1>
                <i>Lorem epsum dolor and something avarybod</i>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <i class="fas fa-shopping-cart"></i>
                        <h2>E-Commerce</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perferendis incidunt aliquam quia expedita! Eius ipsum
                            beatae, maiores dolore maxime repellendus!
                        </p>
                    </div>
                    <div className='col-4'>
                        <i class="fas fa-laptop"></i>
                        <h2>Responsive Design</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perferendis incidunt aliquam quia expedita! Eius ipsum
                            beatae, maiores dolore maxime repellendus!
                        </p>
                    </div>
                    <div className='col-4'>
                        <i class="fas fa-lock"></i>
                        <h2>Web-security</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perferendis incidunt aliquam quia expedita! Eius ipsum
                            beatae, maiores dolore maxime repellendus!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Services;