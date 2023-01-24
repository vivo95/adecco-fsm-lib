# library-fsm

> version of FSM (Finite State Machine) as a JavaScript  library for React.js applications

[![NPM](https://img.shields.io/npm/v/adecco-fsm.svg)](https://www.npmjs.com/package/adecco-fsm) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save library-fsm
```

## Usage

```jsx
import React, { Component } from 'react'

import {init, coinInserted, turnstilePushed, setStateChangedCallback } from "library-fsm"

const initialData = {
    coinCost: 1,
    step: 'locked',
    entryAllowed: false,
    coinsInserted: 0,
    message: null
}

function App() {
  const [state, setState] = useState(initialData);

    useEffect(() => {
        init({
            state: initialData,
        });
    }, []);

    useEffect(() => {
        setStateChangedCallback(newState => {
            
            setState({...newState});
        });
    }, []);

    const onInsertCoin = () => {
        coinInserted();
    }

    const onEnter = () => {
        turnstilePushed();
    }
    
  return (
    <div>
      <button onClick={onInsertCoin}>Insert Coin</button>
      <button onClick={onEnter}>Enter</button>
    </div>
  );
}
```

## License

MIT © [vivo95](https://github.com/vivo95)
