import React from "react";
import s from "./Main.module.scss"
import sContainer from '../../common/styles/Container.module.css'
import profilePhoto from './../../assets/images/ProfilePhoto.jpg'
// import Particles from 'tsparticles';
// import { tsParticles } from "tsparticles";
import {loadFull} from 'tsparticles';
import {Fade} from "react-awesome-reveal";
import Typewriter from 'typewriter-effect'
import {Tilt} from 'react-tilt'
import Particles from 'react-particles-js'


export const Main = () => {

    const profile = {
        backgroundImage: `url(${profilePhoto})`,
    }

    const particlesOpt = {
        'particles': {
            'number': {
                'value': 150,
                'density': {
                    'enable': true,
                    'value_area': 800
                }
            }

        }
    }


    return (

        <div id='main' className={s.mainBlock}>
            {/*<Particles className={s.particles} options={particlesOpt}/>*/}
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hello!</span>
                    <div className={s.mainText}>
                        <h1>I am Uladzislau Paskanau</h1>
                    </div>
                    <Typewriter options={
                        {
                            strings: "Frontend Developer.",
                            autoStart: true,
                            delay: 100,
                            loop: true
                        }}/>
                    <div>
                        <p>Experience in JavaScript, TypeScript, React, Redux, Redux Toolkit.</p>
                    </div>
                </div>
                <Tilt options={{
                    max: 35,
                }}>
                    <div className={s.photo} style={profile}>
                        <img/>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}