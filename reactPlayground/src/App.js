import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Modal from "./components/Modal";
import Select from "./components/Select";
function App() {
  return (
    <div className="App">
      <Counter />
      <Form />
      <Modal />
      <Select option={[{ op1: "oto" }, { op1: "ok" }]} />
    </div>
  );
}

export default App;
