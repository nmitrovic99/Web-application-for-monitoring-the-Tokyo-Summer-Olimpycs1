"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zemlja_controller_1 = require("../controllers/zemlja.controller");
const zemljaRouter = express_1.default.Router();
zemljaRouter.route('/dodajZemlju').post((req, res) => new zemlja_controller_1.ZemljaController().dodajZemlju(req, res));
zemljaRouter.route('/dohvatiSveZemlje').get((req, res) => new zemlja_controller_1.ZemljaController().dohvatiSveZemlje(req, res));
zemljaRouter.route('/inkrementirajBrojSportista').post((req, res) => new zemlja_controller_1.ZemljaController().inkrementirajBrojSportista(req, res));
zemljaRouter.route('/inkrementirajBrojMedalja').post((req, res) => new zemlja_controller_1.ZemljaController().inkrementirajBrojMedalja(req, res));
zemljaRouter.route('/inkrementirajBrojZlata').post((req, res) => new zemlja_controller_1.ZemljaController().inkrementirajBrojZlata(req, res));
zemljaRouter.route('/inkrementirajBrojSrebra').post((req, res) => new zemlja_controller_1.ZemljaController().inkrementirajBrojSrebra(req, res));
zemljaRouter.route('/inkrementirajBrojBronzi').post((req, res) => new zemlja_controller_1.ZemljaController().inkrementirajBrojBronzi(req, res));
exports.default = zemljaRouter;
//# sourceMappingURL=zemlja.routes.js.map