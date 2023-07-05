import express from 'express';  //treba nam za request i response
import Sportista from '../models/sportista';

export class SportistaController{
    maybeCreateMongoQuery(parametar:any, vrednost:any){
        return vrednost===null?null:{[parametar]:vrednost};
    }

    traziSportiste=(req:express.Request,res:express.Response)=>{     
        let p1=req.body.pretragaImePrezime;   
        let p2=req.body.pretragaPol;
        let p3=req.body.pretragaSport;
        let p4=req.body.pretragaDisciplina;
        let p5=req.body.pretragaNacionalnost;
        let p6=req.body.pretragaMedalja;

        //Sportista.find({'naziv':{$regex:pretraga}},
        /*const {pretragaImePrezime,pretragaPol,pretragaSport,pretragaDisciplina,pretragaNacionalnost}=req.body;

        let body={pretragaImePrezime,pretragaPol,pretragaSport,pretragaDisciplina,pretragaNacionalnost};
        if(pretragaImePrezime){
            body.pretragaImePrezime=pretragaImePrezime;
        }
        if(pretragaPol){
            body.pretragaPol=pretragaPol;
        }
        if(pretragaSport){
            body.pretragaSport=pretragaSport;
        }*/

        /*console.log(p1);
        console.log(p2);
        console.log(p3);
        console.log(p4);
        console.log(p5);*/
        Sportista.find(
            {$and:[
                this.maybeCreateMongoQuery('imePrezime', p1),
                this.maybeCreateMongoQuery('pol', p2),
                this.maybeCreateMongoQuery('sport', p3),
                this.maybeCreateMongoQuery('disciplina', p4),
                this.maybeCreateMongoQuery('nacionalnost', p5),
                this.maybeCreateMongoQuery('medalja',p6)].filter(q=>q!==null)},
            (err,sportisti)=>{
            if(err)console.log(err);
            else res.json(sportisti);
        })
    }

    traziSveSportiste=(req:express.Request,res:express.Response)=>{
        Sportista.find({},(err,sportisti)=>{
            if(err)console.log(err);
            else res.json(sportisti);
        })
    }

    dodajIndividualnogSportistu=(req:express.Request,res:express.Response)=>{
        let sportista=new Sportista(req.body);

        sportista.save().then((sportista)=>{
            res.status(200).json({'message':'sportista dodat'});
        }).catch((err)=>{
            res.status(400).json({'message':'sportista nije dodat'});
        })
    }

    dohvatiSveSportistePoImenu=(req:express.Request,res:express.Response)=>{
        let imePrezime=req.body.imePrezime;

        Sportista.findOne({'imePrezime':imePrezime},(err,sportista)=>{
            if(err)console.log(err);
            else res.json(sportista);
        })
    }

    dodajDisciplinu=(req:express.Request,res:express.Response)=>{
        let imePrezime=req.body.imePrezime;
        let disciplina=req.body.disciplina;

        Sportista.findOne({'imePrezime':imePrezime},(err,sportista)=>{
            if(err)console.log(err);
            else{
                if(sportista){
                    Sportista.collection.updateOne({'imePrezime':imePrezime},{$push:{'disciplina':disciplina}});
                    res.json({'message':'disciplina dodata'});
                }
                else{
                    res.json({'message':'sportista nije pronadjen'});
                }
            }
        });
    }

    dohvatiSveSportisteZaZemljuSportDisciplinu=(req:express.Request,res:express.Response)=>{
        let nacionalnost=req.body.nacionalnost;
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;

        Sportista.find({'nacionalnost':nacionalnost,'sport':sport,'disciplina':disciplina},(err,sportisti)=>{
            if(err)console.log(err);
            else res.json(sportisti);
        })
    }

    dohvatiSveSportisteZaSportDisciplinuPol=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;

        Sportista.find({'sport':sport,'disciplina':disciplina,'pol':pol},(err,sportisti)=>{
            if(err)console.log(err);
            else res.json(sportisti);
        })
    }

    dohvatiZemljuZaSportistu=(req:express.Request,res:express.Response)=>{
        let imePrezime=req.body.imePrezime;

        Sportista.findOne({'imePrezime':imePrezime},(err,sportista)=>{
            if(err)console.log(err);
            else res.json(sportista);
        })
    }

    osvojioMedalju=(req:express.Request,res:express.Response)=>{
        let imePrezime=req.body.imePrezime;

        Sportista.collection.updateOne({'imePrezime':imePrezime},{$set:{medalja:true}});
        res.json({poruka:'ok'});
    }

    dohvatiSveSportisteZaZemlju=(req:express.Request,res:express.Response)=>{
        let nacionalnost=req.body.nacionalnost;
        Sportista.find({'nacionalnost':nacionalnost},(err,sportisti)=>{
            if(err)console.log(err);
            else res.json(sportisti);
        })
    }

    dohvatiSveSportisteZaZemljuSport=(req:express.Request,res:express.Response)=>{
        let nacionalnost=req.body.nacionalnost;
        let sport=req.body.sport;
        Sportista.find({'nacionalnost':nacionalnost,'sport':sport},(err,sportisti)=>{
            if(err)console.log(err);
            else res.json(sportisti);
        })
    }

    izbrisiSportistu=(req:express.Request,res:express.Response)=>{
        let imePrezime=req.body.imePrezime;

        Sportista.collection.deleteOne({'imePrezime':imePrezime});
        res.json({poruka:'ok'});
    }
}
