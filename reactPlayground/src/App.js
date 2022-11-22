import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Modal from "./components/Modal";
function App() {
  return (
    <div className="App">
      <Counter />
      <Form />
      <Modal />
    </div>
  );
}

export default App;
