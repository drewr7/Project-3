import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    margin: 'auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://images.unsplash.com/photo-1523901839036-a3030662f220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '300px'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  }
}));

export default function Philosophy() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://images.unsplash.com/photo-1523901839036-a3030662f220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Philosophy
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <div>
              <Typography>
                <body1>
                    There is a very simple equation for losing weight. Burn more calories than you take in, or take in less calories than you burn. It is a very simple equation that gets constantly over complicated and overlooked but for the average person that is as much as you need to know in order to begin your weight loss journey. However, when we begin discussing body composition things get a little more complicated. 
                    <br />
                    <br />
                    Our philosohy at Fundamental Nutrition recommends a high protein diet and low fat diet and carbohydrates are calculated on a case by case basis. We believe that you need to fuel your body not fill it. Therefore, your activity level will play a big factor in carbohydrate consumption. We don't believe in the nonsense that surrounds the statment "it doesnt work for everyone" because that is the biggest lie of all modern fad diets. Putting yourself in a caloric deficit can only mean one thing. Weight Loss. By combining a caloric deficit and a high protein diet we can target fat loss. Which at the end of the day is what we are trying achieve. 
                    <br />
                    <br />
                    Lastly, the number one biggest factor of any diet is CONSISTENCY. Healthy weight loss takes time, you must be patient and stay consistent. That is how you will accomplish your goals.
                </body1>
              </Typography>
          </div>
    </div>
  );
}