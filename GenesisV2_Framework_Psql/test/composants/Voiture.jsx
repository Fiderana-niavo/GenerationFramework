import { React, useState, prevState } from 'react';
import { PropTypes } from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';
import { deleteVoiture } from '../services/VoitureService';

const Voiture = props => {
    const formDataDelete = new FormData();
    formDataDelete.append('idvoiture', props.idvoiture);

    const navigate = useNavigate();
    const handleFormSubmit = async () => {
        try {
            const suppr =  await deleteVoiture(formDataDelete);
            if(!suppr){
                alert(suppr);
            }else{
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <tr>
        <td>{props.idvoiture}</td><td>{props.marque}</td><td>{props.nomvoiture}</td><td>{props.datasortie}</td>
        <td>
            <button onClick={handleFormSubmit}>supprimer</button>
        </td>
        </tr> 
       
    );
};

Voiture.propTypes = {
    
    idvoiture : PropTypes.string,
    marque : PropTypes.string,
    nomvoiture : PropTypes.string,
    datasortie : PropTypes.string,
}


export default Voiture;
