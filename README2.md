#  Cómo Ejecutar el Proyecto

Guía rápida para poner en funcionamiento el sistema de cálculos físicos.

##  Requisitos Previos

- Node.js instalado (v16 o superior)
- npm (viene con Node.js)

##  Instalación

### 1. Instalar Dependencias del Backend

Desde la raíz del proyecto:
```bash
npm install
```

### 2. Instalar Dependencias del Frontend

```bash
cd frontend
npm install
cd ..
```

## ▶️ Ejecutar el Proyecto

### Opción 1: Dos Terminales (Recomendado)

**Terminal 1 - Backend:**
```bash
npm run dev
```
El backend se iniciará en `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
El frontend se iniciará en `http://localhost:5173`

### Opción 2: Script Simultáneo

**Primero instala concurrently:**
```bash
npm install --save-dev concurrently
```

**Luego ejecuta:**
```bash
npm run dev:all
```

##  Usar la Aplicación

1. Abre tu navegador
2. Ve a `http://localhost:5173`
3. Selecciona una calculadora del menú izquierdo
4. Ingresa los datos y haz clic en "Calcular"

##  Verificación

- Backend corriendo en `http://localhost:5000`
- Frontend corriendo en `http://localhost:5173`
- Ambas terminales deben mostrar mensajes de éxito

##  Problemas Comunes

**Puerto 5000 en uso:**
```bash
# Cambia el puerto en app.js línea 5
const port = 5001;
```

**Error de conexión:**
- Asegúrate de que ambas terminales estén corriendo
- Verifica que no haya errores en las terminales

**Dependencias faltantes:**
```bash
# Reinstalar todo
rm -rf node_modules package-lock.json
cd frontend
rm -rf node_modules package-lock.json
cd ..
npm install
cd frontend
npm install
