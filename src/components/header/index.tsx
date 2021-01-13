// Modules
import React from 'react';

// Material
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Switch from '@material-ui/core/Switch';

// Router
import { useHistory, useLocation } from "react-router-dom";

// config
import path from '../../config/path';

// Styles
import './style.css';
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "../../redux/actions/mainAction";
import theme from "../../config/theme";

function Header() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const pathObj = path.find(el => el.location === location.pathname);
  const [value, setValue] = React.useState(pathObj && pathObj.index ? pathObj.index : 0);
  const select = useSelector((state: any) => state);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    history.push(path[newValue].location);
  };

  const handleSwitch = (event: any): void => {
    if(event.target) {
      dispatch(changeTheme(event.target.checked))
    }
  };

  return (
    <Paper style={select.main.theme ? theme.header.dark : theme.header.light}>
      <div className='switcher'>
        <Switch onChange={handleSwitch} inputProps={{ 'aria-label': 'primary checkbox' }} />
      </div>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="nav_tabs"
      >
        <Tab label="Search" aria-label="Search" />
        <Tab label={`Cart ${select.cart.list.length}`} aria-label="Cart" />
      </Tabs>
    </Paper>
  )
}

export default Header