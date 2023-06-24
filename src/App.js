
import './App.css';
import Prix from './Components/Prix';
import Description from './Components/Description';
//import Nom from './Components/Nom'
import Image from './Components/Image';
import product from './Components/product';

import { Card } from 'react-bootstrap';
function App() {
  const firstName =product.name;

  return (
    <div className="App">
    <div>
    <Card style={{ width: "19rem" }}>
    
    {firstName && <Image product={product} />}
    <p>Hello, {firstName ? firstName : " hello there"} </p>
   
    <Description product={product}/>
    <Prix product={product} />
    </Card>
  </div>
    </div>

  );
}

export default App;
