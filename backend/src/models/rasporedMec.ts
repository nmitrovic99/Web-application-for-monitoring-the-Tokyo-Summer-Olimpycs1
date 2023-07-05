import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let RasporedMec=new Schema(
    {
        sport:{
            type:String
        },
        disciplina:{
            type:String
        },
        pol:{
            type:String
        },
        lokacija:{
            type:String
        },
        faza:{
            type:String
        },
        takmicarskiPar:{
            type:Number
        },
        teren:{
            type:String
        },
        datumVreme:{
            type:String
        }   
    }
)

export default mongoose.model('RasporedMec',RasporedMec,'rasporediMecevi');