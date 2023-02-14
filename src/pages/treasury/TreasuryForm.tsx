import React, { useState } from 'react';
import styled from 'styled-components';
import { getEffectiveTypeParameterDeclarations } from 'typescript';
import Form from '../../components/form/Form';

const Wrapper = styled.div``;

const TreasuryForm = () => {
  const [formProperties, setFormProperties] = useState({
    date: '',
    transactionType: '',
    test: '',
    paymentType: '',
    reason: '',
    amount: '',
  });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setFormProperties({
      ...formProperties,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    console.log('Finally!!');
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Form.Input
          name="date"
          type="text"
          value={formProperties.date}
          label="Fecha"
          placeholder="Fecha"
          onChange={onChange}
          required={true}
          errorMessage="Debes ingresar este campo"
        />
        <Form.Input
          name="transactionType"
          type="text"
          value={formProperties.transactionType}
          label="Tipo de Movimiento"
          placeholder="Tipo de Movimiento"
          onChange={onChange}
          errorMessage="Este campo debe ser incluido"
          required={true}
        />
        <Form.Input
          name="paymentType"
          type="text"
          value={formProperties.paymentType}
          label="Tipo de Pago"
          placeholder="Tipo de Pago"
          onChange={onChange}
        />
        <Form.Input
          name="reason"
          type="text"
          value={formProperties.reason}
          label="Motivo"
          placeholder="Motivo"
          onChange={onChange}
        />
        <Form.Input
          name="amount"
          type="number"
          value={formProperties.amount}
          label="Monto"
          placeholder="Monto"
          onChange={onChange}
        />
        <button>SUBMIT</button>
      </Form>
    </Wrapper>
  );
};

export default TreasuryForm;
