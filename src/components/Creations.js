import React, { useContext } from 'react';
import { LandingContext } from '../context/LandingContext';
import './../styles/creations.css';

import deepEarthMb from './../assets/mobile/image-deep-earth.jpg';
import deepEarthDk from './../assets/desktop/image-deep-earth.jpg';

import nightArcadeMb from './../assets/mobile/image-night-arcade.jpg';
import nightDesktopDk from './../assets/desktop/image-night-arcade.jpg';

import soccerTeamMb from './../assets/mobile/image-soccer-team.jpg';
import soccerTeamDk from './../assets/desktop/image-soccer-team.jpg';

import gridMb from './../assets/mobile/image-grid.jpg';
import gridDk from './../assets/desktop/image-grid.jpg';

import fromAboveMb from './../assets/mobile/image-from-above.jpg';
import fromAboveDk from './../assets/desktop/image-from-above.jpg';

import pocketBorealisMb from './../assets/mobile/image-pocket-borealis.jpg';
import pocketBorealisDk from './../assets/desktop/image-pocket-borealis.jpg';

import curiosityMb from './../assets/mobile/image-curiosity.jpg';
import curiosityDk from './../assets/desktop/image-curiosity.jpg';

import fisheyeMb from './../assets/mobile/image-fisheye.jpg';
import fisheyeDk from './../assets/desktop/image-fisheye.jpg';


export const Creations = () => {

    const device = useContext(LandingContext);

    return (
        <section className="creations">
            <h2>Our creations</h2>
        
            <div className="creations_imgs">

                <button>See all</button>

                <picture>
                    <img src={ (device === 'Mobile') ? deepEarthMb : deepEarthDk } alt="Deep earth"/>
                    <div className="bg_creations_imgs">
                        <p>Deep earth</p>    
                    </div>
                </picture>
                
                <picture>
                    <img src={ (device === 'Mobile') ? nightArcadeMb : nightDesktopDk } alt="Night arcade"/>
                    <div className="bg_creations_imgs">
                        <p>Night arcade</p>
                    </div>
                </picture>

                <picture>
                    <img src={ (device === 'Mobile') ? soccerTeamMb : soccerTeamDk } alt="Soccer team VR" />
                    <div className="bg_creations_imgs">
                        <p>Soccer team VR</p>
                    </div>
                </picture>

                <picture>
                    <img src={ (device === 'Mobile') ? gridMb : gridDk } alt="The grid"/>
                    <div className="bg_creations_imgs">
                        <p>The grid</p>
                    </div>
                </picture>

                <picture>
                    <img src={ (device === 'Mobile') ? fromAboveMb : fromAboveDk } alt="From up above VR"/>
                    <div className="bg_creations_imgs">
                        <p>From up above VR</p>
                    </div>
                </picture>

                <picture>
                    <img src={ (device === 'Mobile') ? pocketBorealisMb : pocketBorealisDk } alt="Pocket borealis" />
                    <div className="bg_creations_imgs">
                        <p>Pocket borealis</p>
                    </div>
                </picture>

                <picture>
                    <img src={ (device === 'Mobile') ? curiosityMb : curiosityDk } alt="The curiosity"/>
                    <div className="bg_creations_imgs">
                        <p>The curiosity</p>
                    </div>
                </picture>

                <picture>
                    <img src={ (device === 'Mobile') ? fisheyeMb : fisheyeDk } alt="Make it fisheye" />
                    <div className="bg_creations_imgs">
                        <p>Make it fisheye</p>
                    </div>
                </picture>
            </div>
        </section>
    )
}
