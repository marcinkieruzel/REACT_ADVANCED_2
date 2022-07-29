import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, incrementCount } from "./actions";

function App() {
  const count = useSelector((store) => store.count);
  const name = useSelector((store) => store.name);
  const dispatch = useDispatch();

  console.log(count);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count?.count}</p>
        <h1>{name}</h1>
        <button
          onClick={() => {
            dispatch(incrementCount());
          }}
        >
          Increment count
        </button>
      </header>
    </div>
  );
}

export default App;
