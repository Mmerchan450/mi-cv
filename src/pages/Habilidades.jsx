import React from "react";
import "./Habilidades.css";

const habilidadesTecnicas = [
    { nombre: "Testing Manual", nivel: 90 },
    { nombre: "Automatización QA", nivel: 65 },
    { nombre: "JavaScript", nivel: 50 },
    { nombre: "SQL / Base de datos", nivel: 75 },
    { nombre: "React", nivel: 40 },
];

const habilidadesPersonales = [
    "Pensamiento Analítico",
    "Atención al Detalle",
    "Proactividad",
    "Resolución de Problemas",
    
];

const Habilidades = () => {
    return (
        <section className="habilidades">
            <h2>Habilidades</h2>

            <div className="habilidades-container">
                {/* Habilidades Técnicas */}
                <div className="habilidades-bloque">
                    <h3>Técnicas</h3>
                    {habilidadesTecnicas.map((habilidad, index) => (
                        <div key={index} className="habilidad">
                            <div className="habilidad-nombre">{habilidad.nombre}</div>
                            <div className="barra-fondo">
                                <div
                                    className="barra-progreso"
                                    style={{ width: `${habilidad.nivel}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="habilidades-bloque">
                    <h3>Personales</h3>
                    <ul className="habilidades-personales-lista">
                        {habilidadesPersonales.map((habilidad, index) => (
                            <li key={index} className="habilidad-personal">
                                {habilidad}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Habilidades;