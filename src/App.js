import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'


function App() {
  return (
    <div className="App">
      {/*  <Hello /> */}

      {/*}  <Greet name = "Sandhiya" designation = "Developer"/>
        <p>This is a children part</p>

     {/* <Greet name = "Abhinaya" designation = "house wife"/>
      <Greet name = "Abirami" designation = "anaylists">
        <button>submit</button>
      </Greet>
     <Welcome name = "Sandhiya" designation = "Developer"/>
      <Welcome name = "Abhinaya" designation = "house wife"/>
       <Message /> */}

      {/* <Welcome name = "Abirami" designation = "anaylists"/>  */}

      {/* <Counter /> */}
      {/*  <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/*<ParentComponent />*/}
      <UserGreeting />
    </div>
  );
}

export default App;
