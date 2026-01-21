// retorno.js
// Servidor HTTP simple en Node que entrega una interfaz HTML
// para el módulo de RETORNO DE LIBROS (RF01–RF05).
// Módulo de retorno de libros - Sprint 1
// Implementa RF01–RF05 con interfaz HTML servida desde Node

const http = require("http");

const PORT = 3000;

// Aquí va TODO el HTML cambio desde github
const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
<<<<<<< HEAD
  <title>Biblioteca Escolar - Retorno (VERSIÓN FINAL)</title>

  <style>
    :root {
      --primary: #1e88e5;
      --primary-dark: #1565c0;
      --bg: #f3f4f6;
      --card-bg: #ffffff;
      --border: #e0e0e0;
      --text-main: #1f2933;
      --text-muted: #6b7280;
      --ok-bg: #e8f5e9;
      --ok-border: #a5d6a7;
      --ok-text: #2e7d32;
      --err-bg: #ffebee;
      --err-border: #ef9a9a;
      --err-text: #c62828;
      --info-bg: #e3f2fd;
      --info-border: #90caf9;
      --info-text: #1565c0;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: var(--bg);
      color: var(--text-main);
    }

    .navbar {
      background: var(--primary);
      color: #fff;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 2px 4px rgba(0,0,0,0.15);
    }

    .navbar-title {
      font-size: 18px;
      font-weight: 700;
    }

    .navbar-subtitle {
      font-size: 13px;
      opacity: 0.9;
    }

    .container {
      max-width: 1100px;
      margin: 24px auto;
      padding: 0 16px;
    }

    .grid {
      display: grid;
      grid-template-columns: 2fr 1.5fr;
      gap: 20px;
    }

    @media (max-width: 900px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }

    .card {
      background: var(--card-bg);
      border-radius: 10px;
      padding: 18px 20px;
      box-shadow: 0 1px 4px rgba(15,23,42,0.08);
      border: 1px solid var(--border);
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .card-title {
      font-size: 16px;
      font-weight: 600;
    }

    .card-subtitle {
      font-size: 12px;
      color: var(--text-muted);
    }

    label {
      font-weight: 600;
      font-size: 13px;
      display: inline-block;
      margin-bottom: 4px;
    }

    input[type="text"],
    input[type="number"] {
      width: 100%;
      padding: 7px 9px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      margin-bottom: 8px;
      font-size: 13px;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    input[type="text"]:focus,
    input[type="number"]:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 1px rgba(30,136,229,0.2);
    }

    button {
      padding: 7px 12px;
      border-radius: 6px;
      border: none;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      background: var(--primary);
      color: #fff;
      margin-top: 4px;
      transition: background 0.2s, transform 0.05s;
    }

    button:hover { background: var(--primary-dark); }
    button:active { transform: scale(0.97); }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      font-size: 13px;
    }

    th, td {
      padding: 6px 8px;
      border-bottom: 1px solid #e5e7eb;
      text-align: left;
    }

    th {
      background: #f3f4f6;
      font-weight: 600;
    }

    .mensaje {
      margin-top: 8px;
      padding: 8px 10px;
      border-radius: 6px;
      font-size: 13px;
      white-space: pre-line;
    }

    .ok {
      background: var(--ok-bg);
      color: var(--ok-text);
      border: 1px solid var(--ok-border);
    }

    .error {
      background: var(--err-bg);
      color: var(--err-text);
      border: 1px solid var(--err-border);
    }

    .info {
      background: var(--info-bg);
      color: var(--info-text);
      border: 1px solid var(--info-border);
    }

    .badge {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 600;
    }

    .badge-estado {
      background: #e0f2fe;
      color: #075985;
    }

    .muted {
      color: var(--text-muted);
      font-size: 12px;
    }

    pre {
      background: #111827;
      color: #e5e7eb;
      font-size: 11px;
      padding: 10px;
      border-radius: 8px;
      overflow-x: auto;
    }
  </style>
