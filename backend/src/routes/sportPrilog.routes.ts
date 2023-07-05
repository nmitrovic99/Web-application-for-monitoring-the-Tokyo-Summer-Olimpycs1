import express from 'express';
import { SportPrilogController } from '../controllers/sportPrilog.controller';

const SportPrilogRouter=express.Router();

SportPrilogRouter.route('/dohvatiSveSportovePoNazivu').get(
    (req,res)=>new SportPrilogController().dohvatiSveSportovePoNazivu(req,res)
)

SportPrilogRouter.route('/dohvatiSveDisciplinePoSportu').post(
    (req,res)=>new SportPrilogController().dohvatiSveDisciplinePoSportu(req,res)
)

SportPrilogRouter.route('/dohvatiSveSportovePoNazivuIDisciplini').post(
    (req,res)=>new SportPrilogController().dohvatiSveSportovePoNazivuIDisciplini(req,res)
)

export default SportPrilogRouter;