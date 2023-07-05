import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let RekordZene=new Schema(
    {
        godinaMesto:{
            type:String
        },
        disciplina:{
            type:String
        },
        takmicar:{
            type:String
        },
        nacionalnost:{
            type:String
        },
        rekord:{
            type:String
        }
    }
)

export default mongoose.model('RekordZene',RekordZene,'rekordiZene');