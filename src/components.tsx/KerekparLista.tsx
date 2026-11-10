import { useEffect, useState } from "react";

type KerekparProps = {
    db: number;
    legolcsobb: number;
    legdragabb: number;
}

export default function Statisztika(props:KerekparProps) {

    const [data, setData] = useState()
    useEffect(() => {
        fetch('./kerekparok.json')
        .then(reserve => reserve.json())
        .then(data => setData(data))
    }, []);

    return <>
    <div>
        <h1>Statisztikai adatok</h1>
        <p>Kerékpárok száma: {props.db}</p>
        <p>Legolcsóbb kerékpár bérleti díja: {props.legolcsobb}</p>
        <p>Legdrágább kerékpár bérleti díja: {props.legdragabb}</p>
    </div>
    </>

}








