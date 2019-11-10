import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PeopleUtil } from '../../util';
import { CustomSearchApi } from '../../services';

export function CardPerson({ person }) {
    const { name, height, mass, films, gender } = person;

    const [info, setInfo] = useState({
        image: 'http://www.central3.com.br/wp-content/themes/c3/img/default-placeholder.png',
        snippet: 'Star Wars is an American epic space-opera media franchise created by George Lucas. The franchise began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.'
    });

    useEffect(() => {
        // CustomSearchApi.getInfos(name)
        //     .then(data => {
        //         console.log('data', data[0])
        //         if (!data.error) {
        //             if (data.length > 0) {
        //                 setInfo(data[0]);
        //             }
        //         } else {
        //             setInfo({
        //                 image: 'http://www.central3.com.br/wp-content/themes/c3/img/default-placeholder.png',
        //                 snippet: 'dshfadshfoudshoif uhdhfadhsfohdau fahdshfaodhsofiah doiuhfaoid uhfiadhfhad fa dhsfhadisuhfoah odsuhfa hd'
        //             });
        //         }
        //     });
    }, [ name ]);

    return (
        <div className="wrapper">
            <Link to={`/starships?personId=${PeopleUtil.GetPersonId(person.url)}`}>
                <div className="card">
                    <div>
                        <img src={info.image} alt={name} width="300px" height="230px" className="image-card" />
                    </div>
                    
                    <div className="card-level">{gender}</div>
                    
                    <div className="card-unit-name">{name}</div>
                    
                    <div className="card-unit-description">
                        {info.snippet}
                    </div>

                    <div className="card-unit-stats card-unit-stats-sw clearfix">
                        <div className="one-third">
                            <div className="stat">{height !== 'unknown' ? height : 'X'}</div>
                            <div className="stat-value">Height</div>
                        </div>

                        <div className="one-third">
                            <div className="stat">{films.length !== 'unknown' ? films.length : 'X'}</div>
                            <div className="stat-value">Films</div>
                        </div>

                        <div className="one-third no-border">
                            <div className="stat">{mass !== 'unknown' ? mass : 'X'}</div>
                            <div className="stat-value">Mass</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}