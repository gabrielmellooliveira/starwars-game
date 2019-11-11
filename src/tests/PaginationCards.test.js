import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { PaginationCards } from '../components';

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

it('Test - PaginationCards', () => {
    act(() => {
        ReactDOM.render(<PaginationCards data={{ count: 4 }} />, container);
    });

    const span = container.querySelector('span');
    expect(span.textContent).toBe('Total of people: 4');
});