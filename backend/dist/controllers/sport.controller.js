"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportController = void 0;
const sport_1 = __importDefault(require("../models/sport"));
class SportController {
    constructor() {
        this.dodajSport = (req, res) => {
            let sport = new sport_1.default(req.body);
            sport.save().then((korisnik) => {
                res.status(200).json({ 'message': 'sport dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'sport nije dodat' });
            });
        };
        this.dohvatiSveSportovePoNazivu = (req, res) => {
            sport_1.default.distinct("sport", {}, (err, sportovi) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportovi);
            });
        };
        this.dohvatiSveDisciplinePoSportu = (req, res) => {
            let sport = req.body.sport;
            //console.log(sport);
            sport_1.default.find({ 'sport': sport }, (err, discipline) => {
                if (err)
                    console.log(err);
                else
                    res.json(discipline);
            });
        };
        this.dohvatiNaziveIndividualnihSportova = (req, res) => {
            sport_1.default.distinct("sport", { 'vrsta': 'individualni' }, (err, sportovi) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportovi);
            });
        };
        this.dohvatiNaziveEkipnihSportova = (req, res) => {
            sport_1.default.distinct("sport", { 'vrsta': 'ekipni' }, (err, sportovi) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportovi);
            });
        };
        this.dohvatiDisciplineIndividualnihSportova = (req, res) => {
            let sport = req.body.sport;
            sport_1.default.find({ 'sport': sport, 'vrsta': 'individualni' }, (err, discipline) => {
                if (err)
                    console.log(err);
                else
                    res.json(discipline);
            });
        };
        this.dohvatiDisciplineEkipnihSportova = (req, res) => {
            let sport = req.body.sport;
            sport_1.default.find({ 'sport': sport, 'vrsta': 'ekipni' }, (err, discipline) => {
                if (err)
                    console.log(err);
                else
                    res.json(discipline);
            });
        };
        this.dohvatiEkipniSport = (req, res) => {
            let sport = req.body.sport;
            sport_1.default.findOne({ 'sport': sport }, (err, sport) => {
                if (err)
                    console.log(err);
                else
                    res.json(sport);
            });
        };
        this.dohvatiSportPoSportuDisciplini = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            sport_1.default.findOne({ 'sport': sport, 'disciplina': disciplina }, (err, sport) => {
                if (err)
                    console.log(err);
                else
                    res.json(sport);
            });
        };
    }
}
exports.SportController = SportController;
//# sourceMappingURL=sport.controller.js.map