import React, { useEffect, useState } from 'react';
import { SwApi } from '../../services';
import { Grid } from '@material-ui/core';
import { LoadingUtil } from '../../util';
import { 
    CardPerson, CardPersonSkeleton, 
    PaginationCards, HeaderGame, Message 
} from '../../components';

export function Home() {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [people, setPeople] = useState([]);
    const [paginationPeople, setPaginationPeople] = useState({});

    useEffect(() => {
        onRequest(`${SwApi.GetRootUrl}/people`);
    }, []);

    function onRequest(url) {
        setLoading(true);

        SwApi.Request(url).then(data => {
            if (!data.error) {
                setTimeout(() => {
                    setPeople(data.results);
                    setPaginationPeople({ count: data.count, next: data.next, previous: data.previous });
                    setLoading(false);
                }, 200);
            } else {
                setError(data.error);
                setLoading(false);
            }
        });
    }

    return (
        <div>
            <Grid container alignItems="center" justify="center" className="header">
                <HeaderGame />

                {!error &&
                    <PaginationCards 
                        data={paginationPeople}
                        onPrevious={() => onRequest(paginationPeople.previous)}
                        onNext={() => onRequest(paginationPeople.next)}
                    />
                }
            </Grid>

            <Grid container justify="center" className="container-cards">
                {loading
                    ? 
                        LoadingUtil.GetArrayLoading(10).map(index => 
                            <Grid container justify="center" item key={index} md={4} sm={6} xs={12} style={{ marginBottom: 20 }}> 
                                <CardPersonSkeleton />
                            </Grid>
                        )
                    :
                        error
                        ?
                            <Message text={error} />
                        :
                            people && people.map((person, key) =>
                                <Grid container justify="center" item key={key} md={4} sm={6} xs={12} style={{ marginBottom: 20 }}> 
                                    <CardPerson person={person} />
                                </Grid>
                            )
                }
            </Grid>
        </div>
    );
}