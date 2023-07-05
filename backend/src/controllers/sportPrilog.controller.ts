import express from 'express';
import SportPrilog from '../models/sportPrilog';

//ovde stavljamo sve metode koje treba da rade nesto sa bazom:
export class SportPrilogController{
    
   

    dohvatiSveSportovePoNazivu=(req:express.Request,res:express.Response)=>{
        SportPrilog.distinct("sport",{},(err,sportovi)=>{
            if(err)console.log(err);
            else res.json(sportovi);
        })
    }

    dohvatiSveDisciplinePoSportu=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;

        //console.log(sport);
        SportPrilog.find({'sport':sport},(err,discipline)=>{
            if(err)console.log(err);
            else res.json(discipline);
        })
    }

    dohvatiSveSportovePoNazivuIDisciplini=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;

        SportPrilog.findOne({'sport':sport,'disciplina':disciplina},(err,sportic)=>{
            if(err)console.log(err);
            else res.json(sportic);
        })
    }
}