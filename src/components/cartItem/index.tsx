// Modules
import React from 'react';
import { useHistory } from "react-router-dom";


// Material
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

// classes
import Style from '../listContainer/style';

// Interface
import { Element } from '../../interface/index';
import {useSelector} from "react-redux";
import theme from "../../config/theme";

interface Props {
  el: Element,
  i: number,
  handle: (i: number) => any,
  icon: any,
}

function CartItem(params: Props) {
  const {el, i, handle, icon} = params;
  const select = useSelector((state: any) => state);
  const classes = Style();
  const history = useHistory();

  function redirect() {
    history.push({
      pathname: '/product',
      state: el,
    });
  }

  return(
    <Grid container item xl={3} lg={4} md={4} sm={6} xs={12}>
      <Card className={classes.cardContainer} style={select.main.theme ? theme.card.dark : theme.card.light}>
        <div className={classes.cardWrapper}>
          <CardContent>
            <ListItemAvatar>
              <Avatar alt="Some alt" src={el.artworkUrl30} />
            </ListItemAvatar>
            <ListItemText
              primary={el.trackCensoredName || el.collectionName}
            />
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              <a className={classes.listLink} target="_blank" rel="noopener noreferrer" href={el.collectionViewUrl || el.trackViewUrl}>Link to market</a>
            </Typography>
            <ListItemText
              className={classes.listItemDescription}
              primary={(el.description || el.longDescription || '').slice(0, 40) + '...'}
            />
          </CardContent>
          <div className={classes.listActions}>
            <Typography variant="subtitle1">${el.collectionPrice}</Typography>
            {/* eslint-disable-next-line            */}
            <a className={classes.moreLink} onClick={() => redirect()}>More</a>
            <img src={icon} className={classes.cart} alt="logo" onClick={() => handle(i)} />
          </div>
        </div>
      </Card>
    </Grid>
  )
}

export default CartItem;