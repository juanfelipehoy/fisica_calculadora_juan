# 🧮 Sistema de Cálculos Físicos - API REST + React Frontend

Proyecto completo de cálculos físicos que consiste en una API REST desarrollada con Express.js y una interfaz gráfica en React. El sistema permite realizar cálculos de velocidad, aceleración, fuerza, energía cinética y densidad con validaciones en ambos lados.

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación Paso a Paso](#instalación-paso-a-paso)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Funcionamiento del Sistema](#funcionamiento-del-sistema)
- [API Endpoints](#api-endpoints)
- [Uso de la Interfaz](#uso-de-la-interfaz)
- [Arquitectura y Flujo de Datos](#arquitectura-y-flujo-de-datos)
- [Validaciones](#validaciones)
- [Troubleshooting](#troubleshooting)
- [Contribución](#contribución)

## 🎯 Descripción del Proyecto

Este proyecto es una aplicación fullstack que automatiza cálculos físicos básicos mediante una arquitectura cliente-servidor. El backend se encarga de los cálculos y validaciones, mientras que el frontend proporciona una interfaz interactiva para que los usuarios ingresen datos y visualicen resultados.

### Objetivos Educativos

- Desarrollar una API REST con Express.js
- Crear una interfaz gráfica con React
- Implementar comunicación HTTP entre frontend y backend
- Aplicar validaciones en cliente y servidor
- Manejar estados de carga y errores
- Implementar una arquitectura de componentes reutilizables

## ✨ Características

### Backend (Express.js)
- ✅ API REST con 5 endpoints para cálculos físicos
- ✅ Middleware de validación para cada endpoint
- ✅ CORS habilitado para comunicación con frontend
- ✅ Manejo de errores HTTP apropiado
- ✅ Estructura modular (routes, controllers, middlewares)

### Frontend (React)
- ✅ 5 calculadoras interactivas con formularios
- ✅ Validación visual en tiempo real
- ✅ Estados de carga durante solicitudes HTTP
- ✅ Historial de cálculos (últimos 10)
- ✅ Guía interactiva con fórmulas y ejemplos
- ✅ Diseño responsivo con Tailwind CSS
- ✅ Componentes reutilizables
- ✅ Manejo robusto de errores

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js**: Entorno de ejecución JavaScript
- **Express.js**: Framework web para API REST
- **CORS**: Middleware para habilitar CORS
- **Nodemon**: Herramienta de desarrollo para reiniciar automáticamente

### Frontend
- **React 19**: Biblioteca para interfaz de usuario
- **Vite**: Herramienta de construcción y desarrollo
- **Tailwind CSS 4**: Framework de CSS utility-first
- **Fetch API**: Para solicitudes HTTP

## 📁 Estructura del Proyecto

```
Proyecto_Fisica_Fabian/
├── controllers/                 # Lógica de negocio del backend
│   └── fisica.controller.js    # Controladores de cálculos físicos
├── middlewares/                 # Middleware de validación
│   └── fisica.middlewares.js   # Validaciones para cada endpoint
├── routes/                     # Definición de rutas
│   └── fisica.routes.js         # Rutas de la API
├── frontend/                    # Aplicación React
│   ├── public/                  # Archivos estáticos
│   ├── src/
│   │   ├── components/          # Componentes React
│   │   │   ├── Input.jsx        # Input reutilizable
│   │   │   ├── CalcularButton.jsx # Botón con loading
│   │   │   ├── ResultCard.jsx  # Tarjeta de resultados
│   │   │   ├── History.jsx     # Historial de cálculos
│   │   │   ├── Help.jsx        # Guía de fórmulas
│   │   │   ├── menu.jsx        # Menú principal
│   │   │   ├── Velocidad.jsx   # Calculadora velocidad
│   │   │   ├── Aceleracion.jsx # Calculadora aceleración
│   │   │   ├── fuerza.jsx      # Calculadora fuerza
│   │   │   ├── Energia.jsx     # Calculadora energía
│   │   │   └── Densidad.jsx    # Calculadora densidad
│   │   ├── App.jsx             # Componente raíz
│   │   ├── main.jsx            # Punto de entrada
│   │   └── index.css           # Estilos globales
│   ├── index.html              # HTML principal
│   ├── package.json            # Dependencias frontend
│   ├── vite.config.js          # Configuración Vite
│   └── README.md               # Documentación frontend
├── .gitignore                  # Archivos ignorados por Git
├── app.js                      # Punto de entrada backend
├── package.json                # Dependencias backend
└── README.md                   # Este archivo
```

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v16 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene incluido con Node.js)
- **Git** (opcional, para control de versiones)

### Verificar instalación

```bash
node --version
npm --version
```

## 🚀 Instalación Paso a Paso

### 1. Clonar o Navegar al Proyecto

Si estás clonando desde un repositorio:
```bash
git clone <url-del-repositorio>
cd Proyecto_Fisica_Fabian
```

Si ya tienes el proyecto:
```bash
cd C:\Users\juanf\Desktop\Proyecto_Fisica_Fabian
```

### 2. Instalar Dependencias del Backend

Desde la raíz del proyecto:
```bash
npm install
```

Esto instalará las dependencias necesarias para el backend:
- express
- cors
- nodemon

### 3. Instalar Dependencias del Frontend

Navegar a la carpeta frontend:
```bash
cd frontend
npm install
```

Esto instalará las dependencias necesarias para el frontend:
- react
- react-dom
- @vitejs/plugin-react
- tailwindcss
- @tailwindcss/vite

### 4. Verificar Instalación

Asegúrate de que ambas carpetas tengan su carpeta `node_modules`:
- Raíz del proyecto: `node_modules/`
- Frontend: `frontend/node_modules/`

## ▶️ Ejecución del Proyecto

El proyecto requiere que tanto el backend como el frontend estén ejecutándose simultáneamente.

### Opción 1: Dos Terminales Separadas (Recomendado)

#### Terminal 1 - Backend
```bash
# Desde la raíz del proyecto
npm run dev
```
El backend se iniciará en `http://localhost:5000`

#### Terminal 2 - Frontend
```bash
# Abre una nueva terminal
cd frontend
npm run dev
```
El frontend se iniciará en `http://localhost:5173`

### Opción 2: Scripts Simultáneos

Puedes usar herramientas como `concurrently` para ejecutar ambos scripts:

1. Instalar concurrently en la raíz:
```bash
npm install --save-dev concurrently
```

2. Agregar script en `package.json` de la raíz:
```json
"scripts": {
  "dev:all": "concurrently \"npm run dev\" \"cd frontend && npm run dev\""
}
```

3. Ejecutar:
```bash
npm run dev:all
```

## 🔧 Funcionamiento del Sistema

### Arquitectura General

El sistema sigue una arquitectura cliente-servidor tradicional:

1. **Backend (Servidor)**: Escucha en el puerto 5000, procesa solicitudes API
2. **Frontend (Cliente)**: Se ejecuta en el puerto 5173, hace solicitudes al backend
3. **Comunicación**: HTTP JSON POST requests

### Flujo de Trabajo

1. Usuario selecciona una calculadora en la interfaz
2. Usuario ingresa los datos requeridos
3. Frontend valida los datos localmente
4. Frontend envía solicitud POST al backend
5. Backend valida los datos nuevamente
6. Backend realiza el cálculo correspondiente
7. Backend retorna el resultado en formato JSON
8. Frontend muestra el resultado al usuario
9. Frontend agrega el cálculo al historial

## 📡 API Endpoints

### Base URL
```
http://localhost:5000
```

### Endpoints Disponibles

#### 1. Calcular Velocidad
```http
POST /fisica/velocidad
Content-Type: application/json

{
  "distancia": 100,
  "tiempo": 10
}
```

**Respuesta Exitosa:**
```json
{
  "operacion": "velocidad",
  "distancia": 100,
  "tiempo": 10,
  "resultado": 10,
  "unidad": "m/s"
}
```

**Validaciones:**
- distancia y tiempo son requeridos
- Deben ser números
- No pueden ser negativos
- tiempo no puede ser cero

#### 2. Calcular Aceleración
```http
POST /fisica/aceleracion
Content-Type: application/json

{
  "velocidadInicial": 0,
  "velocidadFinal": 20,
  "tiempo": 5
}
```

**Respuesta Exitosa:**
```json
{
  "operacion": "aceleracion",
  "velocidadFinal": 20,
  "velocidadInicial": 0,
  "tiempo": 5,
  "resultado": 4,
  "unidad": "m/s²"
}
```

#### 3. Calcular Fuerza
```http
POST /fisica/fuerza
Content-Type: application/json

{
  "masa": 10,
  "aceleracion": 2
}
```

**Respuesta Exitosa:**
```json
{
  "operacion": "fuerza",
  "masa": 10,
  "aceleracion": 2,
  "resultado": 20,
  "unidad": "N"
}
```

#### 4. Calcular Energía Cinética
```http
POST /fisica/energia-cinetica
Content-Type: application/json

{
  "masa": 5,
  "velocidad": 10
}
```

**Respuesta Exitosa:**
```json
{
  "operacion": "energia_cinetica",
  "masa": 5,
  "velocidad": 10,
  "resultado": 250,
  "unidad": "J"
}
```

#### 5. Calcular Densidad
```http
POST /fisica/densidad
Content-Type: application/json

{
  "masa": 2000,
  "volumen": 1
}
```

**Respuesta Exitosa:**
```json
{
  "operacion": "densidad",
  "masa": 2000,
  "volumen": 1,
  "resultado": 2000,
  "unidad": "kg/m³"
}
```

### Códigos de Respuesta HTTP

- `200 OK`: Cálculo realizado exitosamente
- `400 Bad Request`: Error de validación en los datos
- `500 Internal Server Error`: Error del servidor

## 🎨 Uso de la Interfaz

### Acceso a la Aplicación

1. Asegúrate de que ambos servicios estén corriendo
2. Abre tu navegador web
3. Navega a `http://localhost:5173`
4. Verás la página principal con las calculadoras disponibles

### Navegación

1. **Panel Izquierdo**: Lista de calculadoras disponibles
   - Velocidad (v = d/t)
   - Aceleración (a = (vf-vi)/t)
   - Fuerza (F = m×a)
   - Energía Cinética (Ec = ½mv²)
   - Densidad (ρ = m/V)
   - Guía de Fórmulas

2. **Panel Derecho**: Área de trabajo de la calculadora seleccionada

3. **Historial**: Panel inferior izquierdo con últimos cálculos

### Realizar un Cálculo

1. Selecciona una calculadora del panel izquierdo
2. Completa los campos requeridos
3. Haz clic en el botón "Calcular"
4. El resultado aparecerá en una tarjeta verde
5. El cálculo se agregará automáticamente al historial

### Guía de Fórmulas

Haz clic en "📚 Guía de Fórmulas" para ver:
- Fórmulas matemáticas de cada cálculo
- Explicación de variables
- Ejemplos prácticos
- Consejos de uso

## 🏗️ Arquitectura y Flujo de Datos

### Backend Architecture

```
Request → Middleware Validation → Controller → Response
           (fisica.middlewares.js)  (fisica.controller.js)
```

### Frontend Architecture

```
User Input → Component Validation → HTTP Request → API Response → UI Update
              (validateInputs)      (fetch)        (setState)
```

### Data Flow Example

1. **Usuario**: Ingresa distancia=100, tiempo=10
2. **Frontend**: 
   - `validateInputs()` verifica datos
   - `fetch('http://localhost:5000/fisica/velocidad', ...)`
3. **Backend**:
   - `validarVelocidad()` middleware valida
   - `calcularVelocidad()` controller calcula
   - Returns JSON response
4. **Frontend**:
   - `setResultado(data)` actualiza estado
   - `onResult(data)` agrega al historial
   - UI muestra resultado

## ✅ Validaciones

### Validaciones del Frontend

- **Campos requeridos**: Verifica que no estén vacíos
- **Tipo de dato**: Verifica que sean números válidos
- **Rangos**: Verifica que no sean negativos cuando aplica
- **Zero check**: Verifica que denominadores no sean cero
- **Feedback inmediato**: Muestra errores por campo

### Validaciones del Backend

- **Validación redundante**: Repite validaciones del frontend
- **Security**: Nunca confía solo en validación del cliente
- **Mensajes descriptivos**: Retorna errores específicos
- **Status codes**: Usa códigos HTTP apropiados

### Ejemplo de Validación

```javascript
// Frontend validation
if (tiempo === "" || isNaN(tiempo)) {
    newErrors.tiempo = "El tiempo es requerido";
} else if (Number(tiempo) <= 0) {
    newErrors.tiempo = "El tiempo debe ser mayor a cero";
}

// Backend validation
if (tiempo === 0) {
    return res.status(400).json({
        mensaje: "el tiempo no puede ser cero"
    });
}
```

## 🔍 Troubleshooting

### Problemas Comunes

#### 1. Puerto 5000 ya en uso
**Error**: `Error: listen EADDRINUSE: address already in use :::5000`

**Solución**:
```bash
# En Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# O cambiar el puerto en app.js
const port = 5001; // Cambiar a otro puerto
```

#### 2. Puerto 5173 ya en uso
**Error**: `Port 5173 is in use`

**Solución**:
```bash
# Vite automáticamente buscará otro puerto
# O especificar puerto en package.json
"dev": "vite --port 3000"
```

#### 3. Error de conexión CORS
**Error**: `Access to fetch at 'http://localhost:5000/...' from origin 'http://localhost:5173' has been blocked by CORS policy`

**Solución**:
- Asegúrate de que CORS esté habilitado en `app.js`
- Verifica que el backend esté corriendo
- Revisa la URL del backend en los componentes

#### 4. Dependencias no instaladas
**Error**: `module not found`

**Solución**:
```bash
# Reinstalar dependencias backend
rm -rf node_modules package-lock.json
npm install

# Reinstalar dependencias frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
```

#### 5. Error de conexión con el servidor
**Error**: `Error de conexión con el servidor`

**Solución**:
- Verifica que el backend esté corriendo
- Revisa la consola del navegador para más detalles
- Asegúrate de que la URL del backend sea correcta

### Verificación del Sistema

#### Verificar Backend
```bash
# Test con curl
curl -X POST http://localhost:5000/fisica/velocidad \
  -H "Content-Type: application/json" \
  -d '{"distancia":100,"tiempo":10}'
```

#### Verificar Frontend
1. Abre DevTools en el navegador (F12)
2. Ve a la pestaña "Network"
3. Realiza un cálculo
4. Verifica que la solicitud aparezca con status 200

## 🎓 Conceptos Clave

### REST API
- Arquitectura de transferencia de estado representacional
- Uso de métodos HTTP estándar (GET, POST, PUT, DELETE)
- Comunicación stateless
- Respuestas en formato JSON

### React Hooks
- `useState`: Manejo de estado local
- `useEffect`: Efectos secundarios (no usado en este proyecto)
- Props: Pasar datos entre componentes

### HTTP Communication
- `fetch()`: API moderna para solicitudes HTTP
- `async/await`: Manejo de operaciones asíncronas
- JSON: Formato de intercambio de datos

### Component Architecture
- Componentes funcionales
- Props y state
- Reutilizabilidad
- Composición de componentes

## 📝 Scripts Disponibles

### Backend (raíz)
```bash
npm run dev          # Inicia servidor con nodemon
npm start           # Inicia servidor sin nodemon
```

### Frontend
```bash
npm run dev         # Inicia servidor de desarrollo Vite
npm run build       # Construye para producción
npm run preview     # Previa de producción
npm run lint        # Ejecuta ESLint
```

## 🔒 Seguridad

Consideraciones de seguridad implementadas:

1. **Validación en servidor**: Nunca confiar solo en validación del cliente
2. **CORS**: Controlado para permitir solo orígenes específicos
3. **Error handling**: Mensajes de error no exponen información sensible
4. **Input sanitization**: Validación de tipos de datos

## 🚀 Despliegue

### Backend (Producción)

1. Usar variables de entorno para configuración
2. Implementar logging apropiado
3. Usar process manager (PM2)
4. Configurar HTTPS en producción

### Frontend (Producción)

1. Construir la aplicación: `npm run build`
2. Desplegar carpeta `dist/` en servidor web
3. Configurar URL del backend para producción
4. Implementar optimización de assets

## 🤝 Contribución

Este es un proyecto educativo. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Proyecto educativo - Uso académico

## 👥 Autores

- Desarrollado como proyecto de aprendizaje
- Backend: Express.js + Node.js
- Frontend: React + Vite + Tailwind CSS

## 📞 Soporte

Para problemas o preguntas:
- Revisa la sección de Troubleshooting
- Verifica la documentación de los componentes
- Consulta los logs de la consola

---

**Versión**: 1.0.0  
**Última actualización**: 2026  
**Estado**: ✅ Funcional y listo para usar