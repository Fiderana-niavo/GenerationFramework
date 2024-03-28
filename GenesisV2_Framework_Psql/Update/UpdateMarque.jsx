import React , {useState, useEffect } from 'react';
import { Link , useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateMarque } from '../service/MarqueService';


const PopUpUpdateMarque = props => {
    
   

  const formDataUpdate = new FormData();
  formDataUpdate.append('idmarque', props.idmarque);

  const [formData, setFormData] = useState ({
    "nommarque": props.nommarque, 

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

      if(formData.nommarque != null) {
      formDataUpdate.append( "nommarque", formData.nommarque)
  }else{ 
      formDataUpdate.append( "nommarque", props.nommarque)
  } 

    
    try {
      const update = await updateMarque(formDataUpdate);
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
          <label>nommarque:
        <input name='nommarque' type='text' values={formData.nommarque} onChange={handleInputChange} /> 
 </label> 

        <br/>
        <button type="submit">Mettre a Jour</button> 
      </form>
    </div>
  );
}
export default PopUpUpdateMarque;
