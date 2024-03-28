import axios from "axios";
import ApiUrl from "../api/ApiUrl";

export async function selectMarque() {
    try {
        const response = await axios.get(ApiUrl+'tocrudmarque.do');
        if (Array.isArray(response.data.o)) {
            return response.data.o;
        } else {
            console.error('La réponse de l\'API n\'est pas un tableau JSON:', response.data);
            return [];
        }
    } catch (error) {
        // console.error('Erreur lors de la récupération des marques:', error);
        return [];
    }
}

export async function updateMarque(formData) {
  try {
    const response = await axios.post(ApiUrl+'updatemarque.do', formData);
    return true;
  } catch (error) {
    console.error('Erreur lors de la mise a jour des données:', error);
    const erreur = "Erreur lors de la mise a jour: " + error;
    return erreur;
  }
}

export async function deleteMarque(formData) {
    try {
      const response = await axios.post(ApiUrl+'deletemarque.do', formData);
      return true;
  
    } catch (error) {
      console.error('Erreur lors de la suppression des données:', error);
      const erreur = "Erreur lors de la suppression: " + error;
      return erreur;
    }
}

export async function insertMarque(formData) { 
    try {
      const response = await axios.post(ApiUrl+'insertmarque.do', formData)
      return true;

    } catch (error) {
      console.error('Erreur lors de l\'insertion des données:', error);
      const erreur = "Erreur lors de l'insertion: " + error;
      throw error;
    }
}
