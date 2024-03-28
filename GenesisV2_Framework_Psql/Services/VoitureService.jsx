import axios from "axios";
import ApiUrl from "../api/ApiUrl";

export async function selectVoiture() {
    try {
        const response = await axios.get(ApiUrl+'tocrudvoiture.do');
        if (Array.isArray(response.data.o)) {
            return response.data.o;
        } else {
            console.error('La réponse de l\'API n\'est pas un tableau JSON:', response.data);
            return [];
        }
    } catch (error) {
        // console.error('Erreur lors de la récupération des voitures:', error);
        return [];
    }
}

export async function updateVoiture(formData) {
  try {
    const response = await axios.post(ApiUrl+'updatevoiture.do', formData);
    return true;
  } catch (error) {
    console.error('Erreur lors de la mise a jour des données:', error);
    const erreur = "Erreur lors de la mise a jour: " + error;
    return erreur;
  }
}

export async function deleteVoiture(formData) {
    try {
      const response = await axios.post(ApiUrl+'deletevoiture.do', formData);
      return true;
  
    } catch (error) {
      console.error('Erreur lors de la suppression des données:', error);
      const erreur = "Erreur lors de la suppression: " + error;
      return erreur;
    }
}

export async function insertVoiture(formData) { 
    try {
      const response = await axios.post(ApiUrl+'insertvoiture.do', formData)
      return true;

    } catch (error) {
      console.error('Erreur lors de l\'insertion des données:', error);
      const erreur = "Erreur lors de l'insertion: " + error;
      throw error;
    }
}
