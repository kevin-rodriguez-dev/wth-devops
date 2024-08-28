// Placeholder to host a component

const Hours = () => {
    const Schedules = [
        { day: "Monday", open: "10:00", close: "16:00" },
        { day: "Tuesday", open: "10:00", close: "16:00" },
        { day: "Wednesday", open: "10:00", close: "16:00" },
        { day: "Thursday", open: "10:00", close: "16:00" },
        { day: "Friday", open: "10:00", close: "16:00" },
        { day: "Saturday", open: "9:00", close: "20:00" },
        { day: "Sunday", open: "9:00", close: "20:00" },
    ];

    const date = new Date();
    
    const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
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
