import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import { SwApi } from '../../services';
import { Grid } from '@material-ui/core';
import { PeopleUtil, LoadingUtil } from '../../util';
import { 
    CardStarship, CardStarshipSkeleton, 
    HeaderGame, ButtonGame, Message
} from '../../components';

import '../../assets/styles/styles.scss';

export function Starships({ history }) {
 
    const location = useLocation();
    const parsed = queryString.parse(location.search);
    const { personId } = parsed;

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [starships, setStarships] = React.useState([]);
    
    function back() {
        history.push('/');
    }

    useEffect(() => {
        setLoading(true);

        SwApi.Request(PeopleUtil.BuildPersonUrl(personId)).then(data => {

            if (data.error) {
                setLoading(false);
                setMessage(data.error);
                return;
            }

            if (data.starships.length <= 0) {
                setLoading(false);
                setMessage(`The ${data.name} has no starship`);
                return;
            }

            let promises = data && data.starships && data.starships.map(url => {
                return SwApi.Request(url).then(data => data);
            });
            
            if (promises) {
                Promise.all(promises).then(values => {
                    setTimeout(() => {
                        setStarships(values);
                        setLoading(false);
                    }, 200);
                });
            }
        });
    }, [personId]);

    return (
        <div>
            <Grid container alignItems="center" justify="center" className="header" style={{ padding: 0 }}>
                <HeaderGame />

                <div style={{ width: '100%', paddingLeft: 20 }}>
                    <ButtonGame text="Back" onClick={back} />
                </div>
            </Grid>

            <Grid container justify="center" className="container-cards">
                {loading
                    ?
                        LoadingUtil.GetArrayLoading(2).map(index => 
                            <Grid container justify="center" item key={index} md={4} sm={6} xs={12} style={{ marginBottom: 20 }}> 
                                <CardStarshipSkeleton />
                            </Grid>
                        )
                    :
                        message
                        ?
                            <Message text={message} />
                        :
                            starships && starships.map((starship, key) =>
                                <Grid container justify="center" item key={key} md={4} sm={6} xs={12} style={{ marginBottom: 20 }}> 
                                    <CardStarship starship={starship} />
                                </Grid>
                            )
                }
            </Grid>
        </div>
    );
}