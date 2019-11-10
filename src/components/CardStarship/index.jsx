import React, { useState, useEffect } from 'react';
import { CustomSearchApi } from '../../services';

export function CardStarship({ starship }) {
    const { 
        model, name, MGLT, max_atmosphering_speed, length,
        manufacturer, passengers, cargo_capacity, starship_class,
        hyperdrive_rating, crew, consumables
    } = starship;

    const [image, setImage] = useState('http://www.central3.com.br/wp-content/themes/c3/img/default-placeholder.png');

    useEffect(() => {
        CustomSearchApi.getImage(name)
            .then(data => setImage(data[0]));
    }, [ name ]);

    return (
        <div className="wrapper" style={{ width: 900 }}>
            <div className="card" style={{ width: 400 }}>
                <div>
                    <img src={image} alt={name} width="400px" height="300px" className="image-card" />
                </div>
                
                <div className="card-level">{model}</div>
                
                <div className="card-unit-name">{name}</div>
                
                <div className="card-unit-description">
                    This ship was manufactured by <b>{manufacturer}</b> and it supports <b>{passengers}</b> passengers. 
                    It has a load capacity of <b>{cargo_capacity}</b> and has a crew of <b>{crew}</b> {crew < 2 ? 'person' : 'people'}. 
                    Its class is <b>{starship_class}</b> and its hyperdrive rating is <b>{hyperdrive_rating}</b>. (Consumables: <b>{consumables}</b>)
                </div>

                <div className="card-unit-stats card-unit-stats-sw clearfix">
                    <div className="one-third">
                        <div className="stat">{MGLT !== 'unknown' ? MGLT : 'X'}</div>
                        <div className="stat-value">MGLT</div>
                    </div>

                    <div className="one-third">
                        <div className="stat">{max_atmosphering_speed !== 'unknown' ? max_atmosphering_speed : 'X'}</div>
                        <div className="stat-value">Speed</div>
                    </div>

                    <div className="one-third no-border">
                        <div className="stat">{length !== 'unknown' ? length : 'X'}</div>
                        <div className="stat-value">Length</div>
                    </div>
                </div>
            </div>
        </div>
    );
}