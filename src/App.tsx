// Modules
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Components
import AppShell from './components/appShell'

// Material
import CircularProgress from '@material-ui/core/CircularProgress';

// Store
import { store, persistor } from './redux/store';

// Lazy pages
const Search = lazy(() => import('./pages/search'));
const Cart = lazy(() => import('./pages/cart'));
const Product = lazy(() => import('./pages/product'));

const LoadingFallbackApp = () => (
  <AppShell>
    <CircularProgress />
  </AppShell>
);
const LoadingFallbackPage = () => (
  <CircularProgress />
);

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<LoadingFallbackApp />}>
          <Switch>
            <Route path='/search'>
              <AppShell>
                <Suspense fallback={<LoadingFallbackPage />}>
                  <Search />
                </Suspense>
              </AppShell>
            </Route>
            <Route path='/cart'>
              <AppShell>
                <Suspense fallback={<LoadingFallbackPage />}>
                  <Cart />
                </Suspense>
              </AppShell>
            </Route>
            <Route path='/product'>
              <AppShell>
                <Suspense fallback={<LoadingFallbackPage />}>
                  <Product />
                </Suspense>
              </AppShell>
            </Route>
            <Route path='/'>
              <Redirect to="/search" />
            </Route>
          </Switch>
        </Suspense>
      </PersistGate>
    </Provider>
  )
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;