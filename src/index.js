import React from 'react';
import * as ReactDomClient from 'react-dom/client';
import './index.css';
import 'tachyons';
import App from './containers/App';

const container = document.getElementById('root');
const root = ReactDomClient.createRoot(container);


root.render(<div><App /></div>);