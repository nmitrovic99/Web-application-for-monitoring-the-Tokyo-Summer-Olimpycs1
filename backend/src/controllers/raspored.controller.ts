import express from 'express';
import RasporedMec from '../models/rasporedMec';
import Raspored from '../models/raspored';

//ovde stavljamo sve metode koje treba da rade nesto sa bazom:
export class RasporedController{
    
    dodajSatnicu=(req:express.Request,res:express.Response)=>{
        let satnica=new Raspored(req.body);

        satnica.save().then((satnicaa)=>{
            res.status(200).json({'message':'satnica dodata'});
        }).catch((err)=>{
            res.status(400).json({'message':'satnica nije dodata'});
        })
    }

    dohvatiSveSatniceZaLokaciju=(req:express.Request,res:express.Response)=>{
        let lokacija=req.body.lokacija;

        Raspored.find({'lokacija':lokacija},(err,satnice)=>{
            if(err)console.log(err);
            else res.json(satnice);
        })
    }

    dohvatiSatnicuZaSportDisciplinuPol=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;

        Raspored.findOne({'sport':sport,'disciplina':disciplina,'pol':pol},(err,satnica)=>{
            if(err)console.log(err);
            else res.json(satnica);
        })
    }

    dodajRasporedMeca=(req:express.Request,res:express.Response)=>{
        let raspored=new RasporedMec(req.body);

        raspored.save().then((raspored)=>{
            res.status(200).json({'message':'satnica dodata'});
        }).catch((err)=>{
            res.status(400).json({'message':'satnica nije dodata'});
        })
    }

    dohvatiRasporedMecaZaFazu=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let faza=req.body.faza;
        let takmicarskiPar=req.body.takmicarskiPar;

        RasporedMec.findOne({'sport':sport,'disciplina':disciplina,'faza':faza,'takmicarskiPar':takmicarskiPar},(err,raspored)=>{
            if(err)console.log(err);
            else res.json(raspored);
        })
    }

    dohvatiRasporedMecaZaTeren=(req:express.Request,res:express.Response)=>{
        let teren=req.body.teren;
        let datumVreme=req.body.datumVreme;

        RasporedMec.findOne({'teren':teren,'datumVreme':datumVreme},(err,raspored)=>{
            if(err)console.log(err);
            else res.json(raspored);
        })
    }
}