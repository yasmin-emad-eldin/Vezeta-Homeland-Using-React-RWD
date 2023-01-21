import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from "./serviceWorker";
<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
 const loadingMarkup = (

  <div className="py-4 text-center">

    <h3>Loading...</h3>

  </div>
 )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={loadingMarkup}>
<App />
</React.Suspense>
  </React.StrictMode>
);
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
