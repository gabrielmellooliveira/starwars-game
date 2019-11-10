import React from 'react';
import { Skeleton } from '@material-ui/lab';

export function CardPersonSkeleton() {
    return (
        <div className="wrapper">
            <div className="card">
                <div>
                    <Skeleton variant="rect" width="300px" height="230px" className="image-card"/>
                </div>
                
                <Skeleton className="card-level"/>
                
                <Skeleton className="card-unit-name" style={{ marginTop: 5 }}/>
                
                <Skeleton variant="rect" height="50px" style={{ marginBottom: 20, height: 50 }} />

                <div className="card-unit-stats card-unit-stats-sw clearfix">
                    <div className="one-third">
                        <Skeleton variant="text" className="stat" style={{ height: 20, marginTop: 0 }} />
                        <div className="stat-value">Height</div>
                    </div>

                    <div className="one-third">
                        <Skeleton variant="text" className="stat" style={{ height: 20, marginTop: 0 }} />
                        <div className="stat-value">Films</div>
                    </div>

                    <div className="one-third no-border">
                        <Skeleton variant="text" className="stat" style={{ height: 20, marginTop: 0 }} />
                        <div className="stat-value">Mass</div>
                    </div>
                </div>
            </div>
        </div>
    );
}