"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sport_controller_1 = require("../controllers/sport.controller");
const sportRouter = express_1.default.Router();
sportRouter.route('/dodajSport').post((req, res) => new sport_controller_1.SportController().dodajSport(req, res));
sportRouter.route('/dohvatiSveSportovePoNazivu').get((req, res) => new sport_controller_1.SportController().dohvatiSveSportovePoNazivu(req, res));
sportRouter.route('/dohvatiSveDisciplinePoSportu').post((req, res) => new sport_controller_1.SportController().dohvatiSveDisciplinePoSportu(req, res));
sportRouter.route('/dohvatiNaziveIndividualnihSportova').get((req, res) => new sport_controller_1.SportController().dohvatiNaziveIndividualnihSportova(req, res));
sportRouter.route('/dohvatiNaziveEkipnihSportova').get((req, res) => new sport_controller_1.SportController().dohvatiNaziveEkipnihSportova(req, res));
sportRouter.route('/dohvatiDisciplineIndividualnihSportova').post((req, res) => new sport_controller_1.SportController().dohvatiDisciplineIndividualnihSportova(req, res));
sportRouter.route('/dohvatiDisciplineEkipnihSportova').post((req, res) => new sport_controller_1.SportController().dohvatiDisciplineEkipnihSportova(req, res));
sportRouter.route('/dohvatiEkipniSport').post((req, res) => new sport_controller_1.SportController().dohvatiEkipniSport(req, res));
sportRouter.route('/dohvatiSportPoSportuDisciplini').post((req, res) => new sport_controller_1.SportController().dohvatiSportPoSportuDisciplini(req, res));
exports.default = sportRouter;
//# sourceMappingURL=sport.routes.js.map