import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { CardPersonSkeleton } from '../components';

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

it('Test - CardPersonSkeleton', () => {
    act(() => {
        ReactDOM.render(<CardPersonSkeleton />, container);
    });
});