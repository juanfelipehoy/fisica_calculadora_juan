export const calcularVelocidad=(req,res)=>{

    const {distancia,tiempo } = req.body;
    const resultado = distancia / tiempo;

    res.status(200).json({
        operacion: "velocidad",
        distancia,
        tiempo,
        resultado,
        unidad: "m/s"
    });

}

export const calcularAceleracion=(req,res)=>{

    const {velocidadFinal, velocidadInicial, tiempo } = req.body;
    const resultado = (velocidadFinal - velocidadInicial) / tiempo;

    res.status(200).json({
        operacion: "aceleracion",
        velocidadFinal,
        velocidadInicial,
        tiempo,
        resultado,
        unidad: "m/s²"
    });

}

export const calcularFuerza=(req,res)=>{

    const {masa, aceleracion } = req.body;
    const resultado = masa * aceleracion;

    res.status(200).json({
        operacion: "fuerza",
        masa,
        aceleracion,
        resultado,
        unidad: "N"
    });

}

export const calcularEnergiaCinetica=(req,res)=>{

    const {masa, velocidad } = req.body;
    const resultado = 0.5 * masa * Math.pow(velocidad, 2);

    res.status(200).json({
        operacion: "energia_cinetica",
        masa,
        velocidad,
        resultado,
        unidad: "J"
    });

}

export const calcularEnergiaPotencial=(req,res)=>{

    const {masa, gravedad, altura } = req.body;
    const resultado = masa * gravedad * altura;

    res.status(200).json({
        operacion: "energia_potencial",
        masa,
        gravedad,
        altura,
        resultado,
        unidad: "J"
    });

}

export const calcularDensidad=(req,res)=>{

    const {masa, volumen } = req.body;
    const resultado = masa / volumen;

    res.status(200).json({
        operacion: "densidad",
        masa,
        volumen,
        resultado,
        unidad: "kg/m³"
    });

}