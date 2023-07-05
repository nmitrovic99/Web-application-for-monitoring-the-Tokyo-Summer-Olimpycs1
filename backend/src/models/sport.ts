import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Sport=new Schema(
    {
        sport:{
            type:String
        },
        disciplina:{
            type:String
        },
        vrsta:{
            type:String
        },
        minmax:{
            type:String
        }
    }
)

export default mongoose.model('Sport',Sport,'sportovi');