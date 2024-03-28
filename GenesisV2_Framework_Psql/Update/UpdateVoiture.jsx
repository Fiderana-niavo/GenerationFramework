import React , {useState, useEffect } from 'react';
import { Link , useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateVoiture } from '../service/VoitureService';
import {selectMarque} from '../services/MarqueService';

const PopUpUpdateVoiture = props => {
    
       const [marques, setmarques] = useState([]); 
        useEffect(() => { 
            const fetchData = async () => { 
            const marquesData = await selectmarque(); 
            setmarques(marquesData); 
        }; 
        fetchData(); 
    }, []); 


  const formDataUpdate = new FormData();
  formDataUpdate.append('idvoiture', props.idvoiture);

  const [formData, setFormData] = useState ({
    "marque": props.marque, 
"nomvoiture": props.nomvoiture, 
"datasortie": props.datasortie, 

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

      if(formData.marque != null) {
      formDataUpdate.append( "marque", formData.marque)
  }else{ 
      formDataUpdate.append( "marque", props.marque)
  } 
  if(formData.nomvoiture != null) {
      formDataUpdate.append( "nomvoiture", formData.nomvoiture)
  }else{ 
      formDataUpdate.append( "nomvoiture", props.nomvoiture)
  } 
  if(formData.datasortie != null) {
      formDataUpdate.append( "datasortie", formData.datasortie)
  }else{ 
      formDataUpdate.append( "datasortie", props.datasortie)
  } 

    
    try {
      const update = await updateVoiture(formDataUpdate);
      if(update){
        window.location.reload();
      }else{
        alert(update);
        console.log(update);
      }
    } catch (error) {
        console.log(error);
    }
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label> 
marque:
            <select name='marque'> 
    {marques.map((marque,index) => ( 
<option key={index} value={marque.idmarque}> {marque.nommarque}</option> 
))}
          </select> 
 </label> 
<label>nomvoiture:
        <input name='nomvoiture' type='text' values={formData.nomvoiture} onChange={handleInputChange} /> 
 </label> 
<label>datasortie:
        <input name='datasortie' type='date' values={formData.datasortie} onChange={handleInputChange} /> 
 </label> 

        <br/>
        <button type="submit">Mettre a Jour</button> 
      </form>
    </div>
  );
}
export default PopUpUpdateVoiture;
