import Card from "./Components/Card"
import Person from "./Components/Person"
import Product from "./Components/Product"


function App() {


  return (
    <>
     <Person name={'Kabir'} age={33}   isMarried={false} hobbies={['coding', 'problem solving','sleeping','traveling'] } />
     <Product name={"Phone"} price ={300} stock={'available'} />
     <Card>
        <h1>This is Card 1</h1>
        <p>This is Card 1 descriptions</p>
     </Card>

     <Card>
        <h1>This is Card 2</h1>
        <p>This is Card 2 descriptions</p>
     </Card>
     <Card>
        <h1>This is Card 3</h1>
        <p>This is Card 3 descriptions</p>
     </Card>
     <Card>
        <h1>This is Card 4</h1>
        <p>This is Card 4 descriptions</p>
     </Card>
    </>
  )
}

export default App
