import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Zemlja=new Schema(
    {
        imeZemlje:{
            type:String
        },
        skraceninca:{
            type:String
        },
        brojSportista:{
            type:Number
        },
        zlato:{
            type:Number
        },
        srebro:{
            type:Number
        },
        bronza:{
            type:Number
        }
    }
)

export default mongoose.model('Zemlja',Zemlja,'zemlje');