// Modules
import React from 'react';

// Components
import Header from '../header';

// utils
import theme from '../../config/theme';

// Material
import Container from '@material-ui/core/Container';

import Style from './style';
import {useSelector} from "react-redux";

interface AppShellProps {
  children: React.ReactNode
}

const AppShell = (props: AppShellProps) => {
  const classes = Style();
  const select = useSelector((state: any) => state);

  return (
    // eslint-disable-next-line
    <div className={classes.app} style={select.main.theme ? theme.background.dark : theme.background.light}>
      <header className="header">
        <Header />
      </header>
      <Container maxWidth="md">
        <div className={classes.container}>
          {props.children}
        </div>
      </Container>
    </div>
  )
}

export default AppShell