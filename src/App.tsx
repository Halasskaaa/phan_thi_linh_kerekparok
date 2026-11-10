import { useEffect, useState } from "react";
import Statisztika from "./components.tsx/KerekparLista";
import Kartya from "./components.tsx/Kerekpar";
import type { KerekparTipus } from "./type/tipus";

function App() {
  const [kerekpar, setKerekpar] = useState<KerekparTipus[]>([]);

  useEffect(() => {
    fetch("./kerekparok.json")
      .then((response) => response.json())
      .then((data) => setKerekpar(data));
  }, []);

  const arak = kerekpar.map((item) => item.napiDij);
  const cheapest = Math.min(...arak);
  const expst = Math.max(...arak);

  return (
    <>
      <div className="container">
        <Statisztika
          db={kerekpar.length}
          legolcsobb={cheapest}
          legdragabb={expst}
        />

        {kerekpar.map((item) => (
          <Kartya 
          key={item.id} 
          nev={item.nev}
          tipus={item.tipus}
          napiDij={item.napiDij}
          szin={item.szin}
          />
        ))}
      </div>
    </>
  );
}

export default App;
