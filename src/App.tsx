import { useEffect, useState } from 'react'
import Statisztika from './components.tsx/KerekparLista'
import Kartya from './components.tsx/Kerekpar';

function App() {
  
    const [kerekpar, setKerekpar] = useState([])

    useEffect(() => {
        fetch('./kerekparok.json')
        .then(response => response.json())
        .then(data => setKerekpar(data))
    }, []);

    const count = kerekpar.length;
    const cheapest = Math.min()
    const expst = Math.max()


  return (
    <>
    <div className="container">
      <Statisztika
        db={count}
        legolcsobb={cheapest}
        legdragabb={expst}
      />



    </div>
    </>
  )
}

export default App
