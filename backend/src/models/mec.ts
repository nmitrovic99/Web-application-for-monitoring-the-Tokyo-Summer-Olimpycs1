import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Mec=new Schema(
    {
        sport:{
            type:String
        },
        disciplina:{
            type:String
        },
        format:{
            type:String
        },
        imePrezimeTakmicara1:{
            type:String
        },
        imePrezimeTakmicara2:{
            type:String
        },
        nosilac1:{
            type:Number
        },
        nosilac2:{
            type:Number
        },
        pol:{
            type:String
        },
        faza:{
            type:String
        },
        takmicarskiPar:{
            type:Number
        },
        rez:{
            type:String
        }     
    }
)

export default mongoose.model('Mec',Mec,'mecevi');