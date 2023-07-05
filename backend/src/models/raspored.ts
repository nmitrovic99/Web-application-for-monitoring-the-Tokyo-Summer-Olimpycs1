import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Raspored=new Schema(
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
        datumVreme:{
            type:String
        },
        lokacija:{
            type:String
        }   
    }
)

export default mongoose.model('Raspored',Raspored,'rasporedi');