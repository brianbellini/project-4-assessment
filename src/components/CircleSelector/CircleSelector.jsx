import React from 'react';
import './CircleSelector.css'

export default function CircleSelector(props) {
    return (
        <div className="CircleSelector">
            <button className={props.selected === 1 ? 'selected' : ''} onClick={() => props.handleSelected(1)}>SELECT CIRCLE 1</button>
            <button className={props.selected === 2 ? 'selected' : ''} onClick={() => props.handleSelected(2)}>SELECT CIRCLE 2</button>
            <button className={props.selected === 3 ? 'selected' : ''} onClick={() => props.handleSelected(3)}>SELECT CIRCLE 3</button>
            <button className={props.selected === 4 ? 'selected' : ''} onClick={() => props.handleSelected(4)}>SELECT CIRCLE 4</button>
        </div>
    )
}