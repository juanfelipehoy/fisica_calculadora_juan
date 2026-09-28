#  Calculadoras de Física - Frontend

Interfaz gráfica en React para realizar cálculos físicos básicos mediante una API REST.

## Características

- **5 Calculadoras Físicas**: Velocidad, Aceleración, Fuerza, Energía Cinética y Densidad
- **Comunicación HTTP**: Conexión con API REST para cálculos y validaciones
- **Validación Visual**: Validación de inputs en tiempo real con mensajes de error
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

```javascript
const response = await fetch('http://localhost:5000/fisica/velocidad', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        distancia: 100, 
        tiempo: 10 
    })
});
```

### Respuesta del Servidor

```json
{
    "operacion": "velocidad",
    "distancia": 100,
    "tiempo": 10,
    "resultado": 10,
    "unidad": "m/s"
}
```

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
- `Input.jsx` - Componente de input con validación
- `CalcularButton.jsx` - Botón con estado de carga
- `ResultCard.jsx` - Tarjeta para mostrar resultados
- `History.jsx` - Componente de historial
- `Help.jsx` - Guía de fórmulas y ejemplos

## Características de UX

### Validación en Tiempo Real
- Los inputs se validan antes de enviar la solicitud
- Mensajes de error específicos para cada campo
- Botón deshabilitado cuando hay errores

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
4. **Validación de Formularios**: Validación en cliente y servidor
5. **Manejo de Errores**: Gestión robusta de errores HTTP
6. **UX/UI**: Diseño centrado en el usuario con retroalimentación
7. **Arquitectura de Componentes**: Organización lógica de React

##  Contribución

Este es un proyecto educativo para aprender sobre desarrollo fullstack con React y Express.

##  Licencia

Proyecto educativo - Uso académico