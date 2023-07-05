import express from 'express';
import cors from 'cors';      //za pristup od fronta ka backendu
import bodyParser from 'body-parser';   //za pristup telu zahteva
import mongoose from 'mongoose';        //za rad sa bazom podataka
import korisnikRouter from './routes/korisnik.routes';
import zemljaRouter from './routes/zemlja.routes';
import sportPrilogRouter from './routes/sportPrilog.routes';
import sportRouter from './routes/sport.routes';
import rekordRouter from './routes/rekord.routes';
import sportistaRouter from './routes/sportista.routes';
import takmicenjeRouter from './routes/takmicenje.routes';
import rasporedRouter from './routes/raspored.routes';
import rezultatRouter from './routes/rezultat.routes';
import mecRouter from './routes/mec.routes';
import ekipaRouter from './routes/ekipa.routes';

const app = express();
app.use(cors());
app.use(bodyParser.json()); //radicemo u json formatu sa podacima

mongoose.connect("mongodb://localhost:27017/olimpijada"); //konekcija sa bazom
const conn=mongoose.connection;
conn.once('open',()=>{
    console.log("Konekcija sa bazom uspesna");
})

const router=express.Router();  //ruter koji ce da obradjuje http zahteve
//pravimo novi folder routes u src za rute za korisnika i proizvode i tu pravimo novu rutu za korisnika korisnik.routes.ts

//ukoliko dodje ruta /korisnici moj ruter ce da koristi ruter koji cemo da definisemo u korisnik.routes.ts
router.use('/korisnici',korisnikRouter);
router.use('/zemlje',zemljaRouter);
router.use('/sportoviSvi',sportPrilogRouter);
router.use('/sportovi',sportRouter);
router.use('/rekordiMuskarci',rekordRouter);
router.use('/rekordiZene',rekordRouter);
router.use('/sportisti',sportistaRouter);
router.use('/takmicenja',takmicenjeRouter);
router.use('/rasporedi',rasporedRouter);
router.use('/rezultati',rezultatRouter);
router.use('/maxRezultati',rezultatRouter);
router.use('/rasporediMecevi',rasporedRouter);
router.use('/mecevi',mecRouter);
router.use('/ekipe',ekipaRouter);

//app.get('/', (req, res) => res.send('Hello World!'));
app.use('/',router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
