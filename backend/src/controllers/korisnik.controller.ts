import express from 'express';
import Korisnik from '../models/korisnik';

//ovde stavljamo sve metode koje treba da rade nesto sa bazom:
export class KorisnikController{
    prijavaNaSistem=(req:express.Request,res:express.Response)=>{
        //nije nista receno na osnovu cega se radi prijava pa je standardno kor_ime i lozinka
        //ovi parametri kor_ime i lozinka se prosledjuju kroz telo zahteva sa frontenda
        let korisnicko_ime=req.body.korisnicko_ime;
        let lozinka=req.body.lozinka;

        //console.log(korisnicko_ime);
        //console.log(lozinka);
        //sada pravimo upit koji ce da nam dohvati tog korisnika sa korisnickim imenom i tom lozinkom
        Korisnik.findOne({'korisnicko_ime':korisnicko_ime,'lozinka':lozinka},(err,korisnik)=>{
            if(err)console.log(err);
            else res.json(korisnik);
        })
    }

    registracijaNaSistem=(req:express.Request,res:express.Response)=>{
        let korisnik=new Korisnik(req.body);

        korisnik.save().then((korisnik)=>{
            res.status(200).json({'message':'korisnik dodat'});
        }).catch((err)=>{
            res.status(400).json({'message':'korisnik nije dodat'});
        })
    }

    dohvatiNeodobreneKorisnike=(req:express.Request,res:express.Response)=>{
        Korisnik.find({'odobren':false},(err,korisnici)=>{
            if(err)console.log(err);
            else res.json(korisnici);
        })
    }

    odobriZahtev=(req:express.Request,res:express.Response)=>{
        let korisnicko_ime=req.body.korisnicko_ime;

        Korisnik.collection.updateOne({'korisnicko_ime':korisnicko_ime},{$set:{'odobren':true}});
        res.json({poruka:'ok'});
    }

    odbijZahtev=(req:express.Request,res:express.Response)=>{
        let korisnicko_ime=req.body.korisnicko_ime;

        Korisnik.collection.deleteOne({'korisnicko_ime':korisnicko_ime});
        res.json({poruka:'ok'});
    }

    dohvatiVodjuNacionalneDelegacije=(req:express.Request,res:express.Response)=>{
        let nacionalnost=req.body.nacionalnost;

        Korisnik.findOne({'nacionalnost':nacionalnost,'tip':"vodja_delegacije",'odobren':true},(err,korisnik)=>{
            if(err)console.log(err);
            else res.json(korisnik);
        });
    }

    dohvatiKorisnikaPoKorImenu=(req:express.Request,res:express.Response)=>{
        let korisnicko_ime=req.body.korisnicko_ime;

        Korisnik.findOne({'korisnicko_ime':korisnicko_ime,'odobren':true},(err,korisnik)=>{
            if(err)console.log(err);
            else res.json(korisnik);
        })
    }

    promeniLozinku=(req:express.Request,res:express.Response)=>{
        let korisnicko_ime=req.body.korisnicko_ime;
        let lozinka=req.body.lozinka;
        Korisnik.collection.updateOne({'korisnicko_ime':korisnicko_ime},{$set:{'lozinka':lozinka}});
        res.json({poruka:'ok'});
    }

    //pronadjiSlobodneDelegate

    pronadjiSlobodneDelegate=(req:express.Request,res:express.Response)=>{
        Korisnik.find({'tip':"delegat",'odobren':true},(err,delegati)=>{
            if(err)console.log(err);
            else res.json(delegati);
        });
    }

}
