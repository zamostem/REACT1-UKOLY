import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [datetime, setDatetime] = useState('');
    const [timezone, setTimezone] = useState('Europe/Prague');

    useEffect(() => {
        const fetchDatetime = async () => {
            const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
            const data = await response.json();
            setDatetime(data.datetime);
          };
      
          fetchDatetime();
        }, [timezone]);

    const handleChange = (event) => {
      setTimezone(event.target.value)
    }    

    return (
        <>
          <h1>Aktuální čas</h1>
          <p>{datetime}</p>
          <form className="form">
            <label>Vyberte zónu: </label>
            <select value={timezone} onChange={handleChange}>
              <option value="America/New_York">New York</option>
              <option value="Europe/London">Londýn</option>
              <option value="Europe/Moscow">Moskva</option>
              <option value="Europe/Prague">Praha</option>
              <option value="Asia/Hong_Kong">Hong Kong</option>
              <option value="Asia/Jerusalem">Jeruzalém</option>
            </select>
          </form>
        </>
      );
};

export default HomePage;