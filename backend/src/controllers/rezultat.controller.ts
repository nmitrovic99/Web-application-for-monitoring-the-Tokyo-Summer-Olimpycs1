import express from 'express';
import MaxRezultat from '../models/maxRezultat';
import Rezultat from '../models/rezultat';

//ovde stavljamo sve metode koje treba da rade nesto sa bazom:
export class RezultatController{
    
    dodajRezultat=(req:express.Request,res:express.Response)=>{
        let rezultat=new Rezultat(req.body);
        

        rezultat.save().then((rezultat)=>{
            res.status(200).json({'message':'rezultat dodat'});
        }).catch((err)=>{
            res.status(400).json({'message':'rezultat nije dodat'});
        })
    }

    pronadjiRezultateZaSportDisciplinu=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;

        Rezultat.find({'sport':sport,'disciplina':disciplina,'pol':pol},(err,rezultati)=>{
            if(err)console.log(err);
            else res.json(rezultati);
        })
    }

    pronadjiNajveceRezultate=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let brojKola=req.body.brojKola;

        
        Rezultat.find({'sport':sport,'disciplina':disciplina,'pol':pol,'brojKola':brojKola},(err,rezultati)=>{
            if(err)console.log(err);
            else res.json(rezultati);
        })
    }

    pronadjiMaxRezultat=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let imePrezime=req.body.imePrezime;

        Rezultat.find({'sport':sport,'disciplina':disciplina,'pol':pol,'imePrezime':imePrezime},(err,rezultati)=>{
            if(err)console.log(err);
            else res.json(rezultati);
        })
    }

    dodajMaxRezultat=(req:express.Request,res:express.Response)=>{
        let maxRezultat=new MaxRezultat(req.body);
        

        maxRezultat.save().then((rezultat)=>{
            res.status(200).json({'message':'rezultat dodat'});
        }).catch((err)=>{
            res.status(400).json({'message':'rezultat nije dodat'});
        })
    }

    dohvatiRezultatePoPoziciji=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let pozicija=req.body.pozicija;

        MaxRezultat.find({'sport':sport,'disciplina':disciplina,'pol':pol,'pozicija':pozicija},(err,rezultati)=>{
            if(err)console.log(err);
            else res.json(rezultati);
        })
    }

    inkrementirajPoziciju=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let imePrezime=req.body.imePrezime;

        MaxRezultat.collection.updateOne({'sport':sport,'disciplina':disciplina,'pol':pol,'imePrezime':imePrezime},{$inc:{'pozicija':1}});
        res.json({poruka:'ok'});
    }

    pronadjiAzuriranePozicije=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let imePrezime=req.body.imePrezime;

        MaxRezultat.findOne({'sport':sport,'disciplina':disciplina,'pol':pol,'imePrezime':imePrezime},(err,rezultati)=>{
            if(err)console.log(err);
            else res.json(rezultati);
        })
    }

    
     
}