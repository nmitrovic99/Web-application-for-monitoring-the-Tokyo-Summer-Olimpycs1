"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakmicenjeController = void 0;
const takmicenje_1 = __importDefault(require("../models/takmicenje"));
//ovde stavljamo sve metode koje treba da rade nesto sa bazom:
class TakmicenjeController {
    constructor() {
        this.dodajTakmicenje = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let vrsta = req.body.vrsta;
            let pol = req.body.pol;
            let datumPocetka = req.body.datumPocetka;
            let datumKraja = req.body.datumKraja;
            let lokacija = req.body.lokacija;
            let format = req.body.format;
            let brojPokusaja = req.body.brojPokusaja;
            let takmicari = req.body.takmicari;
            let delegatiIme = req.body.delegatiIme;
            let delegatiPrezime = req.body.delegatiPrezime;
            let delegatiNacionalnost = req.body.delegatiNacionalnost;
            let nosiociBr = req.body.nosiociBr;
            let zavrseno = req.body.zavrseno;
            let tak = [];
            for (let i = 0; i < takmicari.length; i++) {
                if (nosiociBr != null) {
                    tak[i] = {
                        imePrezime: takmicari[i],
                        nosilac: nosiociBr[i]
                    };
                }
                else {
                    tak[i] = {
                        imePrezime: takmicari[i]
                    };
                }
            }
            let del = [];
            for (let i = 0; i < delegatiIme.length; i++) {
                del[i] = {
                    ime: delegatiIme[i],
                    prezime: delegatiPrezime[i],
                    nacionalnost: delegatiNacionalnost[i]
                };
            }
            takmicenje_1.default.collection.insertOne({
                sport: sport,
                disciplina: disciplina,
                vrsta: vrsta,
                pol: pol,
                datumPocetka: datumPocetka,
                datumKraja: datumKraja,
                lokacija: lokacija,
                format: format,
                brojPokusaja: brojPokusaja,
                takmicari: tak,
                delegati: del,
                zavrseno: zavrseno
            });
            res.status(200).json({ 'message': 'takmicenje dodato' });
        };
        this.pronadjiSvaTakmicenjaDelegata = (req, res) => {
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            takmicenje_1.default.find({ 'delegati.ime': ime, 'delegati.prezime': prezime }, (err, takmicenja) => {
                if (err)
                    console.log(err);
                else
                    res.json(takmicenja);
            });
        };
        this.pronadjiTeniseraPoNosiocu = (req, res) => {
            let nosilac = req.body.nosilac;
            let disciplina = req.body.disciplina;
            takmicenje_1.default.findOne({ 'sport': 'tenis', 'disciplina': disciplina, 'takmicari.nosilac': nosilac }, (err, takmicar) => {
                if (err)
                    console.log(err);
                else
                    res.json(takmicar);
            });
        };
        this.brojTakmicenjaDelegata = (req, res) => {
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let nacionalnost = req.body.nacionalnost;
            takmicenje_1.default.find({ 'delegati.ime': ime, 'delegati.prezime': prezime, 'delegati.nacionalnost': nacionalnost }, (err, takmicenja) => {
                if (err)
                    console.log(err);
                else
                    res.json(takmicenja.length);
            });
        };
        this.pronadjiTakmicenjeZaSportDisciplinu = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            takmicenje_1.default.findOne({ 'sport': sport, 'disciplina': disciplina }, (err, takmicenje) => {
                if (err)
                    console.log(err);
                else
                    res.json(takmicenje);
            });
        };
        this.zavrsenoTakmicenje = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            takmicenje_1.default.collection.updateOne({ 'sport': sport, 'disciplina': disciplina, 'pol': pol }, { $set: { 'zavrseno': true } });
            res.json({ poruka: 'ok' });
        };
    }
}
exports.TakmicenjeController = TakmicenjeController;
//# sourceMappingURL=takmicenje.controller.js.map