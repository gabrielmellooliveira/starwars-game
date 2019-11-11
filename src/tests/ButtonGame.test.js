import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ButtonGame } from '../components';

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

it('Test - ButtonGame', () => {
    act(() => {
        ReactDOM.render(<ButtonGame text="Test" onClick={() => console.log('test')} />, container);
    });

    const span = container.querySelector('span');
    expect(span.textContent).toBe('Test');
});