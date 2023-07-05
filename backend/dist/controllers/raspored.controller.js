"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RasporedController = void 0;
const rasporedMec_1 = __importDefault(require("../models/rasporedMec"));
const raspored_1 = __importDefault(require("../models/raspored"));
//ovde stavljamo sve metode koje treba da rade nesto sa bazom:
class RasporedController {
    constructor() {
        this.dodajSatnicu = (req, res) => {
            let satnica = new raspored_1.default(req.body);
            satnica.save().then((satnicaa) => {
                res.status(200).json({ 'message': 'satnica dodata' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'satnica nije dodata' });
            });
        };
        this.dohvatiSveSatniceZaLokaciju = (req, res) => {
            let lokacija = req.body.lokacija;
            raspored_1.default.find({ 'lokacija': lokacija }, (err, satnice) => {
                if (err)
                    console.log(err);
                else
                    res.json(satnice);
            });
        };
        this.dohvatiSatnicuZaSportDisciplinuPol = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            raspored_1.default.findOne({ 'sport': sport, 'disciplina': disciplina, 'pol': pol }, (err, satnica) => {
                if (err)
                    console.log(err);
                else
                    res.json(satnica);
            });
        };
        this.dodajRasporedMeca = (req, res) => {
            let raspored = new rasporedMec_1.default(req.body);
            raspored.save().then((raspored) => {
                res.status(200).json({ 'message': 'satnica dodata' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'satnica nije dodata' });
            });
        };
        this.dohvatiRasporedMecaZaFazu = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let faza = req.body.faza;
            let takmicarskiPar = req.body.takmicarskiPar;
            rasporedMec_1.default.findOne({ 'sport': sport, 'disciplina': disciplina, 'faza': faza, 'takmicarskiPar': takmicarskiPar }, (err, raspored) => {
                if (err)
                    console.log(err);
                else
                    res.json(raspored);
            });
        };
        this.dohvatiRasporedMecaZaTeren = (req, res) => {
            let teren = req.body.teren;
            let datumVreme = req.body.datumVreme;
            rasporedMec_1.default.findOne({ 'teren': teren, 'datumVreme': datumVreme }, (err, raspored) => {
                if (err)
                    console.log(err);
                else
                    res.json(raspored);
            });
        };
    }
}
exports.RasporedController = RasporedController;
//# sourceMappingURL=raspored.controller.js.map