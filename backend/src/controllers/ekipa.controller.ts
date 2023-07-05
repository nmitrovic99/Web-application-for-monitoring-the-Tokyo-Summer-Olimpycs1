import express from 'express'; 
import Ekipa from '../models/ekipa';

export class EkipaController{

    dodajEkipu=(req:express.Request,res:express.Response)=>{
        let ekipa=new Ekipa(req.body);

        ekipa.save().then((ekipa)=>{
            res.status(200).json({'message':'ekipa dodata'});
        }).catch((err)=>{
            res.status(400).json({'message':'ekipa nije dodata'});
        })
    }

    dohvatiEkipeZaTakmicenje=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let pol=req.body.pol;

        Ekipa.find({'sport':sport,'pol':pol},(err,ekipe)=>{
            if(err)console.log(err);
            else res.json(ekipe);
        })
    }

}