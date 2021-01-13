import { makeStyles } from '@material-ui/core';

export default makeStyles({
  listContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: '100%',
    margin: '10px',
  },
  cardWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inline: {
    display: 'inline',
  },
  listLink: {
    textDecoration: 'none',
    color: '#9d9dff',
  },
  cart: {
    maxWidth: '20px',
    position: 'absolute',
    right: '15px',
    top: '0',
    transform: 'translateY(20%)',
    cursor: 'pointer',
  },
  listActions: {
    padding: '0 16px 16px',
    position: 'relative',
    display: 'flex',
  },
  listItemDescription: {
    color: '#a2a2a2'
  },
  clearButton: {
    marginTop: '10px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  divider: {
    width: '100%',
  },
  moreLink: {
    lineHeight: '1.6',
    color: '#9d9dff',
    cursor: 'pointer',
    paddingLeft: '20px',
  }
})