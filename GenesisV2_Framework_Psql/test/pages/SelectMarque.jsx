import { React } from 'react';
import Marque from '../components/Marque';
import { useState, useEffect } from 'react';
import { selectMarque } from '../services/MarqueService';

const SelectMarque = ({ id }) => {
    const [marques, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await selectMarque();
            setData(data);
        };
        fetchData();
    }, []);



    return (
      <div className="container-scroller">          
      <table border="1">
        <thead>
          <tr>
            <th>idmarque</th><th>nommarque</th>
          </tr>
        </thead>
      <tbody>
      { marques.map((marque,index) => (
        <Marque key={index} 
    idmarque = { marque.idmarque}
    nommarque = { marque.nommarque} />
      ))}
      </tbody>
    </table>
        </div>
        
    );
};

export default SelectMarque;
