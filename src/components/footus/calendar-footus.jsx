import React, { useState, useEffect } from 'react';
import Loader from '../loader';
import { fetchData } from '../../api/apiService';

const CalendarTable = ({ id, data }) => {
  if (!Array.isArray(data)) {
    return <div>Erreur : Les données ne sont pas dans le format attendu.</div>;
  }

  return (
    <div className='tableau'>
      <table id={id}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Équipe A</th>
            <th>Score A</th>
            <th>Score B</th>
            <th>Équipe B</th>
            <th>Feuille de Match</th>
            <th>Stats Équipe A</th>
            <th>Stats Équipe B</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>{item.team_a.name}</td>
              <td>{item.team_a.score}</td>
              <td>{item.team_b.score}</td>
              <td>{item.team_b.name}</td>
              <td><a href={item.sheet} target="_blank" rel="noopener noreferrer">Voir</a></td>
              <td><a href={item.team_a.stats} target="_blank" rel="noopener noreferrer">Voir</a></td>
              <td><a href={item.team_b.stats} target="_blank" rel="noopener noreferrer">Voir</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Calendar_footus = ({ urls }) => {
  const [selectedTable, setSelectedTable] = useState(Object.keys(urls)[0]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchData(urls[selectedTable]);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [selectedTable, urls]);

  const handleChange = (event) => {
    setSelectedTable(event.target.value);
  };

  return (
    <div className='calendar'>
      <h3>Calendrier</h3>
      <span>Saison actuelle : 2024</span><br/><br/>
      <select onChange={handleChange} value={selectedTable}>
        {Object.keys(urls).map(key => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      {loading ? <Loader /> : error ? <div className='error'>Problème de récupération des données :/<br></br><br></br> <b>Rafraichissez la page</b> ou sélectionnez une autre ligue dans le sélecteur</div> : <CalendarTable id={selectedTable} data={data} />}
    </div>
  );
};

export default Calendar_footus;
