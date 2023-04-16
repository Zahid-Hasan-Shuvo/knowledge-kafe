
import './App.css'
import Container from './component/Header/Container/Container'
import Header from './component/Header/Header'

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Container></Container>

      <h3>1. Difference between props vs state</h3>
      <h6>In React, props are used to pass data from a parent component to a child component, while state is used to manage data within a component itself. Props are read-only and cannot be modified by the component receiving them, while state can be modified using the setState() method.</h6>
       
       <h3>2.How does usestate works? </h3>
       <h6>the useState() hook allows you to add state to functional components. It takes an initial state value as a parameter and returns an array with two elements: the current state value and a function to update it. You can then use these values to manage state within your component.</h6>
       <h3>3.What are doing useeffect without  dataload in 1 lines</h3>
       <h6>the useEffect() hook can be used to perform side effects in a functional component, such as updating the document title, setting up event listeners, or triggering animations, without necessarily loading any data</h6>
       <h3>4.How does react works in 2 lines</h3>
       <h6>React is a JavaScript library for building user interfaces. It uses a virtual DOM to efficiently render UI components and provides a declarative syntax for building UIs using reusable components and managing component state.</h6>
    </div>
  )
}

export default App
