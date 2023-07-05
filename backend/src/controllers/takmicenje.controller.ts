import express from 'express';
import Takmicenje from '../models/takmicenje';

//ovde stavljamo sve metode koje treba da rade nesto sa bazom:
export class TakmicenjeController{
    
    dodajTakmicenje=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let vrsta=req.body.vrsta;
        let pol=req.body.pol;
        let datumPocetka=req.body.datumPocetka;
        let datumKraja=req.body.datumKraja;
        let lokacija=req.body.lokacija;
        let format=req.body.format;
        let brojPokusaja=req.body.brojPokusaja;
        let takmicari=req.body.takmicari;
        let delegatiIme=req.body.delegatiIme;
        let delegatiPrezime=req.body.delegatiPrezime;
        let delegatiNacionalnost=req.body.delegatiNacionalnost;
        let nosiociBr=req.body.nosiociBr;
        let zavrseno=req.body.zavrseno;

        let tak:Object[]=[];
        for(let i=0;i<takmicari.length;i++){
            if(nosiociBr!=null){
                tak[i]={
                    imePrezime:takmicari[i],
                    nosilac:nosiociBr[i]
                }
            }
            else{
                tak[i]={
                    imePrezime:takmicari[i]
                }
            }
        }

        let del:Object[]=[];
        for(let i=0;i<delegatiIme.length;i++){
            del[i]={
                ime:delegatiIme[i],
                prezime:delegatiPrezime[i],
                nacionalnost:delegatiNacionalnost[i]
            }
        }

        Takmicenje.collection.insertOne({
            sport:sport,
            disciplina:disciplina,
            vrsta:vrsta,
            pol:pol,
            datumPocetka:datumPocetka,
            datumKraja:datumKraja,
            lokacija:lokacija,
            format:format,
            brojPokusaja:brojPokusaja,
            takmicari:tak,
            delegati:del,
            zavrseno:zavrseno
        })
        
        
        
        res.status(200).json({'message':'takmicenje dodato'});
        
    }

    pronadjiSvaTakmicenjaDelegata=(req:express.Request,res:express.Response)=>{
        let ime=req.body.ime;
        let prezime=req.body.prezime;

        Takmicenje.find({'delegati.ime':ime,'delegati.prezime':prezime},(err,takmicenja)=>{
            if(err)console.log(err);
            else res.json(takmicenja);
        })
    }

    pronadjiTeniseraPoNosiocu=(req:express.Request,res:express.Response)=>{
        let nosilac=req.body.nosilac;
        let disciplina=req.body.disciplina;

        Takmicenje.findOne({'sport':'tenis','disciplina':disciplina,'takmicari.nosilac':nosilac},(err,takmicar)=>{
            if(err)console.log(err);
            else res.json(takmicar);
        })
    }

    brojTakmicenjaDelegata=(req:express.Request,res:express.Response)=>{
        let ime=req.body.ime;
        let prezime=req.body.prezime;
        let nacionalnost=req.body.nacionalnost;

        Takmicenje.find({'delegati.ime':ime,'delegati.prezime':prezime,'delegati.nacionalnost':nacionalnost},(err,takmicenja)=>{
            if(err)console.log(err);
            else res.json(takmicenja.length);
        })
    }

    pronadjiTakmicenjeZaSportDisciplinu=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;

        Takmicenje.findOne({'sport':sport,'disciplina':disciplina},(err,takmicenje)=>{
            if(err)console.log(err);
            else res.json(takmicenje);
        })
    }

    zavrsenoTakmicenje=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;

        Takmicenje.collection.updateOne({'sport':sport,'disciplina':disciplina,'pol':pol},{$set:{'zavrseno':true}});
        res.json({poruka:'ok'});
    }

}
