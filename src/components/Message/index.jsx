import React from 'react';

import './styles.scss';

export function Message({ text }) {
    return (
        <span className="message">{text}</span>
    );
}