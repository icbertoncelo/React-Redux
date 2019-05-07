import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import TodoList from './TodoList';
import store from './store';

console.tron.log('testendo');

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);
export default App;
