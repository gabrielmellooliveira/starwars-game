import React from 'react';
import { Skeleton } from '@material-ui/lab';

export function CardStarshipSkeleton() {
    return (
        <div className="wrapper" style={{ width: 900 }}>
            <div className="card" style={{ width: 400 }}>
                <div>
                    <Skeleton variant="rect" width="400px" height="300px" className="image-card"/>
                </div>
                
                <Skeleton className="card-level"/>
                
                <Skeleton className="card-unit-name" style={{ marginTop: 5 }}/>
                
                <Skeleton variant="rect" height="50px" style={{ marginBottom: 20, height: 50 }} />

                <div className="card-unit-stats card-unit-stats-sw clearfix">
                    <div className="one-third">
                        <Skeleton variant="text" className="stat" style={{ height: 20, marginTop: 0 }} />
                        <div className="stat-value">Cost</div>
                    </div>

                    <div className="one-third">
                        <Skeleton variant="text" className="stat" style={{ height: 20, marginTop: 0 }} />
                        <div className="stat-value">Speed</div>
                    </div>

                    <div className="one-third no-border">
                        <Skeleton variant="text" className="stat" style={{ height: 20, marginTop: 0 }} />
                        <div className="stat-value">Length</div>
                    </div>
                </div>
            </div>
        </div>
    );
}