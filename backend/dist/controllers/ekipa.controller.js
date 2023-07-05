"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EkipaController = void 0;
const ekipa_1 = __importDefault(require("../models/ekipa"));
class EkipaController {
    constructor() {
        this.dodajEkipu = (req, res) => {
            let ekipa = new ekipa_1.default(req.body);
            ekipa.save().then((ekipa) => {
                res.status(200).json({ 'message': 'ekipa dodata' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'ekipa nije dodata' });
            });
        };
        this.dohvatiEkipeZaTakmicenje = (req, res) => {
            let sport = req.body.sport;
            let pol = req.body.pol;
            ekipa_1.default.find({ 'sport': sport, 'pol': pol }, (err, ekipe) => {
                if (err)
                    console.log(err);
                else
                    res.json(ekipe);
            });
        };
    }
}
exports.EkipaController = EkipaController;
//# sourceMappingURL=ekipa.controller.js.map