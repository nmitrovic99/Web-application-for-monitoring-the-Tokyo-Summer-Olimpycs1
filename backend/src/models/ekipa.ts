import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Ekipa=new Schema(
    {
        naziv:{
            type:String
        },
        pol:{
            type:String
        },
        sport:{
            type:String
        },
        clanovi:{
            type:Array
        },
        medalja:{
            type:Boolean
        }
    }
)

export default mongoose.model('Ekipa',Ekipa,'ekipe');