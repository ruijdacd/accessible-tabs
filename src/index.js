import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';

import Tabs from './components/Tabs';

injectGlobal`

  html {
    box-sizing: border-box;

    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  body {
    margin: 0;
    font-family: system-ui;

    -webkit-font-smoothing: antialiased;
  }
`;

const App = () => (
  <div>
    <Tabs />
  </div>
);

render(<App />, document.getElementById('root'));
