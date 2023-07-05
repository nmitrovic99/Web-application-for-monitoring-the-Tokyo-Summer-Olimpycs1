"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RezultatController = void 0;
const maxRezultat_1 = __importDefault(require("../models/maxRezultat"));
const rezultat_1 = __importDefault(require("../models/rezultat"));
//ovde stavljamo sve metode koje treba da rade nesto sa bazom:
class RezultatController {
    constructor() {
        this.dodajRezultat = (req, res) => {
            let rezultat = new rezultat_1.default(req.body);
            rezultat.save().then((rezultat) => {
                res.status(200).json({ 'message': 'rezultat dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'rezultat nije dodat' });
            });
        };
        this.pronadjiRezultateZaSportDisciplinu = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            rezultat_1.default.find({ 'sport': sport, 'disciplina': disciplina, 'pol': pol }, (err, rezultati) => {
                if (err)
                    console.log(err);
                else
                    res.json(rezultati);
            });
        };
        this.pronadjiNajveceRezultate = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            let brojKola = req.body.brojKola;
            rezultat_1.default.find({ 'sport': sport, 'disciplina': disciplina, 'pol': pol, 'brojKola': brojKola }, (err, rezultati) => {
                if (err)
                    console.log(err);
                else
                    res.json(rezultati);
            });
        };
        this.pronadjiMaxRezultat = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            let imePrezime = req.body.imePrezime;
            rezultat_1.default.find({ 'sport': sport, 'disciplina': disciplina, 'pol': pol, 'imePrezime': imePrezime }, (err, rezultati) => {
                if (err)
                    console.log(err);
                else
                    res.json(rezultati);
            });
        };
        this.dodajMaxRezultat = (req, res) => {
            let maxRezultat = new maxRezultat_1.default(req.body);
            maxRezultat.save().then((rezultat) => {
                res.status(200).json({ 'message': 'rezultat dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'rezultat nije dodat' });
            });
        };
        this.dohvatiRezultatePoPoziciji = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            let pozicija = req.body.pozicija;
            maxRezultat_1.default.find({ 'sport': sport, 'disciplina': disciplina, 'pol': pol, 'pozicija': pozicija }, (err, rezultati) => {
                if (err)
                    console.log(err);
                else
                    res.json(rezultati);
            });
        };
        this.inkrementirajPoziciju = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            let imePrezime = req.body.imePrezime;
            maxRezultat_1.default.collection.updateOne({ 'sport': sport, 'disciplina': disciplina, 'pol': pol, 'imePrezime': imePrezime }, { $inc: { 'pozicija': 1 } });
            res.json({ poruka: 'ok' });
        };
        this.pronadjiAzuriranePozicije = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            let imePrezime = req.body.imePrezime;
            maxRezultat_1.default.findOne({ 'sport': sport, 'disciplina': disciplina, 'pol': pol, 'imePrezime': imePrezime }, (err, rezultati) => {
                if (err)
                    console.log(err);
                else
                    res.json(rezultati);
            });
        };
    }
}
exports.RezultatController = RezultatController;
//# sourceMappingURL=rezultat.controller.js.map