import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, einloggen, ausloggen } from './actions';
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+ 5</button>
      <button onClick={() => dispatch(decrement(3))}>- 3</button>
      <p></p>
      <button onClick={() => dispatch(einloggen())}>Einloggen</button>
      <p></p>
      <button onClick={() => dispatch(ausloggen())}>Ausloggen</button>

      {isLogged ? (
        <h3>darf ich sehen, weil ich eingeloggt bin</h3>
      ) : (
        <h3>darf ich nicht sehen</h3>
      )}
    </div>
  );
}

export default App;
