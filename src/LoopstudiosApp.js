import React, { useEffect, useState } from 'react';
import { LandingContext } from './context/LandingContext';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Sections } from './components/Sections';
import './styles/global.css'

export const LoopstudiosApp = () => {

    const [screenWidth, setScreenWidth] = useState('');
    
    useEffect(() => {
        
        const gettingWidth = (windowSize) => {
            
            
            if( (typeof windowSize) === 'object'){
                windowSize = windowSize.target.innerWidth;
            }
            
            (windowSize <= 700)
                ?   setScreenWidth('Mobile')
                :   setScreenWidth('Desktop');
        }
        
        window.onload = gettingWidth(window.innerWidth);
        window.addEventListener('resize', gettingWidth);
        
        return () => {
            window.removeEventListener('resize', gettingWidth);
        };
    }, [])

    return (
        
        <LandingContext.Provider value={screenWidth}>
            <Header/>
            
            <Sections/>
            
            <Footer/>
        </LandingContext.Provider>    
    )
}
