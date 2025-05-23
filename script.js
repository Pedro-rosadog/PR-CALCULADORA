// Mostrar campos según cálculo seleccionado
function mostrarCampos() {
  const calculo = document.getElementById('calculo').value;
  let camposHTML = '';

  switch (calculo) {
    case 'velocidad':
      camposHTML = `
        <label for="distancia">Distancia (m):</label>
        <input type="number" id="distancia" placeholder="Introduce la distancia" required />
        <label for="tiempo">Tiempo (s):</label>
        <input type="number" id="tiempo" placeholder="Introduce el tiempo" required />
      `;
      break;

    case 'aceleracion':
      camposHTML = `
        <label for="velocidad-inicial">Velocidad Inicial (m/s):</label>
        <input type="number" id="velocidad-inicial" placeholder="Introduce velocidad inicial" required />
        <label for="velocidad-final">Velocidad Final (m/s):</label>
        <input type="number" id="velocidad-final" placeholder="Introduce velocidad final" required />
        <label for="tiempo">Tiempo (s):</label>
        <input type="number" id="tiempo" placeholder="Introduce el tiempo" required />
      `;
      break;

    case 'fuerza':
      camposHTML = `
        <label for="masa">Masa (kg):</label>
        <input type="number" id="masa" placeholder="Introduce la masa" required />
        <label for="aceleracion">Aceleración (m/s²):</label>
        <input type="number" id="aceleracion" placeholder="Introduce la aceleración" required />
      `;
      break;

    case 'trabajo':
      camposHTML = `
        <label for="fuerza">Fuerza (N):</label>
        <input type="number" id="fuerza" placeholder="Introduce la fuerza" required />
        <label for="distancia">Distancia (m):</label>
        <input type="number" id="distancia" placeholder="Introduce la distancia" required />
        <label for="angulo">Ángulo (°):</label>
        <input type="number" id="angulo" placeholder="Introduce el ángulo" required />
      `;
      break;

    case 'cinetica':
      camposHTML = `
        <label for="masa">Masa (kg):</label>
        <input type="number" id="masa" placeholder="Introduce la masa" required />
        <label for="velocidad">Velocidad (m/s):</label>
        <input type="number" id="velocidad" placeholder="Introduce la velocidad" required />
      `;
      break;

    case 'potencial':
      camposHTML = `
        <label for="masa">Masa (kg):</label>
        <input type="number" id="masa" placeholder="Introduce la masa" required />
        <label for="gravedad">Gravedad (m/s²):</label>
        <input type="number" id="gravedad" placeholder="Introduce la gravedad (ej. 9.8)" required />
        <label for="altura">Altura (m):</label>
        <input type="number" id="altura" placeholder="Introduce la altura" required />
      `;
      break;

    case 'densidad':
      camposHTML = `
        <label for="masa">Masa (kg):</label>
        <input type="number" id="masa" placeholder="Introduce la masa" required />
        <label for="volumen">Volumen (m³):</label>
        <input type="number" id="volumen" placeholder="Introduce el volumen" required />
      `;
      break;

    case 'presion':
      camposHTML = `
        <label for="fuerza">Fuerza (N):</label>
        <input type="number" id="fuerza" placeholder="Introduce la fuerza" required />
        <label for="area">Área (m²):</label>
        <input type="number" id="area" placeholder="Introduce el área" required />
      `;
      break;

    case 'carga':
      camposHTML = `
        <label for="corriente">Corriente (A):</label>
        <input type="number" id="corriente" placeholder="Introduce la corriente" required />
        <label for="tiempo">Tiempo (s):</label>
        <input type="number" id="tiempo" placeholder="Introduce el tiempo" required />
      `;
      break;

    case 'ohm':
      camposHTML = `
        <label for="corriente">Corriente (A):</label>
        <input type="number" id="corriente" placeholder="Introduce la corriente" required />
        <label for="resistencia">Resistencia (Ω):</label>
        <input type="number" id="resistencia" placeholder="Introduce la resistencia" required />
      `;
      break;

    default:
      camposHTML = '';
  }

  document.getElementById('campos').innerHTML = camposHTML;
  document.getElementById('resultado').innerHTML = '';
}

