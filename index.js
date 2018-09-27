import React from 'react';
import { render } from 'react-dom';
import Board from './src/components/board';

const App = () => <Board />;

render(<App />, document.getElementById('root'));
