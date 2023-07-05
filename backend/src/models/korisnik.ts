import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Korisnik=new Schema(
    {
        korisnicko_ime:{
            type:String,
            required:'korisnicko ime ne moze biti prazno'
        },
        lozinka:{
            type:String
        },
        ime:{
            type:String
        },
        prezime:{
            type:String
        },
        nacionalnost:{
            type:String
        },
        mail:{
            type:String
        },
        tip:{
            type:String
        },
        odobren:{
            type:Boolean
        }
    }
)

export default mongoose.model('Korisnik',Korisnik,'korisnici');
