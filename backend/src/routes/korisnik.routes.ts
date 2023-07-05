import express from 'express';
import { KorisnikController } from '../controllers/korisnik.controller';

const korisnikRouter=express.Router();

korisnikRouter.route('/prijavaNaSistem').post(
    //ovde treba da zovemo onog kontrolera koji ce da obradi ovu rutu
    (req,res)=>new KorisnikController().prijavaNaSistem(req,res)
)

korisnikRouter.route('/registracijaNaSistem').post(
    (req,res)=>new KorisnikController().registracijaNaSistem(req,res)
)

korisnikRouter.route('/dohvatiNeodobreneKorisnike').get(
    (req,res)=>new KorisnikController().dohvatiNeodobreneKorisnike(req,res)
)

korisnikRouter.route('/odobriZahtev').post(
    (req,res)=>new KorisnikController().odobriZahtev(req,res)
)

korisnikRouter.route('/odbijZahtev').post(
    (req,res)=>new KorisnikController().odbijZahtev(req,res)
)

korisnikRouter.route('/dohvatiVodjuNacionalneDelegacije').post(
    (req,res)=>new KorisnikController().dohvatiVodjuNacionalneDelegacije(req,res)
)

korisnikRouter.route('/dohvatiKorisnikaPoKorImenu').post(
    (req,res)=>new KorisnikController().dohvatiKorisnikaPoKorImenu(req,res)
)

korisnikRouter.route('/promeniLozinku').post(
    (req,res)=>new KorisnikController().promeniLozinku(req,res)
)

korisnikRouter.route('/pronadjiSlobodneDelegate').get(
    (req,res)=>new KorisnikController().pronadjiSlobodneDelegate(req,res)
)

export default korisnikRouter;