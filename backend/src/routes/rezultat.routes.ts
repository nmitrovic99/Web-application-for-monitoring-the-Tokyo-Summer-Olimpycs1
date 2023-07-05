import express from 'express';
import { RezultatController } from '../controllers/rezultat.controller';

const rezultatRouter=express.Router();

rezultatRouter.route('/pronadjiRezultateZaSportDisciplinu').post(
    (req,res)=>new RezultatController().pronadjiRezultateZaSportDisciplinu(req,res)
)

rezultatRouter.route('/dodajRezultat').post(
    (req,res)=>new RezultatController().dodajRezultat(req,res)
)

rezultatRouter.route('/pronadjiNajveceRezultate').post(
    (req,res)=>new RezultatController().pronadjiNajveceRezultate(req,res)
)

rezultatRouter.route('/pronadjiMaxRezultat').post(
    (req,res)=>new RezultatController().pronadjiMaxRezultat(req,res)
)

rezultatRouter.route('/dodajMaxRezultat').post(
    (req,res)=>new RezultatController().dodajMaxRezultat(req,res)
)

rezultatRouter.route('/dohvatiRezultatePoPoziciji').post(
    (req,res)=>new RezultatController().dohvatiRezultatePoPoziciji(req,res)
)

rezultatRouter.route('/inkrementirajPoziciju').post(
    (req,res)=>new RezultatController().inkrementirajPoziciju(req,res)
)

rezultatRouter.route('/pronadjiAzuriranePozicije').post(
    (req,res)=>new RezultatController().pronadjiAzuriranePozicije(req,res)
)

export default rezultatRouter;