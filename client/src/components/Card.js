import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    background: "pink",
    marginBottom: 5,
    margin: "0 auto"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log(props);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.user.firstName + " " + props.user.lastName}
        </Typography>
        <img src={props.user.profilePicture} />

        <Typography className={classes.pos} color="textSecondary">
          {props.user.lastSignedIn}
        </Typography>
        <Typography variant="body2" component="p">
          {props.user.latestPost}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Follow</Button>
      </CardActions>
    </Card>
  );
}
