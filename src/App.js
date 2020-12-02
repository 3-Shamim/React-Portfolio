import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/common/Loader';
import "./styles/style.scss";

const Layout = lazy(() => import('./components/default/Layout'));

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Layout />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
