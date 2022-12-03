import './App.css';
import useModal from './hooks/useModal';
import Modal from './Modal';

function App() {
  const { isShowing, toggle } = useModal()
  
  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>Show modal</button>

      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
}

export default App;
