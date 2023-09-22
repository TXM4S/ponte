import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <stripe-buy-button
      buy-button-id="buy_btn_1NtH6jBFlO57ZuUxeuxtkONI"
      publishable-key="pk_test_51NtH0ABFlO57ZuUxDRWM1FKQz6BVBJydbKoGfAIBk1kNzPos69Edb4Jc8b8lmEvwSIx2adahx5QAj7mN6ayVid3w00Ithijnk3"
      >
      </stripe-buy-button>
    </div>
  );
}

export default App;
