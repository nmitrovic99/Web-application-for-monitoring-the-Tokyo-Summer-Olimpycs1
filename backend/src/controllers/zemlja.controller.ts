import express from 'express';
import Zemlja from '../models/zemlja';

//ovde stavljamo sve metode koje treba da rade nesto sa bazom:
export class ZemljaController{
    
    dodajZemlju=(req:express.Request,res:express.Response)=>{
        let zemlja=new Zemlja(req.body);

        zemlja.save().then((zemlja)=>{
            res.status(200).json({'message':'zemlja dodata'});
        }).catch((err)=>{
            res.status(400).json({'message':'zemlja nije dodata'});
        })
    }

    dohvatiSveZemlje=(req:express.Request,res:express.Response)=>{
        Zemlja.find({},(err,zemlje)=>{
            if(err)console.log(err);
            else res.json(zemlje);
        })
    }

    inkrementirajBrojSportista=(req:express.Request,res:express.Response)=>{
        let imeZemlje=req.body.imeZemlje;

        //console.log(imeZemlje);

        Zemlja.collection.updateOne({'imeZemlje':imeZemlje},{$inc:{'brojSportista':1}})
        res.json({poruka:'ok'});
    }

    inkrementirajBrojMedalja=(req:express.Request,res:express.Response)=>{
        let imeZemlje=req.body.imeZemlje;
        let medalja=req.body.medalja;

        Zemlja.collection.updateOne({'imeZemlje':imeZemlje},{$inc:{medalja:1}})
        res.json({poruka:'ok'});
    }

    inkrementirajBrojZlata=(req:express.Request,res:express.Response)=>{
        let imeZemlje=req.body.imeZemlje;

        Zemlja.collection.updateOne({'imeZemlje':imeZemlje},{$inc:{zlato:1}})
        res.json({poruka:'ok'});
    }

    inkrementirajBrojSrebra=(req:express.Request,res:express.Response)=>{
        let imeZemlje=req.body.imeZemlje;

        Zemlja.collection.updateOne({'imeZemlje':imeZemlje},{$inc:{srebro:1}})
        res.json({poruka:'ok'});
    }

    inkrementirajBrojBronzi=(req:express.Request,res:express.Response)=>{
        let imeZemlje=req.body.imeZemlje;

        Zemlja.collection.updateOne({'imeZemlje':imeZemlje},{$inc:{bronza:1}})
        res.json({poruka:'ok'});
    }


}