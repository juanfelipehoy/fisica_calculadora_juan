#  Calculadoras de Física - Frontend

Interfaz gráfica en React para realizar cálculos físicos básicos mediante una API REST.

## Características

- **5 Calculadoras Físicas**: Velocidad, Aceleración, Fuerza, Energía Cinética y Densidad
- **Comunicación HTTP**: Conexión con API REST para cálculos y validaciones
- **Mensajes de Error del Servidor**: La validación vive en el backend y sus mensajes se muestran en pantalla
- **Campos de Texto**: Los inputs aceptan letras y números a propósito
- **Formato Numérico**: Notación científica para resultados muy pequeños
- **Estados de Carga**: Indicadores visuales durante las solicitudes al servidor
- **Historial de Cálculos**: Registro de los últimos 10 cálculos realizados
- **Guía Interactiva**: Documentación integrada con fórmulas y ejemplos
- **Diseño Responsivo**: Interfaz moderna con Tailwind CSS

## Tecnologías Utilizadas

- **React 19**: Biblioteca principal para la interfaz de usuario
- **Vite**: Herramienta de construcción y desarrollo
- **Tailwind CSS 4**: Framework de CSS para estilos
- **Fetch API**: Para comunicarse con el backend

## Instalación y Uso

### Prerrequisitos

- Node.js instalado
- Backend corriendo en `http://localhost:5000`

### Instalación

```bash
cd frontend
npm install
```

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Producción

```bash
npm run build
npm run preview
```

## Comunicación con la API

El frontend se comunica con el backend mediante solicitudes HTTP POST a los siguientes endpoints:

- `POST /fisica/velocidad` - Calcular velocidad
- `POST /fisica/aceleracion` - Calcular aceleración
- `POST /fisica/fuerza` - Calcular fuerza
- `POST /fisica/energia-cinetica` - Calcular energía cinética
- `POST /fisica/densidad` - Calcular densidad

### Ejemplo de Solicitud

Los valores se envían **como texto y sin transformar**. El backend los valida
y los convierte a número, de modo que sus mensajes de error llegan intactos
hasta la pantalla.

```javascript
const response = await fetch('http://localhost:5000/fisica/velocidad', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ distancia, tiempo }) // valores crudos del input
});

const data = await response.json();

if (!response.ok) {
    setError(data.mensaje);              // mensaje general
    setErrors(data.errores || {});       // mensaje por campo
} else {
    setResultado(data);
}
```

### Respuesta del Servidor

Éxito:
```json
{
    "operacion": "velocidad",
    "distancia": 100,
    "tiempo": 10,
    "resultado": 10,
    "unidad": "m/s"
}
```

Error de validación (`400`):
```json
{
    "mensaje": "La distancia y el tiempo deben ser numeros.",
    "errores": {
        "distancia": "La distancia: debe ser un numero"
    }
}
```

`mensaje` se muestra en la tarjeta roja de resultado y `errores` se usa para
marcar cada input con su mensaje debajo.

## Componentes Principales

### Menu.jsx
Componente principal que gestiona la navegación entre las diferentes calculadoras y el historial.

### Componentes de Cálculo
- `Velocidad.jsx` - Calculadora de velocidad
- `Aceleracion.jsx` - Calculadora de aceleración
- `Fuerza.jsx` - Calculadora de fuerza
- `Energia.jsx` - Calculadora de energía cinética
- `Densidad.jsx` - Calculadora de densidad

### Componentes Reutilizables
- `Input.jsx` - Componente de input de tipo `text` con mensaje de error
- `CalcularButton.jsx` - Botón con estado de carga
- `ResultCard.jsx` - Tarjeta de resultados y formato numérico
- `History.jsx` - Componente de historial
- `Help.jsx` - Guía de fórmulas y ejemplos

## Características de UX

### Mensajes de Error
- La validación se hace en el backend, no en el cliente
- El frontend envía los valores tal cual para que el mensaje llegue a pantalla
- Cada campo con error se marca en rojo con su mensaje debajo
- El mensaje general aparece en una tarjeta roja de resultado
- El botón "Calcular" solo se deshabilita mientras hay una petición en curso

### Formato de Resultados
`ResultCard` formatea los valores para que siempre sean legibles:

| Valor real | Se muestra |
|---|---|
| `9` | `9` |
| `0.33333333333333337` | `0,3333` |
| `2000` | `2.000` |
| `5e-10` | `5.0000 × 10^-10` |

Se evita el `toFixed(4)` fijo, que mostraba `0.0000` para resultados muy
pequeños.

### Estados de Carga
- Indicador visual durante las solicitudes HTTP
- Prevención de múltiples solicitudes simultáneas
- Retroalimentación clara al usuario

### Manejo de Errores
- Errores de conexión con el servidor
- Errores de validación del backend
- Mensajes claros y descriptivos

### Historial
- Almacena los últimos 10 cálculos
- Muestra timestamp de cada cálculo
- Opción para limpiar el historial

##  Responsive Design

La interfaz se adapta a diferentes tamaños de pantalla:
- **Desktop**: Layout de 3 columnas
- **Tablet**: Layout de 2 columnas
- **Mobile**: Layout de 1 columna

##  Configuración

### Variables de Entorno

Para cambiar la URL del backend, modifica la constante en los componentes de cálculo:

```javascript
const API_URL = 'http://localhost:5000'; // Cambiar si es necesario
```

##  Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/
│   │   ├── Input.jsx           # Input reutilizable
│   │   ├── CalcularButton.jsx  # Botón con loading
│   │   ├── ResultCard.jsx      # Tarjeta de resultados
│   │   ├── History.jsx         # Historial
│   │   ├── Help.jsx            # Guía de fórmulas
│   │   ├── menu.jsx            # Menú principal
│   │   ├── Velocidad.jsx       # Calculadora velocidad
│   │   ├── Aceleracion.jsx     # Calculadora aceleración
│   │   ├── fuerza.jsx          # Calculadora fuerza
│   │   ├── Energia.jsx         # Calculadora energía
│   │   └── Densidad.jsx        # Calculadora densidad
│   ├── App.jsx                 # Componente raíz
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales
├── index.html                  # HTML principal
├── package.json                # Dependencias
├── vite.config.js              # Configuración de Vite
└── README.md                   # Este archivo
```

##  Objetivos Educativos

Este proyecto demuestra:

1. **Comunicación Frontend-Backend**: Uso de fetch API para solicitudes HTTP
2. **Gestión de Estado**: useState para manejar datos de la aplicación
3. **Componentes Reutilizables**: Creación de componentes modulares
4. **Validación de Formularios**: La validación vive en el servidor y el frontend muestra sus mensajes
5. **Manejo de Errores**: Gestión robusta de errores HTTP
6. **UX/UI**: Diseño centrado en el usuario con retroalimentación
7. **Arquitectura de Componentes**: Organización lógica de React
8. **Formato Numérico**: Representación correcta de números muy pequeños y grandes

##  Contribución

Este es un proyecto educativo para aprender sobre desarrollo fullstack con React y Express.

##  Licencia

Proyecto educativo - Uso académico