// Función para calcular según selección
function calcular() {
  const calculo = document.getElementById('calculo').value;
  let resultado = '';
  let valido = true;

  switch (calculo) {
    case 'velocidad': {
      const d = parseFloat(document.getElementById('distancia').value);
      const t = parseFloat(document.getElementById('tiempo').value);
      if (isNaN(d) || isNaN(t) || t === 0) {
        valido = false;
      } else {
        resultado = d / t;
      }
      break;
    }
    case 'aceleracion': {
      const vi = parseFloat(document.getElementById('velocidad-inicial').value);
      const vf = parseFloat(document.getElementById('velocidad-final').value);
      const t = parseFloat(document.getElementById('tiempo').value);
      if (isNaN(vi) || isNaN(vf) || isNaN(t) || t === 0) {
        valido = false;
      } else {
        resultado = (vf - vi) / t;
      }
      break;
    }
    case 'fuerza': {
      const m = parseFloat(document.getElementById('masa').value);
      const a = parseFloat(document.getElementById('aceleracion').value);
      if (isNaN(m) || isNaN(a)) {
        valido = false;
      } else {
        resultado = m * a;
      }
      break;
    }
    case 'trabajo': {
      const F = parseFloat(document.getElementById('fuerza').value);
      const d = parseFloat(document.getElementById('distancia').value);
      const ang = parseFloat(document.getElementById('angulo').value);
      if (isNaN(F) || isNaN(d) || isNaN(ang)) {
        valido = false;
      } else {
        const rad = ang * Math.PI / 180;
        resultado = F * d * Math.cos(rad);
      }
      break;
    }
    case 'cinetica': {
      const m = parseFloat(document.getElementById('masa').value);
      const v = parseFloat(document.getElementById('velocidad').value);
      if (isNaN(m) || isNaN(v)) {
        valido = false;
      } else {
        resultado = 0.5 * m * Math.pow(v, 2);
      }
      break;
    }
    case 'potencial': {
      const m = parseFloat(document.getElementById('masa').value);
      const g = parseFloat(document.getElementById('gravedad').value);
      const h = parseFloat(document.getElementById('altura').value);
      if (isNaN(m) || isNaN(g) || isNaN(h)) {
        valido = false;
      } else {
        resultado = m * g * h;
      }
      break;
    }
    case 'densidad': {
      const m = parseFloat(document.getElementById('masa').value);
      const V = parseFloat(document.getElementById('volumen').value);
      if (isNaN(m) || isNaN(V) || V === 0) {
        valido = false;
      } else {
        resultado = m / V;
      }
      break;
    }
    case 'presion': {
      const F = parseFloat(document.getElementById('fuerza').value);
      const A = parseFloat(document.getElementById('area').value);
      if (isNaN(F) || isNaN(A) || A === 0) {
        valido = false;
      } else {
        resultado = F / A;
      }
      break;
    }
    case 'carga': {
      const I = parseFloat(document.getElementById('corriente').value);
      const t = parseFloat(document.getElementById('tiempo').value);
      if (isNaN(I) || isNaN(t)) {
        valido = false;
      } else {
        resultado = I * t;
      }
      break;
    }
    case 'ohm': {
      const I = parseFloat(document.getElementById('corriente').value);
      const R = parseFloat(document.getElementById('resistencia').value);
      if (isNaN(I) || isNaN(R)) {
        valido = false;
      } else {
        resultado = I * R;
      }
      break;
    }
    default:
      valido = false;
  }

  if (valido) {
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado.toFixed(2)}`;
    actualizarHistorial(calculo, resultado.toFixed(2));
  } else {
    document.getElementById('resultado').innerHTML = 'Por favor, rellena todos los campos correctamente.';
  }
}

// Limpiar inputs y resultado
function limpiar() {
  document.getElementById('campos').innerHTML = '';
  document.getElementById('resultado').innerHTML = '';
  document.getElementById('calculo').value = '';
}

// Función para guardar historial
function actualizarHistorial(calculo, resultado) {
  const lista = document.getElementById('historial-lista');
  const item = document.createElement('li');
  item.textContent = `${calculo.charAt(0).toUpperCase() + calculo.slice(1)} = ${resultado}`;
  lista.prepend(item);
}
