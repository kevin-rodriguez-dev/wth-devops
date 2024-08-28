// Placeholder to host a component

import { useState } from "react";

const Hours = () => {
    const Schedules = [
        { day: "Lunes", open: "10:00", close: "16:00" },
        { day: "Martes", open: "10:00", close: "16:00" },
        { day: "Miércoles", open: "10:00", close: "16:00" },
        { day: "Jueves", open: "10:00", close: "16:00" },
        { day: "Viernes", open: "10:00", close: "16:00" },
        { day: "Sábado", open: "9:00", close: "20:00" },
        { day: "Domingo", open: "9:00", close: "20:00" },
    ];

    const date = new Date();
    // Convertir el nombre del día a formato con primera letra mayúscula
    const dayOfWeek = date.toLocaleString("es-ES", { weekday: "long" });
    const capitalizedDayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

    const dayHours = Schedules.find((day) => day.day === capitalizedDayOfWeek);

    return (
        <div>
            <h2>Hours of operation</h2>
            {dayHours ? (
                <p>
                    {dayHours.day}: {dayHours.open} - {dayHours.close}
                </p>
            ) : (
                <p>No hours found for today.</p>
            )}
        </div>
    );
};

export default Hours;
