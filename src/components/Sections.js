import React, { useContext } from 'react';
import { LandingContext } from '../context/LandingContext';
import { Creations } from './Creations';
import './../styles/sections.css';

import interactiveDk from './../assets/desktop/image-interactive.jpg';
import interactiveMb from './../assets/mobile/image-interactive.jpg';


export const Sections = () => {

    const device = useContext(LandingContext);
    
    return (
        <>
            <section className="interactive">
                
                <img src={ (device === 'Mobile') ? interactiveMb : interactiveDk } alt="Interactive"/>
                
                <div>
                    <h3>The leader in interactive VR </h3>
                
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.</p>
                </div>
            </section>

            <Creations />
        </>
    )
}
