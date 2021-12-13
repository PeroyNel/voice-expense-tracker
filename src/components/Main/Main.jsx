import React from 'react';

import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';

const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered By Speechly" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance R100</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5rem', marginTop: '20px' }}>
                    {/* Info Card */}
                    Try saying: Add income for R100 in Category Salary for Monday ...
                    
                </Typography>
                <Divider />
                {/* Form */} 
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>

                    </Grid>

                </Grid>

            </CardContent>

        </Card>
    )
}

export default Main;
