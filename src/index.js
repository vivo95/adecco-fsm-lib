let currentState = {
  coinCost: 1,
  coinsInserted:0,
  step: 'locked',
  entryAllowed: false,
  message:null
};
let stateChangedCallback = null;

export function init(config) {
  console.log("config", config)
  if(config.props.state)
    currentState = config.props.state;
}

export function setStateChangedCallback(callback) {
  stateChangedCallback = callback;
}

export function insertCoin() {
  console.log("currentState debut", {...currentState})
  if (currentState.step === "locked" || currentState.step === "coinInserted") {
    currentState.coinsInserted++;
    if (currentState.coinsInserted < currentState.coinCost) {
      currentState.step = "coinInserted";
      currentState.message = "Insert " + (currentState.coinCost - currentState.coinsInserted) + " more coin(s)";
    } else {
      currentState.step = "unlocked";
      currentState.message = 'Access granted';
      currentState.entryAllowed = true;
    }
    console.log("currentState fin", {...currentState})
    if (stateChangedCallback) stateChangedCallback(currentState);
  }
}

export function enter() {
  if (currentState.step === "unlocked") {
    currentState.message = 'You entered';
    currentState.step = "locked";
    currentState.entryAllowed = false;
    currentState.coinsInserted = 0;
    
  }else{
    currentState.message = 'Access denied';
  }
  if (stateChangedCallback) stateChangedCallback(currentState);
}
