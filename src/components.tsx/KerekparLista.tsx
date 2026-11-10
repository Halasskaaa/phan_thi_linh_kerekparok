type KerekparProps = {
    db: number;
    legolcsobb: number;
    legdragabb: number;
}

export default function Statisztika(props:KerekparProps) {

    return <>
    <div>
        <h1>Statisztikai adatok</h1>
        <h2>Kerékpárok száma: {props.db}</h2>
        <h2>Legolcsóbb kerékpár bérleti díja: {props.legolcsobb}</h2>
        <h2>Legdrágább kerékpár bérleti díja: {props.legdragabb}</h2>
    </div>
    </>

}