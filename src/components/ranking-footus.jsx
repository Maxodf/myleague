import React, { useState, useEffect } from 'react';
import Loader from './loader';
import { fetchData } from '../api/apiService';

const Table = ({ id, data }) => {
  return (
    <div>
      <h2>{id}</h2>
      <table id={id}>
        <thead>
          <tr>
            <th>Position</th>
            <th>Club</th>
            <th>CF</th>
            <th>J</th>
            <th>Points</th>
            <th>Pénalités</th>
            <th>F</th>
            <th>G</th>
            <th>N</th>
            <th>P</th>
            <th>Points Gagnés</th>
            <th>Points Perdus</th>
            <th>Différence de Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.position}</td>
              <td>{item.club.label}</td>
              <td>{item.cf}</td>
              <td>{item.j}</td>
              <td>{item.points}</td>
              <td>{item.penalties}</td>
              <td>{item.f}</td>
              <td>{item.g}</td>
              <td>{item.n}</td>
              <td>{item.p}</td>
              <td>{item.points_won}</td>
              <td>{item.points_loss}</td>
              <td>{item.points_diff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Ranking_footus = ({ urls }) => {
  const [selectedTable, setSelectedTable] = useState(Object.keys(urls)[0]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const result = await fetchData(urls[selectedTable]);
        setData(result);
      } catch (error) {
        // Error handling is managed within fetchData
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
    <div>
      <h1>Classement Football Américain</h1>
      <select onChange={handleChange} value={selectedTable}>
        {Object.keys(urls).map(key => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      {loading ? <Loader /> : <Table id={selectedTable} data={data} />}
    </div>
  );
};

export default Ranking_footus;
