import React from 'react';
import { render } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';

import Tabs from './components/Tabs';

injectGlobal`

  html {
    box-sizing: border-box;

    *,
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  padding: 24px;
`;

const FloatingButton = styled.div`
  margin-top: auto;
  margin-left: auto;

  img {
    display: block;
  }
`;

const App = () => (
  <Wrapper>
    <Tabs />
    <FloatingButton>
      <a target="_blank" href="https://codesandbox.io/s/ywmnpxqwl9">
        <img alt="Edit new" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
      </a>
    </FloatingButton>
  </Wrapper>
);

render(<App />, document.getElementById('root'));
