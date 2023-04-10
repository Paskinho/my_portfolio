import React from "react";
import s from "./Main.module.scss"
import sContainer from '../../common/styles/Container.module.css'
import profilePhoto from './../../assets/images/ProfilePhoto.jpg'
import Particles from 'tsparticles';
// import { tsParticles } from "tsparticles";
import {loadFull} from 'tsparticles';
import { Fade } from "react-awesome-reveal";
import Typewriter from 'typewriter-effect'


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

        <div className={s.mainBlock}>
            {/*<Particles className={s.particles} options={particlesOpt}/>*/}
            <Fade direction={'up'} cascade={true}>
            <div className={sContainer.container}>
            <div className={s.text}>
                <span>Hello!</span>
                <div className={s.mainText}>
                <h1>I am Uladzislau Paskanau</h1>

                </div>
                <Typewriter options={
                    {strings: "Frontend Developer",
                    autoStart: true,
                        delay: 100,
                        loop: true
                    }} />
            </div>
            <div className={s.photo} style={profile}>
                <img />
            </div>
            </div>
            </Fade>
        </div>
    );
}