import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { useState, useEffect } from "react";
const BookingForm = () => {
  const initialValues = { firstname: "", lastname: "", email: "",celular:"",origem:"",destino:"",data:"",mensagem:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  return (

    <div>
    {Object.keys(formErrors).length === 0 && isSubmit ? (
      <div className="ui message success"style={{color:"green"}} >Enviado com Sucesso</div>
    ) : (
      <pre></pre>
    )}
    
    
    <Form onSubmit={handleSubmit} >
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input value={formValues.firstname} onChange={handleChange} name="firstname" type="text" placeholder="Primeiro Nome" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input value={formValues.lastname} onChange={handleChange} name="lastname"  type="text" placeholder="Ultimo Nome" required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input value={formValues.email} onChange={handleChange} name="email" type="email" placeholder="Email"  required/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input value={formValues.celular} onChange={handleChange} name="celular" type="number" placeholder="Celular" required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input value={formValues.origem} onChange={handleChange} name="origem" type="text" placeholder="Origem"  required/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input value={formValues.destino} onChange={handleChange} name="destino" type="text" placeholder="Destino"  required/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Pessoa</option>
          <option value="2 person">2 Pessoa</option>
          <option value="3 person">3 Pessoa</option>
          <option value="4 person">4 Pessoa</option>
          <option value="5+ person">5+ Pessoa</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">1 lugares</option>
          <option value="2 luggage">2 lugares</option>
          <option value="3 luggage">3 lugares</option>
          <option value="4 luggage">4 lugares</option>
          <option value="5+ luggage">5+ lugares</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input value={formValues.data} onChange={handleChange} name="data" type="date" placeholder="Data da Viagem"  required/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Hora da Viagem"
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea 
        value={formValues.mensagem} onChange={handleChange} name="mensagem"
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Mensagem"
          required
        ></textarea>
      </FormGroup>
      <div className="payment text-end mt-5">
        <button>Enviar</button>
      </div>
    </Form>
    </div>
  );
};

export default BookingForm;