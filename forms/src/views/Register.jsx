import React, { useState } from "react";
import Input from "../components/Input";
import Required from "../components/Required";
import Select from "../components/Select";

const Register = (props) => {
  const [valid, setValid] = useState(false);
  const [validations, setValidations] = useState([
    { input: "username", valid: false },
    { input: "email", valid: false },
    { input: "data", valid: false },
  ]);

  const selectOptions = [
    { option: "Porto", value: "Porto" },
    { option: "Braga", value: "Braga" },
    { option: "Aveiro", value: "Aveiro" },
    { option: "Lisboa", value: "Lisboa" },
  ];

  function checkForm() {
    setValid(
      validations
        .map((inp) => inp.valid)
        .reduce((resultado, valido) => resultado && valido)
    );
  }

  function valRequired(el, state) {
    validations.forEach((inp) => {
      if (inp.input === el) inp.valid = state;
    });
    checkForm();
  }

  function onSubmit(e) {
    e.preventDefault();
    const addUser = {
      nickname: e.target.nickname.value,
      username: e.target.username.value,
      email: e.target.email.value,
      data: e.target.data.value,
      distrito: e.target.distrito.value,
    };
    console.log(addUser);
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Input id="nickname" name="nickname" label="Nickname" />
      <Required
        id="username"
        name="username"
        label="Username"
        onRequired={valRequired}
        pattern={/^[a-z0-9]{3,12}$/}
        error="Tem de indicar username (3 a 12 caracteres)"
      />
      <Required
        id="email"
        name="email"
        label="E-mail"
        onRequired={valRequired}
        pattern={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
        error="Tem de indicar um e-mail válido"
      />
      <Required
        type="date"
        id="data"
        name="data"
        label="Data de Nascimento"
        onRequired={valRequired}
        pattern={/^(\d{4})-(\d{1,2})-(\d{1,2})$/}
        error="Tem de indicar uma data válida!"
      />
      <Select
        id="distrito"
        name="distrito"
        label="Distrito"
        options={selectOptions}
      ></Select>
      <button type="submit" className="btn btn-primary" disabled={!valid}>
        Register
      </button>
    </form>
  );
};

export default Register;
