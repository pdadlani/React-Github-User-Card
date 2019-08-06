import React from 'react';
// import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 245,
  },
  media: {
    height: 140,
  },
});

const UserCard = (props) => {
  const classes = useStyles();

  // console.log('userData in Card.js', props.userData)
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.userData.avatar_url}
          title={props.userData.name}
          // as={Link}
          // to={props.userData.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.userData.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.userData.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button href={props.userData.html_url} size="small" color="primary">
          Explore More
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserCard;