function Agendamento() {

  let clazz = {

    para: function(consulta) {

      let dias = 20;
      let umDiaEmMs =  1000 * 60 * 60 * 24;
      let diasEmMs = umDiaEmMs * dias;
      let novaData = new Date(consulta.getData().getTime() + diasEmMs);
      while (novaData.getDay() == 0 || novaData.getDay() == 6) {
        novaData = new Date(novaData.getTime() + umDiaEmMs);
      }
      
      let novaConsulta = new Consulta(consulta.getPaciente(), consulta.getProcedimentos(), consulta.isParticular(), consulta.isRetorno(), novaData);

      return novaConsulta;
    }

  };
  return clazz;
}