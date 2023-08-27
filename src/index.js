import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ContextSharer from './context/context.mjs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<ContextSharer>

<App />
</ContextSharer>


</BrowserRouter>
   

);


