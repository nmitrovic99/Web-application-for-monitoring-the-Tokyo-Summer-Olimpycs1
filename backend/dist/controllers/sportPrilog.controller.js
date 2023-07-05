"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportPrilogController = void 0;
const sportPrilog_1 = __importDefault(require("../models/sportPrilog"));
//ovde stavljamo sve metode koje treba da rade nesto sa bazom:
class SportPrilogController {
    constructor() {
        this.dohvatiSveSportovePoNazivu = (req, res) => {
            sportPrilog_1.default.distinct("sport", {}, (err, sportovi) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportovi);
            });
        };
        this.dohvatiSveDisciplinePoSportu = (req, res) => {
            let sport = req.body.sport;
            //console.log(sport);
            sportPrilog_1.default.find({ 'sport': sport }, (err, discipline) => {
                if (err)
                    console.log(err);
                else
                    res.json(discipline);
            });
        };
        this.dohvatiSveSportovePoNazivuIDisciplini = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            sportPrilog_1.default.findOne({ 'sport': sport, 'disciplina': disciplina }, (err, sportic) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportic);
            });
        };
    }
}
exports.SportPrilogController = SportPrilogController;
//# sourceMappingURL=sportPrilog.controller.js.map