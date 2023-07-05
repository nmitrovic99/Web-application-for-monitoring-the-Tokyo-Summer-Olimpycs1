"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportistaController = void 0;
const sportista_1 = __importDefault(require("../models/sportista"));
class SportistaController {
    constructor() {
        this.traziSportiste = (req, res) => {
            let p1 = req.body.pretragaImePrezime;
            let p2 = req.body.pretragaPol;
            let p3 = req.body.pretragaSport;
            let p4 = req.body.pretragaDisciplina;
            let p5 = req.body.pretragaNacionalnost;
            let p6 = req.body.pretragaMedalja;
            //Sportista.find({'naziv':{$regex:pretraga}},
            /*const {pretragaImePrezime,pretragaPol,pretragaSport,pretragaDisciplina,pretragaNacionalnost}=req.body;
    
            let body={pretragaImePrezime,pretragaPol,pretragaSport,pretragaDisciplina,pretragaNacionalnost};
            if(pretragaImePrezime){
                body.pretragaImePrezime=pretragaImePrezime;
            }
            if(pretragaPol){
                body.pretragaPol=pretragaPol;
            }
            if(pretragaSport){
                body.pretragaSport=pretragaSport;
            }*/
            /*console.log(p1);
            console.log(p2);
            console.log(p3);
            console.log(p4);
            console.log(p5);*/
            sportista_1.default.find({ $and: [
                    this.maybeCreateMongoQuery('imePrezime', p1),
                    this.maybeCreateMongoQuery('pol', p2),
                    this.maybeCreateMongoQuery('sport', p3),
                    this.maybeCreateMongoQuery('disciplina', p4),
                    this.maybeCreateMongoQuery('nacionalnost', p5),
                    this.maybeCreateMongoQuery('medalja', p6)
                ].filter(q => q !== null) }, (err, sportisti) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportisti);
            });
        };
        this.traziSveSportiste = (req, res) => {
            sportista_1.default.find({}, (err, sportisti) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportisti);
            });
        };
        this.dodajIndividualnogSportistu = (req, res) => {
            let sportista = new sportista_1.default(req.body);
            sportista.save().then((sportista) => {
                res.status(200).json({ 'message': 'sportista dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'sportista nije dodat' });
            });
        };
        this.dohvatiSveSportistePoImenu = (req, res) => {
            let imePrezime = req.body.imePrezime;
            sportista_1.default.findOne({ 'imePrezime': imePrezime }, (err, sportista) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportista);
            });
        };
        this.dodajDisciplinu = (req, res) => {
            let imePrezime = req.body.imePrezime;
            let disciplina = req.body.disciplina;
            sportista_1.default.findOne({ 'imePrezime': imePrezime }, (err, sportista) => {
                if (err)
                    console.log(err);
                else {
                    if (sportista) {
                        sportista_1.default.collection.updateOne({ 'imePrezime': imePrezime }, { $push: { 'disciplina': disciplina } });
                        res.json({ 'message': 'disciplina dodata' });
                    }
                    else {
                        res.json({ 'message': 'sportista nije pronadjen' });
                    }
                }
            });
        };
        this.dohvatiSveSportisteZaZemljuSportDisciplinu = (req, res) => {
            let nacionalnost = req.body.nacionalnost;
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            sportista_1.default.find({ 'nacionalnost': nacionalnost, 'sport': sport, 'disciplina': disciplina }, (err, sportisti) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportisti);
            });
        };
        this.dohvatiSveSportisteZaSportDisciplinuPol = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            sportista_1.default.find({ 'sport': sport, 'disciplina': disciplina, 'pol': pol }, (err, sportisti) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportisti);
            });
        };
        this.dohvatiZemljuZaSportistu = (req, res) => {
            let imePrezime = req.body.imePrezime;
            sportista_1.default.findOne({ 'imePrezime': imePrezime }, (err, sportista) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportista);
            });
        };
        this.osvojioMedalju = (req, res) => {
            let imePrezime = req.body.imePrezime;
            sportista_1.default.collection.updateOne({ 'imePrezime': imePrezime }, { $set: { medalja: true } });
            res.json({ poruka: 'ok' });
        };
        this.dohvatiSveSportisteZaZemlju = (req, res) => {
            let nacionalnost = req.body.nacionalnost;
            sportista_1.default.find({ 'nacionalnost': nacionalnost }, (err, sportisti) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportisti);
            });
        };
        this.dohvatiSveSportisteZaZemljuSport = (req, res) => {
            let nacionalnost = req.body.nacionalnost;
            let sport = req.body.sport;
            sportista_1.default.find({ 'nacionalnost': nacionalnost, 'sport': sport }, (err, sportisti) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportisti);
            });
        };
        this.izbrisiSportistu = (req, res) => {
            let imePrezime = req.body.imePrezime;
            sportista_1.default.collection.deleteOne({ 'imePrezime': imePrezime });
            res.json({ poruka: 'ok' });
        };
    }
    maybeCreateMongoQuery(parametar, vrednost) {
        return vrednost === null ? null : { [parametar]: vrednost };
    }
}
exports.SportistaController = SportistaController;
//# sourceMappingURL=sportista.controller.js.map