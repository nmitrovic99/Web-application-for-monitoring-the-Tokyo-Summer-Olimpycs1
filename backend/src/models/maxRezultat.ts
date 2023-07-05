import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let MaxRezultat=new Schema(
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
        pol:{
            type:String
        },
        imePrezime:{
            type:String
        },
        rez:{
            type:String
        },
        pozicija:{
            type:Number
        }     
    }
)

export default mongoose.model('MaxRezultat',MaxRezultat,'maxRezultati');