import React from 'react';
import DefaultHOCComponents from './Higher.Order.Components/Default.HOC.Components';

function Homepage(){
  return(
    <div>Homepage</div>
  )
}

function App() {
  
  return (
    <>
    <DefaultHOCComponents path="/" exact component={Homepage}/>
    </>
  );
}

export default App;
