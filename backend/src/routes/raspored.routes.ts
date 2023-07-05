import express from 'express';
import { RasporedController } from '../controllers/raspored.controller';

const rasporedRouter=express.Router();

rasporedRouter.route('/dodajSatnicu').post(
    (req,res)=>new RasporedController().dodajSatnicu(req,res)
)

rasporedRouter.route('/dohvatiSveSatniceZaLokaciju').post(
    (req,res)=>new RasporedController().dohvatiSveSatniceZaLokaciju(req,res)
)

rasporedRouter.route('/dohvatiSatnicuZaSportDisciplinuPol').post(
    (req,res)=>new RasporedController().dohvatiSatnicuZaSportDisciplinuPol(req,res)
)

rasporedRouter.route('/dodajRasporedMeca').post(
    (req,res)=>new RasporedController().dodajRasporedMeca(req,res)
)

rasporedRouter.route('/dohvatiRasporedMecaZaFazu').post(
    (req,res)=>new RasporedController().dohvatiRasporedMecaZaFazu(req,res)
)

rasporedRouter.route('/dohvatiRasporedMecaZaTeren').post(
    (req,res)=>new RasporedController().dohvatiRasporedMecaZaTeren(req,res)
)

export default rasporedRouter;