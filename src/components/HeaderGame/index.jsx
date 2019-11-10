import React from 'react';
import { Grid } from '@material-ui/core';

import './styles.scss';

export function HeaderGame({ text = "Starwars Game" }) {
    return (
        <Grid container alignItems="center" justify="center" className="container-headergame">
            <span className="text-headergame">
                {text}
            </span>
        </Grid>
    );
}