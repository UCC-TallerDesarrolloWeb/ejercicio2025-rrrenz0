import "@styles/Activities.scss"
//import { activities, diasSemana } from "@data/activities";
import Card from "@components/Card";
import { useEffect, useState } from "react";

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [diasSemana, setDiasSemana] = useState([]);

    const BASE_URL="http://localhost:4000/";

    const fetchActivities = async () => {
        try{
            const response = await fetch(`${BASE_URL}activities`);
            const data = await response.json();
            setActivities(data);
        }catch(error){
            console.error(`Error al retornar las actividades`)
        }
    }

    const fetchDias = async () => {
        try{
            const response = await fetch(`${BASE_URL}diasSemana`);
            const data = await response.json();
            setDiasSemana(data.dias);
        }catch(error){
            console.error(`Error al retornar las actividades`)
        }
    }

    useEffect(() => {
        fetchActivities();
        fetchDias();
    }, []); //Ejecutar una sola vez cuando se monta el componente
   
    const isLogginIn = localStorage.getItem("isLoggedIn") === "true";

    const handleInscribir = (nombreActividad) => {
        alert(`Inscripto en ${nombreActividad}`);
    }

    return(
        <div className="activities-container">
            {activities.map((a, id) => (
                <Card key={id} title={a.nombre} subtitle={a.descripcion}>
                    <ul>
                        {a.horarios.map((h, i) => (
                        <li key={i}>
                            {diasSemana[h.dia]}: {h["hora-inicio"]} - {h["hora-fin"]}
                        </li>
                        ))}
                    </ul>

                    {isLogginIn && (
                        <button onClick={() => handleInscribir(a.nombre)}>Inscribir</button>
                    )}
                </Card>
            ))}
        </div>
    )
};

export default Activities;

