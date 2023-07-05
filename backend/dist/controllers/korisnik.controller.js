"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
//ovde stavljamo sve metode koje treba da rade nesto sa bazom:
class KorisnikController {
    constructor() {
        this.prijavaNaSistem = (req, res) => {
            //nije nista receno na osnovu cega se radi prijava pa je standardno kor_ime i lozinka
            //ovi parametri kor_ime i lozinka se prosledjuju kroz telo zahteva sa frontenda
            let korisnicko_ime = req.body.korisnicko_ime;
            let lozinka = req.body.lozinka;
            //console.log(korisnicko_ime);
            //console.log(lozinka);
            //sada pravimo upit koji ce da nam dohvati tog korisnika sa korisnickim imenom i tom lozinkom
            korisnik_1.default.findOne({ 'korisnicko_ime': korisnicko_ime, 'lozinka': lozinka }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.registracijaNaSistem = (req, res) => {
            let korisnik = new korisnik_1.default(req.body);
            korisnik.save().then((korisnik) => {
                res.status(200).json({ 'message': 'korisnik dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'korisnik nije dodat' });
            });
        };
        this.dohvatiNeodobreneKorisnike = (req, res) => {
            korisnik_1.default.find({ 'odobren': false }, (err, korisnici) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnici);
            });
        };
        this.odobriZahtev = (req, res) => {
            let korisnicko_ime = req.body.korisnicko_ime;
            korisnik_1.default.collection.updateOne({ 'korisnicko_ime': korisnicko_ime }, { $set: { 'odobren': true } });
            res.json({ poruka: 'ok' });
        };
        this.odbijZahtev = (req, res) => {
            let korisnicko_ime = req.body.korisnicko_ime;
            korisnik_1.default.collection.deleteOne({ 'korisnicko_ime': korisnicko_ime });
            res.json({ poruka: 'ok' });
        };
        this.dohvatiVodjuNacionalneDelegacije = (req, res) => {
            let nacionalnost = req.body.nacionalnost;
            korisnik_1.default.findOne({ 'nacionalnost': nacionalnost, 'tip': "vodja_delegacije", 'odobren': true }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.dohvatiKorisnikaPoKorImenu = (req, res) => {
            let korisnicko_ime = req.body.korisnicko_ime;
            korisnik_1.default.findOne({ 'korisnicko_ime': korisnicko_ime, 'odobren': true }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.promeniLozinku = (req, res) => {
            let korisnicko_ime = req.body.korisnicko_ime;
            let lozinka = req.body.lozinka;
            korisnik_1.default.collection.updateOne({ 'korisnicko_ime': korisnicko_ime }, { $set: { 'lozinka': lozinka } });
            res.json({ poruka: 'ok' });
        };
        //pronadjiSlobodneDelegate
        this.pronadjiSlobodneDelegate = (req, res) => {
            korisnik_1.default.find({ 'tip': "delegat", 'odobren': true }, (err, delegati) => {
                if (err)
                    console.log(err);
                else
                    res.json(delegati);
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map