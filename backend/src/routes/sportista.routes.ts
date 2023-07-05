import express from 'express';
import { SportistaController } from '../controllers/sportista.controller';

const sportistaRouter=express.Router();

sportistaRouter.route('/traziSportiste').post(
    (req,res)=>new SportistaController().traziSportiste(req,res)
)

sportistaRouter.route('/traziSveSportiste').get(
    (req,res)=>new SportistaController().traziSveSportiste(req,res)
)

sportistaRouter.route('/dodajIndividualnogSportistu').post(
    (req,res)=>new SportistaController().dodajIndividualnogSportistu(req,res)
)

sportistaRouter.route('/dohvatiSveSportistePoImenu').post(
    (req,res)=>new SportistaController().dohvatiSveSportistePoImenu(req,res)
)

sportistaRouter.route('/dodajDisciplinu').post(
    (req,res)=>new SportistaController().dodajDisciplinu(req,res)
)

sportistaRouter.route('/dohvatiSveSportisteZaZemljuSportDisciplinu').post(
    (req,res)=>new SportistaController().dohvatiSveSportisteZaZemljuSportDisciplinu(req,res)
)

sportistaRouter.route('/dohvatiSveSportisteZaSportDisciplinuPol').post(
    (req,res)=>new SportistaController().dohvatiSveSportisteZaSportDisciplinuPol(req,res)
)

sportistaRouter.route('/dohvatiZemljuZaSportistu').post(
    (req,res)=>new SportistaController().dohvatiZemljuZaSportistu(req,res)
)

sportistaRouter.route('/osvojioMedalju').post(
    (req,res)=>new SportistaController().osvojioMedalju(req,res)
)

sportistaRouter.route('/dohvatiSveSportisteZaZemlju').post(
    (req,res)=>new SportistaController().dohvatiSveSportisteZaZemlju(req,res)
)

sportistaRouter.route('/dohvatiSveSportisteZaZemljuSport').post(
    (req,res)=>new SportistaController().dohvatiSveSportisteZaZemljuSport(req,res)
)

sportistaRouter.route('/izbrisiSportistu').post(
    (req,res)=>new SportistaController().izbrisiSportistu(req,res)
)

export default sportistaRouter;