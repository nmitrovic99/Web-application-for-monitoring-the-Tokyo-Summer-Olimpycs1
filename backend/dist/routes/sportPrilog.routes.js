"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sportPrilog_controller_1 = require("../controllers/sportPrilog.controller");
const SportPrilogRouter = express_1.default.Router();
SportPrilogRouter.route('/dohvatiSveSportovePoNazivu').get((req, res) => new sportPrilog_controller_1.SportPrilogController().dohvatiSveSportovePoNazivu(req, res));
SportPrilogRouter.route('/dohvatiSveDisciplinePoSportu').post((req, res) => new sportPrilog_controller_1.SportPrilogController().dohvatiSveDisciplinePoSportu(req, res));
SportPrilogRouter.route('/dohvatiSveSportovePoNazivuIDisciplini').post((req, res) => new sportPrilog_controller_1.SportPrilogController().dohvatiSveSportovePoNazivuIDisciplini(req, res));
exports.default = SportPrilogRouter;
//# sourceMappingURL=sportPrilog.routes.js.map