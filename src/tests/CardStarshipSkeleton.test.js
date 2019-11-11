import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { CardStarshipSkeleton } from '../components';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it('Test - CardStarshipSkeleton', () => {
    act(() => {
        ReactDOM.render(<CardStarshipSkeleton />, container);
    });
});