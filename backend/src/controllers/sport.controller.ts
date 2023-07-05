import express from 'express';
import Sport from '../models/sport';


export class SportController{
    dodajSport=(req:express.Request,res:express.Response)=>{
        let sport=new Sport(req.body);

        sport.save().then((korisnik)=>{
            res.status(200).json({'message':'sport dodat'});
        }).catch((err)=>{
            res.status(400).json({'message':'sport nije dodat'});
        })
    }

    dohvatiSveSportovePoNazivu=(req:express.Request,res:express.Response)=>{
        Sport.distinct("sport",{},(err,sportovi)=>{
            if(err)console.log(err);
            else res.json(sportovi);
        })
    }

    dohvatiSveDisciplinePoSportu=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;

        //console.log(sport);
        Sport.find({'sport':sport},(err,discipline)=>{
            if(err)console.log(err);
            else res.json(discipline);
        })
    }

    dohvatiNaziveIndividualnihSportova=(req:express.Request,res:express.Response)=>{
        Sport.distinct("sport",{'vrsta':'individualni'},(err,sportovi)=>{
            if(err)console.log(err);
            else res.json(sportovi);
        })
    }

    dohvatiNaziveEkipnihSportova=(req:express.Request,res:express.Response)=>{
        Sport.distinct("sport",{'vrsta':'ekipni'},(err,sportovi)=>{
            if(err)console.log(err);
            else res.json(sportovi);
        })
    }

    dohvatiDisciplineIndividualnihSportova=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;

        Sport.find({'sport':sport,'vrsta':'individualni'},(err,discipline)=>{
            if(err)console.log(err);
            else res.json(discipline);
        })
    }

    dohvatiDisciplineEkipnihSportova=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;

        Sport.find({'sport':sport,'vrsta':'ekipni'},(err,discipline)=>{
            if(err)console.log(err);
            else res.json(discipline);
        })
    }

    dohvatiEkipniSport=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;

        Sport.findOne({'sport':sport},(err,sport)=>{
            if(err)console.log(err);
            else res.json(sport);
        })
    }

    dohvatiSportPoSportuDisciplini=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;

        Sport.findOne({'sport':sport,'disciplina':disciplina},(err,sport)=>{
            if(err)console.log(err);
            else res.json(sport);
        })
    }

}