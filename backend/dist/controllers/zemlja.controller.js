"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZemljaController = void 0;
const zemlja_1 = __importDefault(require("../models/zemlja"));
//ovde stavljamo sve metode koje treba da rade nesto sa bazom:
class ZemljaController {
    constructor() {
        this.dodajZemlju = (req, res) => {
            let zemlja = new zemlja_1.default(req.body);
            zemlja.save().then((zemlja) => {
                res.status(200).json({ 'message': 'zemlja dodata' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'zemlja nije dodata' });
            });
        };
        this.dohvatiSveZemlje = (req, res) => {
            zemlja_1.default.find({}, (err, zemlje) => {
                if (err)
                    console.log(err);
                else
                    res.json(zemlje);
            });
        };
        this.inkrementirajBrojSportista = (req, res) => {
            let imeZemlje = req.body.imeZemlje;
            //console.log(imeZemlje);
            zemlja_1.default.collection.updateOne({ 'imeZemlje': imeZemlje }, { $inc: { 'brojSportista': 1 } });
            res.json({ poruka: 'ok' });
        };
        this.inkrementirajBrojMedalja = (req, res) => {
            let imeZemlje = req.body.imeZemlje;
            let medalja = req.body.medalja;
            zemlja_1.default.collection.updateOne({ 'imeZemlje': imeZemlje }, { $inc: { medalja: 1 } });
            res.json({ poruka: 'ok' });
        };
        this.inkrementirajBrojZlata = (req, res) => {
            let imeZemlje = req.body.imeZemlje;
            zemlja_1.default.collection.updateOne({ 'imeZemlje': imeZemlje }, { $inc: { zlato: 1 } });
            res.json({ poruka: 'ok' });
        };
        this.inkrementirajBrojSrebra = (req, res) => {
            let imeZemlje = req.body.imeZemlje;
            zemlja_1.default.collection.updateOne({ 'imeZemlje': imeZemlje }, { $inc: { srebro: 1 } });
            res.json({ poruka: 'ok' });
        };
        this.inkrementirajBrojBronzi = (req, res) => {
            let imeZemlje = req.body.imeZemlje;
            zemlja_1.default.collection.updateOne({ 'imeZemlje': imeZemlje }, { $inc: { bronza: 1 } });
            res.json({ poruka: 'ok' });
        };
    }
}
exports.ZemljaController = ZemljaController;
//# sourceMappingURL=zemlja.controller.js.map