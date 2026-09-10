import {Router} from "express";
import {
    validarVelocidad,
    validarAceleracion,
    validarFuerza,
    validarEnergiaCinetica,
    validarEnergiaPotencial,
    validarDensidad
} from "../middlewares/fisica.middlewares.js";
import {
    calcularVelocidad,
    calcularAceleracion,
    calcularFuerza,
    calcularEnergiaCinetica,
    calcularEnergiaPotencial,
    calcularDensidad
} from "../controllers/fisica.controller.js";

const router=Router();

router.post("/velocidad", validarVelocidad, calcularVelocidad);
router.post("/aceleracion", validarAceleracion, calcularAceleracion);
router.post("/fuerza", validarFuerza, calcularFuerza);
router.post("/energia-cinetica", validarEnergiaCinetica, calcularEnergiaCinetica);
router.post("/energia-potencial", validarEnergiaPotencial, calcularEnergiaPotencial);
router.post("/densidad", validarDensidad, calcularDensidad);

export default router;
