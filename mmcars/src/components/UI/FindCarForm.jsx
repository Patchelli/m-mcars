import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Endereço" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Destino" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Data da viagem" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Hora da viagem"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Carro - AC</option>
            <option value="non-ac">Carro - sem AC</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Buscar Carro</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;