import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Sportista=new Schema(
    {
        imePrezime:{
            type:String
        },
        pol:{
            type:String
        },
        sport:{
            type:String
        },
        disciplina:{
            type:Array
        },
        nacionalnost:{
            type:String
        },
        medalja:{
            type:Boolean
        },
        izabran:{
            type:Boolean
        }
    }
)

export default mongoose.model('Sportista',Sportista,'sportisti');