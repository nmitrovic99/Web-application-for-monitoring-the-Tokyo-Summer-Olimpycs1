"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MecController = void 0;
const mec_1 = __importDefault(require("../models/mec"));
class MecController {
    constructor() {
        this.dodajMec = (req, res) => {
            let mec = new mec_1.default(req.body);
            mec.save().then((mec) => {
                res.status(200).json({ 'message': 'mec dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'mec nije dodat' });
            });
        };
        this.dohvatiSveMeceve = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let faza = req.body.faza;
            let takmicarskiPar = req.body.takmicarskiPar;
            mec_1.default.findOne({ 'sport': sport, 'disciplina': disciplina, 'faza': faza, 'takmicarskiPar': takmicarskiPar }, (err, mecevi) => {
                if (err)
                    console.log(err);
                else
                    res.json(mecevi);
            });
        };
        this.dodajRezultatMeca = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            let faza = req.body.faza;
            let takmicarskiPar = req.body.takmicarskiPar;
            let rez = req.body.rez;
            mec_1.default.collection.updateOne({ 'sport': sport, 'disciplina': disciplina, 'pol': pol, 'faza': faza, 'takmicarskiPar': takmicarskiPar }, { $set: { 'rez': rez } });
            res.json(({ poruka: 'ok' }));
        };
        this.dohvatiMecZaFazu = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            let faza = req.body.faza;
            mec_1.default.findOne({ 'sport': sport, 'disciplina': disciplina, 'pol': pol, 'faza': faza }, (err, mec) => {
                if (err)
                    console.log(err);
                else
                    res.json(mec);
            });
        };
    }
}
exports.MecController = MecController;
//# sourceMappingURL=mec.controller.js.map