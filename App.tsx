import React from 'react';
import { Provider } from 'react-redux';
import {store,persistor} from './src/redux/store';
import { LoginScreen } from './src/modules/auth';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoginScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;