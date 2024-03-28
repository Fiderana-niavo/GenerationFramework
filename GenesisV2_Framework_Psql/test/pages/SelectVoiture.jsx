import { React } from 'react';
import Voiture from '../components/Voiture';
import { useState, useEffect } from 'react';
import { selectVoiture } from '../services/VoitureService';

const SelectVoiture = ({ id }) => {
    const [voitures, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await selectVoiture();
            setData(data);
        };
        fetchData();
    }, []);



    return (
      <div className="container-scroller">          
      <table border="1">
        <thead>
          <tr>
            <th>idvoiture</th><th>marque</th><th>nomvoiture</th><th>datasortie</th>
          </tr>
        </thead>
      <tbody>
      { voitures.map((voiture,index) => (
        <Voiture key={index} 
    idvoiture = { voiture.idvoiture}
    marque = { voiture.marque}
    nomvoiture = { voiture.nomvoiture}
    datasortie = { voiture.datasortie} />
      ))}
      </tbody>
    </table>
        </div>
        
    );
};

export default SelectVoiture;
