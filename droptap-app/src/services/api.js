import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/private/";

class Api {
    addSeuil(type, valeur) {
        return axios
            .post(API_URL + "addSeuil", {
                type,
                valeur
            },{ headers: authHeader() })
    }

    showSeuil(page, limit, sort, direction) {
        return axios
            .get(API_URL + "showSeuil", {
                params: {
                    page,
                    limit,
                    sort,
                    direction
                },
                headers: authHeader()
            })}

    getSeuilById(id) {
        return axios
            .get(API_URL + "getSeuil/"+id, {

                headers: authHeader()
            })}

    updateValeurSeuil(id,idSeuil, type, valeur) {
        return axios
            .put(API_URL + "updateValeurSeuil/"+id, {
                params: {
                    idSeuil,
                    type,
                    valeur
                },
                headers: authHeader()
            })}

    getSeuilByType(type) {
        return axios
            .get(API_URL + "getSeuilByType/"+type, {

                headers: authHeader()
            })}


        listSeuil() {
            return axios
                .get(API_URL + "listSeuil",{ headers: authHeader() })
        }

    createRobinet(etat, idCompteur, idAnalyseur, idSeuil, type, valeur) {
        return axios
            .post(API_URL + "createRobinet", {
                etat,
                idCompteur,
                idAnalyseur,
                idSeuil,
                type,
                valeur
            },{ headers: authHeader() })
    }

    sortRobinet(page, limit, sort, direction) {
        return axios
            .get(API_URL + "sortRobinet", {
                params: {
                    page,
                    limit,
                    sort,
                    direction
                },
                headers: authHeader()
            })}

    updateEtatRobinet(id,idRobinet, etat, idCompteur, idAnalyseur, idSeuil, type, valeur) {
        return axios
            .put(API_URL + "updateEtatRobinet/"+id, {
                params: {
                    idRobinet,
                    etat,
                    idCompteur,
                    idAnalyseur,
                    idSeuil,
                    type,
                    valeur
                },
                headers: authHeader()
            })}

    getRobinetById(id) {
        return axios
            .get(API_URL + "getRobinet", {

                headers: authHeader()
            })}

    getRobinets() {
        return axios
            .get(API_URL + "getRobinets",{ headers: authHeader() })
    }

    createCompteur() {
        return axios
            .post(API_URL + "createCompteur", { headers: authHeader() })
    }

    sortCompteur(page, limit, sort, direction) {
        return axios
            .get(API_URL + "sortCompteur", {
                params: {
                    page,
                    limit,
                    sort,
                    direction
                },
                headers: authHeader()
            })}

    getCompteurById(id) {
        return axios
            .get(API_URL + "getCompteur/"+id, {

                headers: authHeader()
            })}

    getCompteurs() {
        return axios
            .get(API_URL + "getCompteurs",{ headers: authHeader() })
    }

    createAnalyseur() {
        return axios
            .post(API_URL + "createAnalyseur",{ headers: authHeader() })
    }

    sortAnalyseur(page, limit, sort, direction) {
        return axios
            .get(API_URL + "sortAnalyseur", {
                params: {
                    page,
                    limit,
                    sort,
                    direction
                },
                headers: authHeader()
            })}

    getAnalyseurs() {
        return axios
            .get(API_URL + "getAnalyseurs",{ headers: authHeader() })
    }

    getAnalyseurById(id) {
        return axios
            .get(API_URL + "getAnalyseur/"+id, {
                headers: authHeader()
            })}

    createRapportQualite(dateDebut, dateFin, niveau, id) {
        return axios
            .post(API_URL + "createRapportQualite", {
                dateDebut,
                dateFin,
                niveau,
                id

            },{ headers: authHeader() })
    }

    sortRapportQualite(page, limit, sort, direction) {
        return axios
            .get(API_URL + "sortRapportQualite", {
                params: {
                    page,
                    limit,
                    sort,
                    direction
                },
                headers: authHeader()
            })}

    getRapportQualiteById(id) {
        return axios
            .get(API_URL + "getRapportQualite/"+id, {

                headers: authHeader()
            })}

    getRapportQualites() {
        return axios
            .get(API_URL + "getRapportQualites",{ headers: authHeader() })
    }

    createRapportConsommation(dateDebut, dateFin, consommation, quantite_preserve, estFuite, id) {
        return axios
            .post(API_URL + "createRapportConsommation", {
                dateDebut,
                dateFin,
                consommation,
                quantite_preserve,
                estFuite,
                id

            },{ headers: authHeader() })
    }

    sortRapportConsommation(page, limit, sort, direction) {
        return axios
            .get(API_URL + "sortRapportConsommation", {
                params: {
                    page,
                    limit,
                    sort,
                    direction
                },
                headers: authHeader()
            })}

    getRapportConsommationById(id) {
        return axios
            .get(API_URL + "getRapportConsommation/"+id, {

                headers: authHeader()
            })}

    getRapportConsommations() {
        return axios
            .get(API_URL + "getRapportConsommations",{ headers: authHeader() })
    }

    createConsommation(debit, quantite, compteurId) {
        return axios
            .post(API_URL + "createConsommation", {
                debit,
                quantite,
                compteurId

            },{ headers: authHeader() })
    }

    sortConsommation(page, limit, sort, direction) {
        return axios
            .get(API_URL + "sortConsommation", {
                params: {
                    page,
                    limit,
                    sort,
                    direction
                },
                headers: authHeader()
            })}

    getConsommationById(id) {
        return axios
            .get(API_URL + "getConsommation/"+id, {

                headers: authHeader()
            })}

    getConsommations() {
        return axios
            .get(API_URL + "getConsommations",{ headers: authHeader() })
    }

    createQualite(qualite, analyseurId) {
        return axios
            .post(API_URL + "createQualite", {
                qualite,
                analyseurId

            },{ headers: authHeader() })
    }

    sortQualite(page, limit, sort, direction) {
        return axios
            .get(API_URL + "sortQualite", {
                params: {
                    page,
                    limit,
                    sort,
                    direction
                },
                headers: authHeader()
            })}

    getQualiteById(id) {
        return axios
            .get(API_URL + "getQualite/"+id, {

                headers: authHeader()
            })}

    getQualites() {
        return axios
            .get(API_URL + "getQualites",{ headers: authHeader() })
    }




}

export default new Api();
