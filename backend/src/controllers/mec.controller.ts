import express from 'express';
import Mec from '../models/mec';

export class MecController{
    
    dodajMec=(req:express.Request,res:express.Response)=>{
        let mec=new Mec(req.body);
        

        mec.save().then((mec)=>{
            res.status(200).json({'message':'mec dodat'});
        }).catch((err)=>{
            res.status(400).json({'message':'mec nije dodat'});
        })
    }

    dohvatiSveMeceve=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let faza=req.body.faza;
        let takmicarskiPar=req.body.takmicarskiPar;

        Mec.findOne({'sport':sport,'disciplina':disciplina,'faza':faza,'takmicarskiPar':takmicarskiPar},(err,mecevi)=>{
            if(err)console.log(err);
            else res.json(mecevi);
        })
    }

    dodajRezultatMeca=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let faza=req.body.faza;
        let takmicarskiPar=req.body.takmicarskiPar;
        let rez=req.body.rez;

        Mec.collection.updateOne({'sport':sport,'disciplina':disciplina,'pol':pol,'faza':faza,'takmicarskiPar':takmicarskiPar},{$set:{'rez':rez}});
        res.json(({poruka:'ok'}));
    }
    
    dohvatiMecZaFazu=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let faza=req.body.faza;

        Mec.findOne({'sport':sport,'disciplina':disciplina,'pol':pol,'faza':faza},(err,mec)=>{
            if(err)console.log(err);
            else res.json(mec);
        })
    }
     
}