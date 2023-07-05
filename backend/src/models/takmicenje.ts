import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Takmicenje=new Schema(
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
        pol:{
            type:String
        },
        datumPocetka:{
            type:String
        },
        datumKraja:{
            type:String
        },
        lokacija:{
            type:String
        },
        format:{
            type:String
        },
        brojPokusaja:{
            type:String
        },
        takmicari:{
            type:Array
        },
        delegati:{
            type:Array
        },
        zavrseno:{
            type:Boolean
        }     
    }
)

export default mongoose.model('Takmicenje',Takmicenje,'takmicenja');