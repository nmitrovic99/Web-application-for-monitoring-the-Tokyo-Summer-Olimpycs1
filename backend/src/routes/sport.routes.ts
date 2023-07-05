import express from 'express';
import { SportController } from '../controllers/sport.controller';

const sportRouter=express.Router();



sportRouter.route('/dodajSport').post(
    (req,res)=>new SportController().dodajSport(req,res)
)

sportRouter.route('/dohvatiSveSportovePoNazivu').get(
    (req,res)=>new SportController().dohvatiSveSportovePoNazivu(req,res)
)

sportRouter.route('/dohvatiSveDisciplinePoSportu').post(
    (req,res)=>new SportController().dohvatiSveDisciplinePoSportu(req,res)
)

sportRouter.route('/dohvatiNaziveIndividualnihSportova').get(
    (req,res)=>new SportController().dohvatiNaziveIndividualnihSportova(req,res)
)

sportRouter.route('/dohvatiNaziveEkipnihSportova').get(
    (req,res)=>new SportController().dohvatiNaziveEkipnihSportova(req,res)
)

sportRouter.route('/dohvatiDisciplineIndividualnihSportova').post(
    (req,res)=>new SportController().dohvatiDisciplineIndividualnihSportova(req,res)
)

sportRouter.route('/dohvatiDisciplineEkipnihSportova').post(
    (req,res)=>new SportController().dohvatiDisciplineEkipnihSportova(req,res)
)

sportRouter.route('/dohvatiEkipniSport').post(
    (req,res)=>new SportController().dohvatiEkipniSport(req,res)
)

sportRouter.route('/dohvatiSportPoSportuDisciplini').post(
    (req,res)=>new SportController().dohvatiSportPoSportuDisciplini(req,res)
)

export default sportRouter;