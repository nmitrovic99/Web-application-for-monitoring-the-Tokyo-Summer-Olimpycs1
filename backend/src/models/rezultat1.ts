import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Rezultat=new Schema(
    {
        sport:{
            type:String
        },
        disciplina:{
            type:String
        },
        brojKola:{
            type:Number
        },
        format:{
            type:String
        },
        takmicari:{
            type:Array
        }     
    }
)

export default mongoose.model('Rezultat',Rezultat,'rezultati');