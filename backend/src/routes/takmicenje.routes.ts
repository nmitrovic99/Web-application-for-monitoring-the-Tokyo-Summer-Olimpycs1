import express from 'express';
import { TakmicenjeController } from '../controllers/takmicenje.controller';

const takmicenjeRouter=express.Router();

takmicenjeRouter.route('/dodajTakmicenje').post(
    (req,res)=>new TakmicenjeController().dodajTakmicenje(req,res)
)

takmicenjeRouter.route('/pronadjiSvaTakmicenjaDelegata').post(
    (req,res)=>new TakmicenjeController().pronadjiSvaTakmicenjaDelegata(req,res)
)

takmicenjeRouter.route('/brojTakmicenjaDelegata').post(
    (req,res)=>new TakmicenjeController().brojTakmicenjaDelegata(req,res)
)

takmicenjeRouter.route('/pronadjiTakmicenjeZaSportDisciplinu').post(
    (req,res)=>new TakmicenjeController().pronadjiTakmicenjeZaSportDisciplinu(req,res)
)

takmicenjeRouter.route('/zavrsenoTakmicenje').post(
    (req,res)=>new TakmicenjeController().zavrsenoTakmicenje(req,res)
)

export default takmicenjeRouter;