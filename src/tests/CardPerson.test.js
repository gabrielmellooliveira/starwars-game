import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { CardPerson } from '../components';
import { BrowserRouter } from 'react-router-dom';

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

it('Test - CardPerson', () => {
    act(() => {
        const person = {
            name: 'Test - Card-Unit-Name', 
            gender: 'Test - Card-Level',
            height: 500, 
            mass: 500, 
            films: ['', ''],
            url: 'test'
        }

        ReactDOM.render(<BrowserRouter><CardPerson person={person} /></BrowserRouter>, container);
    });

    const span_level = container.querySelector('.card-level');
    expect(span_level.textContent).toBe('Test - Card-Level');

    const span_unit_name = container.querySelector('.card-unit-name');
    expect(span_unit_name.textContent).toBe('Test - Card-Unit-Name');
});