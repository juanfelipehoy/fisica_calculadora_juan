# Sistema de Cálculos Físicos - API REST + React Frontend

Proyecto completo de cálculos físicos que consiste en una API REST desarrollada con Express.js y una interfaz gráfica en React. El sistema permite realizar cálculos de velocidad, aceleración, fuerza, energía cinética, energía potencial y densidad, con validación centralizada en el servidor que devuelve mensajes de error descriptivos por campo.

##  Tabla de Contenidos

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
- [Ver los Mensajes de Error](#ver-los-mensajes-de-error)
- [Arquitectura y Flujo de Datos](#arquitectura-y-flujo-de-datos)
- [Validaciones](#validaciones)
- [Troubleshooting](#troubleshooting)
- [Contribución](#contribución)

## Descripción del Proyecto

Este proyecto es una aplicación fullstack que automatiza cálculos físicos básicos mediante una arquitectura cliente-servidor. El backend se encarga de los cálculos y validaciones, mientras que el frontend proporciona una interfaz interactiva para que los usuarios ingresen datos y visualicen resultados.

### Objetivos Educativos

- Desarrollar una API REST con Express.js
- Crear una interfaz gráfica con React
- Implementar comunicación HTTP entre frontend y backend
- Centralizar la validación en el servidor con un factory reutilizable
- Exponer errores descriptivos por campo mediante un contrato JSON estable
- Manejar estados de carga y errores
- Implementar una arquitectura de componentes reutilizables

## Características

### Backend (Express.js)
-  API REST con 6 endpoints para cálculos físicos
-  Middleware de validación centralizado con factory `crearValidador`
-  Acepta valores numéricos enviados como **texto o número** (normaliza a número)
-  Respuesta de error enriquecida: `mensaje` general + `errores` por campo
-  CORS habilitado para comunicación con frontend
-  Manejo de errores HTTP apropiado
-  Estructura modular (routes, controllers, middlewares)

### Frontend (React)
-  5 calculadoras interactivas con formularios
-  Inputs de tipo `text`: permiten escribir **letras y números** (el backend valida)
-  Mensajes de error del servidor mostrados en la tarjeta de resultado
-  Campo con error resaltado en rojo debajo del input
-  Formato numérico inteligente (notación científica para valores muy pequeños)
-  Estados de carga durante solicitudes HTTP
-  Historial de cálculos (últimos 10)
-  Guía interactiva con fórmulas y ejemplos
-  Diseño responsivo con Tailwind CSS
-  Componentes reutilizables
-  Manejo robusto de errores

## Tecnologías Utilizadas

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

## Estructura del Proyecto

```
Proyecto_Fisica_Fabian/
├── controllers/                 # Lógica de negocio del backend
│   └── fisica.controller.js    # Controladores de cálculos físicos
├── middlewares/                 # Middleware de validación
│   └── fisica.middlewares.js   # Validador común (crearValidador) + 6 validadores
├── routes/                     # Definición de rutas
│   └── fisica.routes.js         # Rutas de la API
├── frontend/                    # Aplicación React
│   ├── public/                  # Archivos estáticos
│   ├── src/
│   │   ├── components/          # Componentes React
│   │   │   ├── Input.jsx        # Input reutilizable (type="text")
│   │   │   ├── CalcularButton.jsx # Botón con loading
│   │   │   ├── ResultCard.jsx  # Tarjeta de resultados + formateo numérico
│   │   │   ├── History.jsx     # Historial de cálculos
│   │   │   │   ├── Help.jsx        # Guía de fórmulas
│   │   │   ├── menu.jsx        # Menú principal
│   │   │   ├── Velocidad.jsx   # Calculadora velocidad
│   │   │   ├── Aceleracion.jsx # Calculadora aceleración
│   │   │   ├── fuerza.jsx      # Calculadora fuerza
│   │   │   ├── Energia.jsx     # Calculadora energía cinética
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
├── README.md                   # Este archivo
└── README2.md                  # Guía rápida de ejecución
```

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v16 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene incluido con Node.js)
- **Git** (opcional, para control de versiones)

### Verificar instalación

```bash
node --version
npm --version
```

## Instalación Paso a Paso

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

## Funcionamiento del Sistema

### Arquitectura General

El sistema sigue una arquitectura cliente-servidor tradicional:

1. **Backend (Servidor)**: Escucha en el puerto 5000, procesa solicitudes API
2. **Frontend (Cliente)**: Se ejecuta en el puerto 5173, hace solicitudes al backend
3. **Comunicación**: HTTP JSON POST requests

### Flujo de Trabajo

1. Usuario selecciona una calculadora en la interfaz
2. Usuario ingresa los datos requeridos (el campo acepta letras y números)
3. Usuario hace clic en el botón "Calcular"
4. Frontend envía los valores **en crudo como texto** al backend
5. Backend valida los datos con el middleware
6. Si hay un error, el backend responde `400` con el mensaje y los campos fallidos
7. Frontend muestra el mensaje en la tarjeta roja de resultado y marca los inputs
8. Si todo es válido, el backend realiza el cálculo y responde `200`
9. Frontend muestra el resultado formateado y lo agrega al historial

> **Nota importante**: la validación vive en el backend. El frontend envía los
> datos tal cual para que los mensajes del middleware lleguen a la pantalla.
> Por eso el botón "Calcular" nunca se deshabilita: pulsar con campos vacíos
> es justamente lo que dispara el mensaje "son requeridos".

## API Endpoints

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
  "distancia": "100",
  "tiempo": "10"
}
```

> Los valores pueden enviarse como **número** (`100`) o como **texto** (`"100"`).
> El middleware normaliza el texto a número antes de calcular.

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

**Respuesta con error:**
```json
{
  "mensaje": "La distancia y el tiempo deben ser numeros.",
  "errores": {
    "distancia": "La distancia: debe ser un numero"
  }
}
```

**Validaciones:**
- distancia y tiempo son requeridos
- Deben ser números (se acepta texto numérico, se rechazan letras)
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
  "masa": "2000",
  "volumen": "1"
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

#### 6. Calcular Energía Potencial
```http
POST /fisica/energia-potencial
Content-Type: application/json

{
  "masa": "2",
  "gravedad": "9.8",
  "altura": "10"
}
```

**Respuesta Exitosa:**
```json
{
  "operacion": "energia_potencial",
  "masa": 2,
  "gravedad": 9.8,
  "altura": 10,
  "resultado": 196,
  "unidad": "J"
}
```

> Este endpoint existe en la API y está validado, aunque todavía no tiene
> interfaz gráfica propia en el menú del frontend.

### Formato de Respuesta con Error

Todas las respuestas de validación usan la misma estructura:

```json
{
  "mensaje": "Mensaje general con la regla que se incumplió",
  "errores": {
    "campo": "Mensaje específico de ese campo"
  }
}
```

- `mensaje`: se muestra en la tarjeta roja de resultado
- `errores`: se usa para resaltar cada input con su mensaje debajo

Cuando varios campos fallan a la vez, `mensaje` muestra la regla de mayor
prioridad (requeridos → numéricos → negativos → cero) y `errores` incluye
todos los campos con problema.

### Códigos de Respuesta HTTP

- `200 OK`: Cálculo realizado exitosamente
- `400 Bad Request`: Error de validación en los datos
- `500 Internal Server Error`: Error del servidor

## Uso de la Interfaz

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

### Ver los Mensajes de Error

1. Escribe **letras** en un campo numérico (por ejemplo `abc` en Distancia)
2. Haz clic en "Calcular"
3. Aparecerá una tarjeta roja con el mensaje del servidor, y el input con el
   error se marcará en rojo con su mensaje debajo

Otros casos que puedes probar:

| Entrada | Mensaje que verás |
|---|---|
| Campo vacío | "La distancia y el tiempo son requeridos." |
| `abc` | "La distancia y el tiempo deben ser numeros." |
| `-5` | "La distancia y el tiempo no pueden ser negativos." |
| `0` en Tiempo | "El tiempo no puede ser cero." |

> El botón "Calcular" nunca se deshabilita. Puedes pulsar con los campos
> vacíos para ver el mensaje de "requeridos".

### Guía de Fórmulas

Haz clic en "Guía de Fórmulas" para ver:
- Fórmulas matemáticas de cada cálculo
- Explicación de variables
- Ejemplos prácticos
- Consejos de uso

## Arquitectura y Flujo de Datos

### Backend Architecture

```
Request → Middleware Validation → Controller → Response
           (fisica.middlewares.js)  (fisica.controller.js)
```

### Frontend Architecture

```
User Input → HTTP Request → API Response → UI Update
              (fetch)         (setState)
              (valores crudos)
```

### Data Flow Example

1. **Usuario**: Ingresa distancia=100, tiempo=10
2. **Frontend**: 
   - `fetch('http://localhost:5000/fisica/velocidad', ...)` con `{ distancia: "100", tiempo: "10" }`
3. **Backend**:
   - `validarVelocidad()` middleware valida y normaliza a número
   - `calcularVelocidad()` controller calcula
   - Returns JSON response
4. **Frontend**:
   - `setResultado(data)` actualiza estado
   - `onResult(data)` agrega al historial
   - UI muestra resultado

### Ejemplo de flujo con error

1. **Usuario**: Ingresa distancia=`abc`, tiempo=10
2. **Frontend**: envía los valores sin transformar, sin bloquear el botón
3. **Backend**: `Number("abc")` no es finito → responde `400`:
   ```json
   {
     "mensaje": "La distancia y el tiempo deben ser numeros.",
     "errores": { "distancia": "La distancia: debe ser un numero" }
   }
   ```
4. **Frontend**:
   - `setError(data.mensaje)` → mensaje en la tarjeta roja
   - `setErrors(data.errores)` → input marcado en rojo con su mensaje

##  Validaciones

### Dónde vive la validación

Toda la validación se hace en el **backend**, dentro de los middlewares. El
frontend envía los valores tal cual los escribió el usuario y se limita a
mostrar lo que el servidor responda. Esto evita que el cliente rechace datos
antes de que el servidor pueda explicar por qué.

### Formato de los campos

Los inputs son de tipo `text`, no `number`. Esto es intencional: permite
escribir letras para comprobar que el sistema las rechaza con un mensaje
claro, en lugar de simplemente impedir teclear.

El backend acepta ambas formas y normaliza:

| Entrada del usuario | JSON enviado | ¿Válido? |
|---|---|---|
| `100` (número) | `100` | Sí |
| `100` (texto) | `"100"` | Sí, se normaliza a número |
| `" 100 "` (con espacios) | `" 100 "` | Sí, se normaliza a número |
| `abc` (letras) | `"abc"` | No → "debe ser un numero" |
| (vacío) | `""` | No → "es un dato requerido" |

### Reglas validadas

| Regla | Cuándo se aplica |
|---|---|
| Es un dato requerido | Campo vacío, `null` o `undefined` |
| Debe ser un número | El texto no se puede convertir a número finito |
| No admite valores negativos | Campos de magnitud (masa, distancia, altura, volumen) |
| Debe ser mayor que cero | Divisores: tiempo, volumen, gravedad |

Las velocidades (inicial y final) y la aceleración **sí admiten valores
negativos**, porque son quantities con signo y representan deceleración.

### Mensajes generados

Cada condición que se cumple muestra su propio mensaje:

| Condición | Mensaje general | Mensaje por campo |
|---|---|---|
| Vacío | `... son requeridos.` | `X: es un dato requerido` |
| No numérico | `... deben ser numeros.` | `X: debe ser un numero` |
| Negativo | `... no pueden ser negativos.` | `X: no admite valores negativos` |
| Cero | `X no puede ser cero.` | `X: debe ser mayor que cero` |

### Ejemplo de implementación

```javascript
// Backend: middlewares/fisica.middlewares.js
const esVacio = (valor) =>
    valor === undefined ||
    valor === null ||
    (typeof valor === "string" && valor.trim() === "");

const esNumero = (valor) => !esVacio(valor) && Number.isFinite(Number(valor));

// Valida, normaliza a número y responde con mensaje + errores por campo
if (!esNumero(distancia)) {
    return res.status(400).json({
        mensaje: "La distancia y el tiempo deben ser numeros.",
        errores: { distancia: "La distancia: debe ser un numero" }
    });
}
body.distancia = Number(distancia); // normalización
```

```javascript
// Frontend: componentes/Velocidad.jsx
// Se envían los valores crudos, sin Number() ni validación previa
body: JSON.stringify({ distancia, tiempo })

// Y se muestra lo que responde el servidor
if (!response.ok) {
    setError(data.mensaje || 'Error en el cálculo');
    setErrors(data.errores || {});
}
```

### Formato de los resultados

`ResultCard` aplica un formato numérico inteligente en lugar de un
`toFixed(4)` fijo:

| Valor real | Se muestra como |
|---|---|
| `9` | `9` |
| `0.33333333333333337` | `0,3333` |
| `196` | `196` |
| `2000` | `2.000` |
| `5e-10` | `5.0000 × 10^-10` |

Esto evita el error que producía el `toFixed(4)` fijo, que mostraba
`0.0000 J` para resultados reales de `5e-10 J`.

## Troubleshooting

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

#### 6. El botón "Calcular" aparece gris y no hace nada
**Causa**: el botón se deshabilita cuando faltan campos, así que nunca llega
al backend y no hay mensaje que mostrar.

**Nota**: en la versión actual esto ya no ocurre. El botón solo se deshabilita
mientras la petición está en curso. Si vuelve a pasar, revisa que los
componentes no tengan un `disabled={!...}` en `CalcularButton`.

#### 7. No puedo escribir letras en los campos
**Causa**: los inputs están en `type="number"`, que solo acepta dígitos.

**Nota**: en la versión actual `Input.jsx` usa `type="text"` a propósito, para
poder escribir letras y comprobar que el backend las rechaza con un mensaje.
Los valores se envían como texto y el middleware los normaliza.

### Verificación del Sistema

#### Verificar Backend
```bash
# Cálculo válido (texto o número, ambos funcionan)
curl -X POST http://localhost:5000/fisica/velocidad \
  -H "Content-Type: application/json" \
  -d '{"distancia":"100","tiempo":"10"}'

# Con error: debe devolver 400 con mensaje y errores por campo
curl -X POST http://localhost:5000/fisica/velocidad \
  -H "Content-Type: application/json" \
  -d '{"distancia":"abc","tiempo":"10"}'
```

Respuesta esperada del segundo caso:
```json
{
  "mensaje": "La distancia y el tiempo deben ser numeros.",
  "errores": { "distancia": "La distancia: debe ser un numero" }
}
```

#### Verificar Frontend
1. Abre DevTools en el navegador (F12)
2. Ve a la pestaña "Network"
3. Realiza un cálculo
4. Verifica que la solicitud aparezca con status 200
5. Escribe letras en un campo y verifica que la solicitud aparece con status 400
   y que el mensaje se muestra en pantalla

#### Verificar que los mensajes funcionan
```bash
# Vacío -> "son requeridos"
curl -X POST http://localhost:5000/fisica/densidad \
  -H "Content-Type: application/json" -d '{"masa":"20","volumen":""}'

# Negativo -> "no pueden ser negativos"
curl -X POST http://localhost:5000/fisica/fuerza \
  -H "Content-Type: application/json" -d '{"masa":"-10","aceleracion":"5"}'

# Cero -> "no puede ser cero"
curl -X POST http://localhost:5000/fisica/velocidad \
  -H "Content-Type: application/json" -d '{"distancia":"100","tiempo":"0"}'
```

## Conceptos Clave

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

## Scripts Disponibles

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

## Seguridad

Consideraciones de seguridad implementadas:

1. **Validación en servidor**: Nunca confiar solo en validación del cliente
2. **CORS**: Controlado para permitir solo orígenes específicos
3. **Error handling**: Mensajes de error no exponen información sensible
4. **Input sanitization**: Validación de tipos de datos

##  Despliegue

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

## Contribución

Este es un proyecto educativo. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## Licencia

Proyecto educativo - Uso académico

## Autores

- Desarrollado como proyecto de aprendizaje
- Backend: Express.js + Node.js
- Frontend: React + Vite + Tailwind CSS

## Soporte

Para problemas o preguntas:
- Revisa la sección de Troubleshooting
- Verifica la documentación de los componentes
- Consulta los logs de la consola

---

**Versión**: 1.1.0  
**Última actualización**: 2026  
**Estado**:  Funcional y listo para usar

### Novedades de la v1.1.0
- Validación migrada a un factory único `crearValidador` en el backend
- Los middlewares aceptan texto o número y normalizan a número
- Las respuestas de error incluyen `errores` con el mensaje por campo
- Los inputs pasaron de `type="number"` a `type="text"` (aceptan letras)
- El frontend ya no bloquea la petición: los mensajes del servidor se ven
- El botón "Calcular" solo se deshabilita durante la petición
- `ResultCard` formatea números sin truncar valores muy pequeños
- Documentado el endpoint `/fisica/energia-potencial`