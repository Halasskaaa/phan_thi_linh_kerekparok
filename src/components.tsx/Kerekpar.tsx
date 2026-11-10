import { useState } from "react";

type KerekparProps = {
  nev: string;
  tipus: string;
  napiDij: number;
  szin: string;
};

export default function Kartya(props: KerekparProps) {

  const [megjelenes, setMegjelenes] = useState(false)

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title" style={{color: props.szin}}> Neve: {props.nev}</h3>
          <p className="card-text">Típusa: {props.tipus}</p>
          <p className="card-text">Napi díja: {props.napiDij}Ft</p>
        </div>
        {/* <button onClick={}> </button> */}
        <button>Részletek</button>
      </div>
    </>

   

  );
}
