import React from 'react';
import './styles.scss';

export function ButtonGame({ text, onClick }) {
    return (
        <div>
            <span className="button-game" onClick={onClick}>
                {text}
            </span>
        </div>
    );
}