</head>
<body>
  <header class="navbar">
    <div>
      <div class="navbar-title">Sistema de Biblioteca Escolar</div>
      <div class="navbar-subtitle">Sprint: Módulo de retorno de libros (RF01–RF05)</div>
    </div>
    <div class="navbar-subtitle">Prototype · Node.js (un solo archivo)</div>
  </header>

  <main class="container">
    <div class="grid">
      <!-- COLUMNA IZQUIERDA: SOCIO + PRÉSTAMOS -->
      <section class="card">
        <div class="card-header">
          <div>
            <div class="card-title">1. Búsqueda y validación de socio</div>
            <div class="card-subtitle">RF01 – Validación del socio para devolución</div>
          </div>
        </div>

        <label for="dniInput">DNI del socio</label>
        <input type="text" id="dniInput" placeholder="Ejemplo: 12345678" />
        <button type="button" onclick="buscarSocio()">Buscar socio</button>

        <div id="infoSocio" class="mensaje info" style="display:none;"></div>

        <div id="bloquePrestamos" style="display:none; margin-top: 12px;">
          <div class="card-subtitle" style="margin-bottom:4px;">Préstamos vigentes / vencidos</div>
          <table id="tablaPrestamos">
            <thead>
              <tr>
                <th>ID</th>
                <th>Libro</th>
                <th>F. Préstamo</th>
                <th>F. Devolución prog.</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <!-- JS -->
            </tbody>
          </table>
        </div>
      </section>

      <!-- COLUMNA DERECHA: DEVOLUCIÓN + ESTADO MODELO -->
      <section class="card">
        <div class="card-header">
          <div>
            <div class="card-title">2. Registro de devolución</div>
            <div class="card-subtitle">
              RF02–RF05 – Devolución, actualización de estados, suspensión de socio
            </div>
          </div>
        </div>

        <label for="idPrestamoInput">ID de préstamo a devolver</label>
        <input type="number" id="idPrestamoInput" placeholder="Ejemplo: 100" />

        <label for="fechaDevolucionInput">Fecha de devolución real</label>
        <input type="text" id="fechaDevolucionInput" placeholder="YYYY-MM-DD (opcional, por defecto hoy)" />

        <button type="button" onclick="registrarDevolucion()">Registrar devolución</button>

        <div id="resultadoDevolucion" class="mensaje" style="display:none;"></div>

        <div style="margin-top: 12px;">
          <div class="card-subtitle" style="margin-bottom:4px;">Snapshot del modelo (Socios, Préstamos, Ejemplares)</div>
          <pre id="estadoFinal"></pre>
        </div>
      </section>
    </div>

    <section class="card" style="margin-top: 20px;">
      <div class="card-header">
        <div>
          <div class="card-title">Notas del sprint</div>
          <div class="card-subtitle">
            Este prototipo implementa los criterios de aceptación del retorno:
            estado del préstamo, socio y ejemplar.
          </div>
        </div>
      </div>
      <p class="muted">
        Usa este prototipo como evidencia funcional del sprint: se puede mostrar cómo,
        al registrar una devolución fuera de fecha, el sistema suspende al socio y
        actualiza todos los estados según las reglas de negocio (RF01–RF05).
      </p>
    </section>
  </main>

  <script>
    // ==============================
    // "BASE DE DATOS" DE PRUEBA
    // ==============================

    const socios = {
      1: {
        id: 1,
        dni: "12345678",
        nombre: "Juan Pérez",
        estado: "HABILITADO",   // HABILITADO / SUSPENDIDO
        finSuspension: null
      }
    };

    const ejemplares = {
      10: {
        id: 10,
        codigo: "EJ-0010",
        estado: "PRESTADO"     // DISPONIBLE / PRESTADO / DETERIORADO
      }
    };

    const prestamos = {
      100: {
        id: 100,
        idSocio: 1,
        idEjemplar: 10,
        tituloLibro: "Matemática 5to grado",
        fechaPrestamo: "2025-12-01",
        fechaDevProg: "2025-12-05",  // fecha comprometida
        estado: "VIGENTE"            // VIGENTE / DEVUELTO / VENCIDO
      }
    };

    // ============================
    // RF01 – Buscar y validar socio
    // ============================

    function buscarSocio() {
      const dni = document.getElementById("dniInput").value.trim();
      const infoSocioDiv = document.getElementById("infoSocio");
      const bloquePrestamos = document.getElementById("bloquePrestamos");
      const cuerpoTabla = document.querySelector("#tablaPrestamos tbody");

      infoSocioDiv.style.display = "none";
      bloquePrestamos.style.display = "none";
      cuerpoTabla.innerHTML = "";

      if (!dni) {
        mostrarMensaje(infoSocioDiv, "Ingrese un DNI para realizar la búsqueda.", "error");
        return;
      }

      let socioEncontrado = null;
      for (const id in socios) {
        if (socios[id].dni === dni) {
          socioEncontrado = socios[id];
          break;
        }
      }

      if (!socioEncontrado) {
        mostrarMensaje(infoSocioDiv, "Socio no encontrado.", "error");
        return;
      }

      let mensaje = \`Socio: \${socioEncontrado.nombre} (ID: \${socioEncontrado.id})\\n\` +
                    \`Estado actual: \${socioEncontrado.estado}\`;
      if (socioEncontrado.estado === "SUSPENDIDO" && socioEncontrado.finSuspension) {
        mensaje += \`\\nSuspendido hasta: \${socioEncontrado.finSuspension}\`;
      }

      mostrarMensaje(infoSocioDiv, mensaje, "info");

      // Préstamos vigentes o vencidos
      const prestamosSocio = Object.values(prestamos).filter(p =>
        p.idSocio === socioEncontrado.id &&
        (p.estado === "VIGENTE" || p.estado === "VENCIDO")
      );

      if (prestamosSocio.length > 0) {
        bloquePrestamos.style.display = "block";
        prestamosSocio.forEach(p => {
          const fila = document.createElement("tr");
          fila.innerHTML = \`
            <td>\${p.id}</td>
            <td>\${p.tituloLibro}</td>
            <td>\${p.fechaPrestamo}</td>
            <td>\${p.fechaDevProg}</td>
            <td><span class="badge badge-estado">\${p.estado}</span></td>
          \`;
          cuerpoTabla.appendChild(fila);
        });
      } else {
        bloquePrestamos.style.display = "none";
      }

      mostrarEstadoFinal();
    }

    // ================================================
    // RF02–RF05 – Registrar devolución y actualizar todo
    // ================================================

    function registrarDevolucion() {
      const idPrestamo = parseInt(document.getElementById("idPrestamoInput").value, 10);
      const fechaInput = document.getElementById("fechaDevolucionInput").value.trim();
      const resultadoDiv = document.getElementById("resultadoDevolucion");

      resultadoDiv.style.display = "none";

      if (isNaN(idPrestamo)) {
        mostrarMensaje(resultadoDiv, "Ingrese un ID de préstamo válido.", "error");
        return;
      }

      const prestamo = prestamos[idPrestamo];
      if (!prestamo) {
        mostrarMensaje(resultadoDiv, "Préstamo no encontrado.", "error");
        return;
      }

      // Solo VIGENTE o VENCIDO (RF02)
      if (prestamo.estado !== "VIGENTE" && prestamo.estado !== "VENCIDO") {
        mostrarMensaje(resultadoDiv, "El préstamo no está en un estado válido para devolución.", "error");
        return;
      }

      const socio = socios[prestamo.idSocio];
      const ejemplar = ejemplares[prestamo.idEjemplar];
      const mensajes = [];

      // Fecha real de devolución
      let hoy;
      if (fechaInput) {
        const f = new Date(fechaInput);
        if (isNaN(f.getTime())) {
          mostrarMensaje(resultadoDiv, "Fecha de devolución inválida. Use formato YYYY-MM-DD.", "error");
          return;
        }
        hoy = f;
      } else {
        hoy = new Date();
      }

      // RF05 – estado del ejemplar
      if (ejemplar.estado === "DETERIORADO") {
        mensajes.push("RF05: El ejemplar está DETERIORADO, solo se registra la devolución.");
      } else {
        ejemplar.estado = "DISPONIBLE";
        mensajes.push("RF05: El ejemplar se ha marcado como DISPONIBLE.");
      }

      // RF03 – estado del préstamo
      const fechaProg = new Date(prestamo.fechaDevProg);

      if (hoy <= fechaProg) {
        prestamo.estado = "DEVUELTO";
        mensajes.push("RF03: Préstamo devuelto en fecha (DEVUELTO).");
      } else {
        prestamo.estado = "VENCIDO";
        mensajes.push("RF03: Préstamo devuelto FUERA de fecha (VENCIDO).");

        // RF04 – suspensión 15 días
        socio.estado = "SUSPENDIDO";
        const fin = new Date(hoy);
        fin.setDate(fin.getDate() + 15);
        socio.finSuspension = fin.toISOString().slice(0, 10);
        mensajes.push(\`RF04: Socio suspendido hasta: \${socio.finSuspension}.\`);
      }

      mostrarMensaje(resultadoDiv, mensajes.join("\\n"), "ok");
      mostrarEstadoFinal();

      // Si ya hay un DNI buscado, refrescamos la tabla de préstamos
      const dniActual = document.getElementById("dniInput").value.trim();
      if (dniActual) {
        buscarSocio();
      }
    }

    // =====================
    // UTILIDADES DE VISTA
    // =====================

    function mostrarMensaje(elemento, texto, tipo) {
      elemento.textContent = texto;
      elemento.classList.remove("ok", "error", "info");
      if (tipo === "ok") elemento.classList.add("ok");
      if (tipo === "error") elemento.classList.add("error");
      if (tipo === "info") elemento.classList.add("info");
      elemento.style.display = "block";
    }

    function mostrarEstadoFinal() {
      const estadoDiv = document.getElementById("estadoFinal");
      const snapshot = { socios, prestamos, ejemplares };
      estadoDiv.textContent = JSON.stringify(snapshot, null, 2);
    }

    document.addEventListener("DOMContentLoaded", mostrarEstadoFinal);
  </script>
</body>
</html>`;

// Servidor HTTP simple
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
