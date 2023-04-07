$(document).ready(function () {
  $("#cpf").mask("000.000.000-00", {
    placeholder: "000.000.000-00",
  });
  $("#cep").mask("00000-000", {
    placeholder: "00000-000",
  });
  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(00) 00000-0000",
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
        minlength: 2,
      },
      telefone: {
        required: true,
        minlength: 11,
      },
      email: {
        required: true,
        email: true,
      },
      cpf: {
        required: true,
        minlength: 14,
      },
      endereco: {
        required: true,
        minlength: 10,
      },
      cep: {
        required: true,
        minlength: 8,
      },
    },
    messages: {
      nome: {
        required: "Por favor, digite seu nome",
        minlength: "O seu nome deve ter no mínimo 2 caracteres",
      },
      telefone: {
        required: "Por favor, digite seu telefone",
        minlength: "O seu telefone deve ter no mínimo 14 caracteres",
      },
      email: {
        required: "Por favor, digite seu email",
        email: "Por favor, digite um email válido",
      },
      cpf: {
        required: "Por favor, digite seu CPF",
        minlength: "O seu CPF deve ter no mínimo 11 caracteres",
      },
      endereco: {
        required: "Por favor, digite seu endereço",
        minlength: "O seu endereço deve ter no mínimo 10 caracteres",
      },
      cep: {
        required: "Por favor, digite seu CEP",
        minlength: "O seu CEP deve ter no mínimo 8 caracteres",
      },
    },
    submitHandler: function (form) {
      alert("Formulário enviado com sucesso!");
      form.submit();
    },
  });

  $("#formulario").submit(function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    if ($(this).valid()) {
      // Verifica se o formulário é válido
      alert("Formulário enviado com sucesso!");
      this.submit(); // Envia o formulário
    }
  });
});
