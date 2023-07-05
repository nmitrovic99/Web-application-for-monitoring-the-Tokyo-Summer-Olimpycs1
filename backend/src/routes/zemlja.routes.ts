import express from 'express';
import { ZemljaController } from '../controllers/zemlja.controller';

const zemljaRouter=express.Router();

zemljaRouter.route('/dodajZemlju').post(
    (req,res)=>new ZemljaController().dodajZemlju(req,res)
)

zemljaRouter.route('/dohvatiSveZemlje').get(
    (req,res)=>new ZemljaController().dohvatiSveZemlje(req,res)
)

zemljaRouter.route('/inkrementirajBrojSportista').post(
    (req,res)=>new ZemljaController().inkrementirajBrojSportista(req,res)
)

zemljaRouter.route('/inkrementirajBrojMedalja').post(
    (req,res)=>new ZemljaController().inkrementirajBrojMedalja(req,res)
)

zemljaRouter.route('/inkrementirajBrojZlata').post(
    (req,res)=>new ZemljaController().inkrementirajBrojZlata(req,res)
)

zemljaRouter.route('/inkrementirajBrojSrebra').post(
    (req,res)=>new ZemljaController().inkrementirajBrojSrebra(req,res)
)

zemljaRouter.route('/inkrementirajBrojBronzi').post(
    (req,res)=>new ZemljaController().inkrementirajBrojBronzi(req,res)
)


export default zemljaRouter;