import React from 'react';
import { Grid } from '@material-ui/core';
import { ButtonGame } from '../ButtonGame';

import './styles.scss';

export function PaginationCards({ data, onPrevious, onNext }) {
    return (
        <>
            <Grid container alignItems="center" style={{ width: '100%' }}>
                <span className="total-count">
                    Total of people: {data.count ? data.count : 'xx'}
                </span>
            </Grid>
            <Grid container className="buttons-pagination">
                { data.previous && <ButtonGame text="Previous" onClick={onPrevious} /> }

                <div style={{ flex: 1 }}></div>
                
                { data.next && <ButtonGame text="Next" onClick={onNext} /> }
            </Grid>
        </>
    );
}