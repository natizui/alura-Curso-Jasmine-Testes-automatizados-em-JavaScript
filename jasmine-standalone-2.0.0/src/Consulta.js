function Consulta(paciente, procedimentos, particular, retorno, data) {

  let clazz = {
      preco : function() {
          if(retorno) return 0;

          let precoFinal = 0;

          procedimentos.forEach(function(procedimento) {
              if("raio-x" == procedimento) precoFinal += 55;
              else if("gesso" == procedimento) precoFinal += 32;
              else precoFinal += 25;
          });

          if(particular) precoFinal *= 2;

          return precoFinal;
      },
      getPaciente : function() { return paciente; },
      getProcedimentos : function() { return procedimentos; },
      isParticular : function() { return particular; },
      isRetorno : function() { return retorno; },
      getData : function() { return data; }
  };

  return clazz;
};