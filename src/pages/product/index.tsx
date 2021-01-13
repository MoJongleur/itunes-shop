// Modules
import React from 'react';
import { useLocation } from "react-router-dom";

// Material
import {Card} from "@material-ui/core";

// classes
import Style from './style';

// Interface
import { Element } from '../../interface/index';
import theme from "../../config/theme";
import {useSelector} from "react-redux";

function Product() {
  const location = useLocation<Element>();
  const select = useSelector((state: any) => state);
  const classes = Style();
  const { state } = location;

  if(!state) return(<div>Empty</div>);

  return(
    <Card className={classes.productContainer} style={select.main.theme ? theme.card.dark : theme.card.light}>
      <img className={classes.productImage} alt="Some alt" src={state.artworkUrl100} />
      <p>{state.trackCensoredName || state.collectionName}</p>
      <p>{state.collectionPrice}</p>
      <p>{state.longDescription || state.description}</p>
      <video className={classes.productVideo} width="320" height="240" controls>
        <source src={state.previewUrl} type="video/mp4"></source>
        <source src={state.previewUrl} type="video/ogg"></source>
          Your browser does not support the video tag.
      </video>
    </Card>
  )
}

export default Product;