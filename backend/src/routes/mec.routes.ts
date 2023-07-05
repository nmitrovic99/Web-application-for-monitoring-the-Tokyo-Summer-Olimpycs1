import express from 'express';
import { MecController } from '../controllers/mec.controller';

const mecRouter=express.Router();

mecRouter.route('/dodajMec').post(
    (req,res)=>new MecController().dodajMec(req,res)
)

mecRouter.route('/dohvatiSveMeceve').post(
    (req,res)=>new MecController().dohvatiSveMeceve(req,res)    
)

mecRouter.route('/dodajRezultatMeca').post(
    (req,res)=>new MecController().dodajRezultatMeca(req,res)
)

mecRouter.route('/dohvatiMecZaFazu').post(
    (req,res)=>new MecController().dohvatiMecZaFazu(req,res)
)

export default mecRouter;