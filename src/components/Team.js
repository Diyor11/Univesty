import React from 'react';
import user1 from './img/user1.jpg';

const Team = () => {
    return (
        <div className='team'>
            <div className='title'>
                <h2>Team</h2>
                <i>Lorem apsum dolor something and nobody</i>
            </div>
            <div className='container'>
                <div className='row mb-20'>
                    <div className='col-4'>
                        <img src={user1} alt='s' className='br-50'/>
                        <h3>Kay Garlend</h3>
                        <p>Davi loremsm</p>
                        <div className='m-icons'>
                            <i class="fab fa-linkedin-in"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img src={user1} alt='s' className='br-50'/>
                        <h3>Larry Parker</h3>
                        <p>Davi loremsm</p>
                        <div className='m-icons'>
                            <i class="fab fa-linkedin-in"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img src={user1} alt='s' className='br-50'/>
                        <h3>Dianna Piterson</h3>
                        <p>Davi loremsm</p>
                        <div className='m-icons'>
                            <i class="fab fa-linkedin-in"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;