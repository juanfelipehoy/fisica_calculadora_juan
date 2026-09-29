const esVacio = (valor) =>
    valor === undefined ||
    valor === null ||
    (typeof valor === "string" && valor.trim() === "");

const esNumero = (valor) => !esVacio(valor) && Number.isFinite(Number(valor));

const crearValidador = ({ campos, mensajes }) => (req, res, next) => {
    const body = req.body || {};
    const errores = {};
    const fallidos = [];

    for (const [nombre, regla] of Object.entries(campos)) {
        const valor = body[nombre];
        const etiqueta = regla.etiqueta;

        if (esVacio(valor)) {
            errores[nombre] = `${etiqueta}: es un dato requerido`;
            fallidos.push("requeridos");
            continue;
        }

        if (!esNumero(valor)) {
            errores[nombre] = `${etiqueta}: debe ser un numero`;
            fallidos.push("numericos");
            continue;
        }

        const numero = Number(valor);
        body[nombre] = numero;

        if (regla.sinNegativos && numero < 0) {
            errores[nombre] = `${etiqueta}: no admite valores negativos`;
            fallidos.push("negativos");
            continue;
        }

        if (regla.sinCero && numero === 0) {
            errores[nombre] = `${etiqueta}: debe ser mayor que cero`;
            fallidos.push("ceros");
            continue;
        }
    }

    if (fallidos.length > 0) {
        const prioridad = ["requeridos", "numericos", "negativos", "ceros"];
        const primera = prioridad.find((tipo) => fallidos.includes(tipo));

        return res.status(400).json({
            mensaje: mensajes[primera],
            errores
        });
    }

    req.body = body;
    next();
};

export const validarVelocidad = crearValidador({
    campos: {
        distancia: { etiqueta: "La distancia", sinNegativos: true },
        tiempo: { etiqueta: "El tiempo", sinNegativos: true, sinCero: true }
    },
    mensajes: {
        requeridos: "La distancia y el tiempo son requeridos.",
        numericos: "La distancia y el tiempo deben ser numeros.",
        negativos: "La distancia y el tiempo no pueden ser negativos.",
        ceros: "El tiempo no puede ser cero."
    }
});

export const validarAceleracion = crearValidador({
    campos: {
        velocidadFinal: { etiqueta: "La velocidad final" },
        velocidadInicial: { etiqueta: "La velocidad inicial" },
        tiempo: { etiqueta: "El tiempo", sinNegativos: true, sinCero: true }
    },
    mensajes: {
        requeridos: "velocidadFinal, velocidadInicial y tiempo son requeridos.",
        numericos: "velocidadFinal, velocidadInicial y tiempo deben ser numeros.",
        negativos: "El tiempo no puede ser negativo.",
        ceros: "El tiempo no puede ser cero."
    }
});

export const validarFuerza = crearValidador({
    campos: {
        masa: { etiqueta: "La masa", sinNegativos: true },
        aceleracion: { etiqueta: "La aceleracion" }
    },
    mensajes: {
        requeridos: "masa y aceleracion son requeridos.",
        numericos: "masa y aceleracion deben ser numeros.",
        negativos: "La masa no puede ser negativa.",
        ceros: ""
    }
});

export const validarEnergiaCinetica = crearValidador({
    campos: {
        masa: { etiqueta: "La masa", sinNegativos: true },
        velocidad: { etiqueta: "La velocidad", sinNegativos: true }
    },
    mensajes: {
        requeridos: "masa y velocidad son requeridos.",
        numericos: "masa y velocidad deben ser numeros.",
        negativos: "La masa y la velocidad no pueden ser negativas.",
        ceros: ""
    }
});

export const validarEnergiaPotencial = crearValidador({
    campos: {
        masa: { etiqueta: "La masa", sinNegativos: true },
        gravedad: { etiqueta: "La gravedad", sinNegativos: true, sinCero: true },
        altura: { etiqueta: "La altura", sinNegativos: true }
    },
    mensajes: {
        requeridos: "masa, gravedad y altura son requeridos.",
        numericos: "masa, gravedad y altura deben ser numeros.",
        negativos: "La masa, la gravedad y la altura no pueden ser negativas.",
        ceros: "La gravedad debe ser mayor que cero."
    }
});

export const validarDensidad = crearValidador({
    campos: {
        masa: { etiqueta: "La masa", sinNegativos: true },
        volumen: { etiqueta: "El volumen", sinNegativos: true, sinCero: true }
    },
    mensajes: {
        requeridos: "masa y volumen son requeridos.",
        numericos: "masa y volumen deben ser numeros.",
        negativos: "La masa y el volumen no pueden ser negativos.",
        ceros: "El volumen no puede ser cero."
    }
});
