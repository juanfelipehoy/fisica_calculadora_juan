export const validarVelocidad=(req,res,next)=>{

const {distancia,tiempo}=req.body

if(distancia===undefined || tiempo===undefined){
    return res.status(400).json({
    mensaje:"la distancia y el tiempo son requeridos"
});
};

if(typeof distancia!=="number" || typeof tiempo!=="number"){
    return res.status(400).json({
    mensaje:"la distancia y el tiempo deben ser numeros"
    });
    };


 if (distancia < 0 || tiempo  <0){
return res.status(400).json({
    mensaje:"la distancia y el tiempo no pueden ser negativos"
    });
    };


    if (tiempo===0){
        return res.status(400).json({
            mensaje:"el tiempo no puede ser cero"
        });
    };

 next();

}

export const validarAceleracion=(req,res,next)=>{

const {velocidadFinal, velocidadInicial, tiempo}=req.body

if(velocidadFinal===undefined || velocidadInicial===undefined || tiempo===undefined){
    return res.status(400).json({
    mensaje:"velocidadFinal, velocidadInicial y tiempo son requeridos"
});
};

if(typeof velocidadFinal!=="number" || typeof velocidadInicial!=="number" || typeof tiempo!=="number"){
    return res.status(400).json({
    mensaje:"velocidadFinal, velocidadInicial y tiempo deben ser numeros"
    });
    };

 if (tiempo < 0){
return res.status(400).json({
    mensaje:"el tiempo no puede ser negativo"
    });
    };

    if (tiempo===0){
        return res.status(400).json({
            mensaje:"el tiempo no puede ser cero"
        });
    };

 next();

}

export const validarFuerza=(req,res,next)=>{

const {masa, aceleracion}=req.body

if(masa===undefined || aceleracion===undefined){
    return res.status(400).json({
    mensaje:"masa y aceleracion son requeridos"
});
};

if(typeof masa!=="number" || typeof aceleracion!=="number"){
    return res.status(400).json({
    mensaje:"masa y aceleracion deben ser numeros"
    });
    };

 if (masa < 0){
return res.status(400).json({
    mensaje:"la masa no puede ser negativa"
    });
    };

 next();

}

export const validarEnergiaCinetica=(req,res,next)=>{

const {masa, velocidad}=req.body

if(masa===undefined || velocidad===undefined){
    return res.status(400).json({
    mensaje:"masa y velocidad son requeridos"
});
};

if(typeof masa!=="number" || typeof velocidad!=="number"){
    return res.status(400).json({
    mensaje:"masa y velocidad deben ser numeros"
    });
    };

 if (masa < 0){
return res.status(400).json({
    mensaje:"la masa no puede ser negativa"
    });
    };

 next();

}

export const validarEnergiaPotencial=(req,res,next)=>{

const {masa, gravedad, altura}=req.body

if(masa===undefined || gravedad===undefined || altura===undefined){
    return res.status(400).json({
    mensaje:"masa, gravedad y altura son requeridos"
});
};

if(typeof masa!=="number" || typeof gravedad!=="number" || typeof altura!=="number"){
    return res.status(400).json({
    mensaje:"masa, gravedad y altura deben ser numeros"
    });
    };

 if (masa < 0 || altura < 0){
return res.status(400).json({
    mensaje:"la masa y la altura no pueden ser negativas"
    });
    };

 next();

}

export const validarDensidad=(req,res,next)=>{

const {masa, volumen}=req.body

if(masa===undefined || volumen===undefined){
    return res.status(400).json({
    mensaje:"masa y volumen son requeridos"
});
};

if(typeof masa!=="number" || typeof volumen!=="number"){
    return res.status(400).json({
    mensaje:"masa y volumen deben ser numeros"
    });
    };

 if (masa < 0 || volumen < 0){
return res.status(400).json({
    mensaje:"la masa y el volumen no pueden ser negativos"
    });
    };

    if (volumen===0){
        return res.status(400).json({
            mensaje:"el volumen no puede ser cero"
        });
    };

 next();

}
