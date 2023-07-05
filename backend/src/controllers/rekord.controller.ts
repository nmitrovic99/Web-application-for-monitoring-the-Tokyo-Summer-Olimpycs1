import express from 'express';
import RekordZene from '../models/rekordZene';
import RekordMuskarci from "../models/rekordMuskarci";

export class RekordController{
    
    

    dohvatiSveRekordeZaMuskarce=(req:express.Request,res:express.Response)=>{
        RekordMuskarci.find({},(err,rekordi)=>{
            if(err)console.log(err);
            else res.json(rekordi);
        })
    }

    dohvatiSveRekordeZaZene=(req:express.Request,res:express.Response)=>{
        RekordZene.find({},(err,rekordi)=>{
            if(err)console.log(err);
            else res.json(rekordi);
        })
    }
}