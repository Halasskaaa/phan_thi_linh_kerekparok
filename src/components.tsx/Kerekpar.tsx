type KerekparProps = {
  nev: string;
  tipus: string;
  napiDij: number;
};

export default function Kartya(props: KerekparProps) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title" >{props.nev}</h3>
          <p className="card-text">{props.tipus}</p>
          <p className="card-text">{props.napiDij}</p>
        </div>
      </div>
    </>
  );
}
