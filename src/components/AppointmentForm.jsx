
import React, { useState } from 'react';
import './AppointmentForm.css';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    fecha: '',
    hora: '',
    departamento: '',
    sintomas: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const departamentos = [
    'Consulta General',
    'Pediatría',
    'Ginecología',
    'Cardiología',
    'Neurología',
    'Traumatología'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos a un servidor
    console.log('Datos del formulario:', formData);
    setSubmitted(true);
    // Reiniciar el formulario
    setFormData({
      nombre: '',
      email: '',
      fecha: '',
      hora: '',
      departamento: '',
      sintomas: ''
    });
  };

  return (
    <section className="appointment-form" id="appointment">
      <h2>Reservar Turno</h2>
      {submitted && <p className="success-message">¡Tu turno ha sido reservado exitosamente!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fecha">Fecha del Turno</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hora">Hora del Turno</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="departamento">Departamento</label>
          <select
            id="departamento"
            name="departamento"
            value={formData.departamento}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un departamento</option>
            {departamentos.map(dep => (
              <option key={dep} value={dep}>{dep}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="sintomas">Síntomas / Motivo</label>
          <textarea
            id="sintomas"
            name="sintomas"
            value={formData.sintomas}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit">Reservar Turno</button>
      </form>
    </section>
  );
}

export default AppointmentForm;
