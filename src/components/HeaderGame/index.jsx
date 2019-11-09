import React from 'react';
import { Grid } from '@material-ui/core';

export function HeaderGame() {
    return (
        <Grid container alignItems="center" justify="center" style={{ height: 100, border: '1px solid red', width: '100%' }}>
            <span style={{ color: 'black', font: '14px/20px "Lato", Arial, sans-serif', fontSize: '70px', color: 'black', fontWeight: '900' }}>
                Starwars Game
            </span>
        </Grid>
    );
}