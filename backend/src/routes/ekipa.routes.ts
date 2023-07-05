import express from 'express';
import { EkipaController } from '../controllers/ekipa.controller';

const ekipaRouter=express.Router();

ekipaRouter.route('/dodajEkipu').post(
    (req,res)=>new EkipaController().dodajEkipu(req,res)
)

ekipaRouter.route('/dohvatiEkipeZaTakmicenje').post(
    (req,res)=>new EkipaController().dohvatiEkipeZaTakmicenje(req,res)
)

export default ekipaRouter;