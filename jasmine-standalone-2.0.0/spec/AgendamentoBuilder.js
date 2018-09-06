function AgendamentoBuilder() {

  var clazz = {
      comNome : function(valor) {
          nome=valor;
          return this;
      },

      comIdade : function(valor) {
          idade=valor;
          return this;
      },

      comPeso : function(valor) {
          peso=valor;
          return this;
      },
      comAltura : function(valor) {
          altura = valor;
          return this;
      },
      constroi : function() {
          return new Paciente(nome, idade, peso, altura);
      }

  };

  return clazz;
}