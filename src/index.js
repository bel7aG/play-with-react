import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ObjectIntializer, EventHandler } from './playgrounds';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
  /*
    That’s it.The browser shouldn’t perform a page refresh, but the application reloads and shows
    the correct output. HMR comes with
    multiple advantages:
    Imagine you are debugging your code with console.log() statements. These statements will stay
    in your developer console, even though you change your code, because the browser doesn’t refresh
    the page anymore. That can be convenient for debugging purposes.
    In a growing application a page refresh delays your productivity. You have to wait until the
    page loads. A page reload can take several seconds in a large application. HMR takes away this
    disadvantage.
    The biggest benefit is that you can keep the application state with HMR. Imagine you have a dialog
    in your application with multiple steps and you are at step 3. Basically it is a wizard. Without HMR
    you would change the source code and your browser refreshes the page. You would have to open
    the dialog again and would have to navigate from step 1 to step 3. With HMR your dialog stays open
  */
}
