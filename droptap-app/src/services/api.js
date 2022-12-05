import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/private";

class Api {
    addSeuil(seuil) {
        return axios
            .post(API_URL + "addSeuil", {
                seuil
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


        listSeuil() {
            return axios
                .get(API_URL + "listSeuil",{ headers: authHeader() })
        }

    createRobinet(etat, id_compteur) {
        return axios
            .post(API_URL + "createRobinet", {
                etat,
                id_compteur
            },{ headers: authHeader() })
    }

    getRobinet(page, limit, sort, direction) {
        return axios
            .get(API_URL + "getRobinet", {
                params: {
                    page,
                    limit,
                    sort,
                    direction
                },
                headers: authHeader()
            })}

    getRobinets() {
        return axios
            .get(API_URL + "getRobinets",{ headers: authHeader() })
    }

    createCompteur(dateDebutC,dateFinC, consommationC, quantite_preserveC, estfuiteC, dateDebutQ, dateFinQ, niveauQ) {
        return axios
            .post(API_URL + "createCompteur", {
                dateDebutC,
                dateFinC,
                consommationC,
                quantite_preserveC,
                estfuiteC,
                dateDebutQ,
                dateFinQ,
                niveauQ
            },{ headers: authHeader() })
    }

    getCompteur(page, limit, sort, direction) {
        return axios
            .get(API_URL + "getCompteur", {
                params: {
                    page,
                    limit,
                    sort,
                    direction
                },
                headers: authHeader()
            })}

    getCompteurs() {
        return axios
            .get(API_URL + "getCompteurs",{ headers: authHeader() })
    }

    createAnalyseur(dateDebut, dateFin, niveau, type, created_at, read_at) {
        return axios
            .post(API_URL + "createAnalyseur", {
                dateDebut,
                dateFin,
                niveau,
                type,
                created_at,
                read_at
            },{ headers: authHeader() })
    }

    getAnalyseur(page, limit, sort, direction) {
        return axios
            .get(API_URL + "getAnalyseur", {
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

    createRapportQualite(dateDebut, dateFin, niveau) {
        return axios
            .post(API_URL + "createRapportQualite", {
                dateDebut,
                dateFin,
                niveau,

            },{ headers: authHeader() })
    }

    getRapportQualite(page, limit, sort, direction) {
        return axios
            .get(API_URL + "getRapportQualite", {
                params: {
                    page,
                    limit,
                    sort,
                    direction
                },
                headers: authHeader()
            })}

    getRapportQualites() {
        return axios
            .get(API_URL + "getRapportQualites",{ headers: authHeader() })
    }

    createRapportConsommation(dateDebut, dateFin, consommation, quantite_preserve, estfuite) {
        return axios
            .post(API_URL + "createRapportConsommation", {
                dateDebut,
                dateFin,
                consommation,
                quantite_preserve,
                estfuite,

            },{ headers: authHeader() })
    }

    getRapportConsommation(page, limit, sort, direction) {
        return axios
            .get(API_URL + "getRapportConsommation", {
                params: {
                    page,
                    limit,
                    sort,
                    direction
                },
                headers: authHeader()
            })}

    getRapportConsommations() {
        return axios
            .get(API_URL + "getRapportConsommations",{ headers: authHeader() })
    }




}

export default new Api();
