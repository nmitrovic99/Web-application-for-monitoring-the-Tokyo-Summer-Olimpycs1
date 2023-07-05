import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let RekordMuskarci=new Schema(
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

export default mongoose.model('RekordMuskarci',RekordMuskarci,'rekordiMuskarci');