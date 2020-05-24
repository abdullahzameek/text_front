import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';


// fix to functionql comp later

const styles = theme => ({

    inputbox: {
        width: "100%",
        maxWidth: "50vw",
        position : "absolute",

    },
    preview: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        background: '#2E3B55',
        color: 'white',
        '&:hover': {
            background: '#586481',
        },
    },
    deleteB: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        background: '#93160d',
        color: 'white',
        '&:hover': {
            background: '#ca4b35',
        }


    },
    container: {
        margin: 'auto',
        maxWidth: '1400px'
    },
})


class Text extends Component {

    returnTheme = () => {
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: '#2E3B55',
                },
            },
        });
        return theme
    }


    showTitle = () => {
            return <Typography variant='h5' style={{ marginBottom: '0%', marginTop: '1%' }}> Enter Text to Summarize Here! </Typography>
        }


    render() {
        const { classes } = this.props
        return (
            <div >
                {this.showTitle()}
                <Container className={classes.container}>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={5}>
                            <ThemeProvider theme={this.returnTheme()}>
                                <TextField
                                    id="review"
                                    label="Text"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.props.inputChangeHandler}
                                    className={classes.inputbox}
                                />                               
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                </Container>
                <br/>
                <br/>
                <br/>
                <Button onClick={this.props.requestSummaryHandler} className={classes.preview}> Get Summary </Button>
            </div >
        );
    }
}

export default withStyles(styles)(Text); 
