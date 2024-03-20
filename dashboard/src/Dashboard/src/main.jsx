import { Suspense } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './app';
import { store } from './store/store';

// ----------------------------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById('root'));

function DashboardComponent() {
  return (
    <HelmetProvider>
        <Suspense>
          <Provider store={store}>
            <App />
          </Provider>
        </Suspense>
    </HelmetProvider>
  );
}
// root.render(<DashboardComponent />);

export { DashboardComponent };
