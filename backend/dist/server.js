"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); //za pristup od fronta ka backendu
const body_parser_1 = __importDefault(require("body-parser")); //za pristup telu zahteva
const mongoose_1 = __importDefault(require("mongoose")); //za rad sa bazom podataka
const korisnik_routes_1 = __importDefault(require("./routes/korisnik.routes"));
const zemlja_routes_1 = __importDefault(require("./routes/zemlja.routes"));
const sportPrilog_routes_1 = __importDefault(require("./routes/sportPrilog.routes"));
const sport_routes_1 = __importDefault(require("./routes/sport.routes"));
const rekord_routes_1 = __importDefault(require("./routes/rekord.routes"));
const sportista_routes_1 = __importDefault(require("./routes/sportista.routes"));
const takmicenje_routes_1 = __importDefault(require("./routes/takmicenje.routes"));
const raspored_routes_1 = __importDefault(require("./routes/raspored.routes"));
const rezultat_routes_1 = __importDefault(require("./routes/rezultat.routes"));
const mec_routes_1 = __importDefault(require("./routes/mec.routes"));
const ekipa_routes_1 = __importDefault(require("./routes/ekipa.routes"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json()); //radicemo u json formatu sa podacima
mongoose_1.default.connect("mongodb://localhost:27017/olimpijada"); //konekcija sa bazom
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    console.log("Konekcija sa bazom uspesna");
});
const router = express_1.default.Router(); //ruter koji ce da obradjuje http zahteve
//pravimo novi folder routes u src za rute za korisnika i proizvode i tu pravimo novu rutu za korisnika korisnik.routes.ts
//ukoliko dodje ruta /korisnici moj ruter ce da koristi neki ruter koji cemo da definisemo u korisnik.routes.ts
router.use('/korisnici', korisnik_routes_1.default);
router.use('/zemlje', zemlja_routes_1.default);
router.use('/sportoviSvi', sportPrilog_routes_1.default);
router.use('/sportovi', sport_routes_1.default);
router.use('/rekordiMuskarci', rekord_routes_1.default);
router.use('/rekordiZene', rekord_routes_1.default);
router.use('/sportisti', sportista_routes_1.default);
router.use('/takmicenja', takmicenje_routes_1.default);
router.use('/rasporedi', raspored_routes_1.default);
router.use('/rezultati', rezultat_routes_1.default);
router.use('/maxRezultati', rezultat_routes_1.default);
router.use('/rasporediMecevi', raspored_routes_1.default);
router.use('/mecevi', mec_routes_1.default);
router.use('/ekipe', ekipa_routes_1.default);
//app.get('/', (req, res) => res.send('Hello World!'));
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map