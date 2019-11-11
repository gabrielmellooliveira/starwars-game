import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { CardStarship } from '../components';

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

it('Test - CardStarship', () => {
    act(() => {
        const starship = {
            name: 'Test - Card-Unit-Name', 
            model: 'Test - Card-Level',
            MGLT: 500, 
            max_atmosphering_speed: 500, 
            length: 500,
            manufacturer: 'test', 
            passengers: 500, 
            cargo_capacity: 500, 
            starship_class: 'test',
            hyperdrive_rating: 500, 
            crew: 5, 
            consumables: '1 month'
        }

        ReactDOM.render(<CardStarship starship={starship} />, container);
    });

    const span_level = container.querySelector('.card-level');
    expect(span_level.textContent).toBe('Test - Card-Level');

    const span_unit_name = container.querySelector('.card-unit-name');
    expect(span_unit_name.textContent).toBe('Test - Card-Unit-Name');
});