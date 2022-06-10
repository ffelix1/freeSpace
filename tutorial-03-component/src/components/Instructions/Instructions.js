import React from 'react';
import './Instructions.css';
import sword from './sword.svg';

const Instructions = () => (
    <div className="instructions">
        <img alt="laughing crying emoji" src={sword} />
        {/*<Emoji></Emoji>*/}
        <p>Click on an emoji to view the emoji short name.</p>
    </div>
)

export default Instructions;