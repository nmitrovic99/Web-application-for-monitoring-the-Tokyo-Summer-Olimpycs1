"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const korisnik_controller_1 = require("../controllers/korisnik.controller");
const korisnikRouter = express_1.default.Router();
korisnikRouter.route('/prijavaNaSistem').post(
//ovde treba da zovemo onog kontrolera koji ce da obradi ovu rutu
(req, res) => new korisnik_controller_1.KorisnikController().prijavaNaSistem(req, res));
korisnikRouter.route('/registracijaNaSistem').post((req, res) => new korisnik_controller_1.KorisnikController().registracijaNaSistem(req, res));
korisnikRouter.route('/dohvatiNeodobreneKorisnike').get((req, res) => new korisnik_controller_1.KorisnikController().dohvatiNeodobreneKorisnike(req, res));
korisnikRouter.route('/odobriZahtev').post((req, res) => new korisnik_controller_1.KorisnikController().odobriZahtev(req, res));
korisnikRouter.route('/odbijZahtev').post((req, res) => new korisnik_controller_1.KorisnikController().odbijZahtev(req, res));
korisnikRouter.route('/dohvatiVodjuNacionalneDelegacije').post((req, res) => new korisnik_controller_1.KorisnikController().dohvatiVodjuNacionalneDelegacije(req, res));
korisnikRouter.route('/dohvatiKorisnikaPoKorImenu').post((req, res) => new korisnik_controller_1.KorisnikController().dohvatiKorisnikaPoKorImenu(req, res));
korisnikRouter.route('/promeniLozinku').post((req, res) => new korisnik_controller_1.KorisnikController().promeniLozinku(req, res));
korisnikRouter.route('/pronadjiSlobodneDelegate').get((req, res) => new korisnik_controller_1.KorisnikController().pronadjiSlobodneDelegate(req, res));
exports.default = korisnikRouter;
//# sourceMappingURL=korisnik.routes.js.map