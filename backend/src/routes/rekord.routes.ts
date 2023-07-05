import express from 'express';
import { RekordController } from '../controllers/rekord.controller';

const rekordRouter=express.Router();

rekordRouter.route('/dohvatiSveRekordeZaMuskarce').get(
    (req,res)=>new RekordController().dohvatiSveRekordeZaMuskarce(req,res)
)

rekordRouter.route('/dohvatiSveRekordeZaZene').get(
    (req,res)=>new RekordController().dohvatiSveRekordeZaZene(req,res)
)

export default rekordRouter;