import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Message } from '../components';

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

it('Test - Message', () => {
    act(() => {
        ReactDOM.render(<Message text="Test" />, container);
    });

    const span = container.querySelector('span');
    expect(span.textContent).toBe('Test');
});