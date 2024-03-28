import { React, useState, prevState } from 'react';
import { PropTypes } from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';
import { deleteMarque } from '../services/MarqueService';

const Marque = props => {
    const formDataDelete = new FormData();
    formDataDelete.append('idmarque', props.idmarque);

    const navigate = useNavigate();
    const handleFormSubmit = async () => {
        try {
            const suppr =  await deleteMarque(formDataDelete);
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
        <td>{props.idmarque}</td><td>{props.nommarque}</td>
        <td>
            <button onClick={handleFormSubmit}>supprimer</button>
        </td>
        </tr> 
       
    );
};

Marque.propTypes = {
    
    idmarque : PropTypes.string,
    nommarque : PropTypes.string,
}


export default Marque;
