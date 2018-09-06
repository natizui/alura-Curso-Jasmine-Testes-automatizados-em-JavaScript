describe("Agendamento", function() {
   
  let agenda;

  beforeEach(function() {
    agenda = new Agendamento();
    ana = new PacienteBuilder().constroi();
  });

  it("deve agendar para 20 dias depois", function() {
    let consulta = new Consulta(ana, [], false, false, new Date(2018, 8, 6));
    let novaConsulta = agenda.para(consulta);

    expect(novaConsulta.getData().toString()).toEqual(new Date(2018, 8, 26).toString());
  });

  describe("deve pular fim de semana", function() {

    it("se cairia no domingo", function() {
      let consulta = new Consulta(ana, [], false, false, new Date(2018, 8, 3));
      let novaConsulta = agenda.para(consulta);
  
      expect(novaConsulta.getData().toString()).toEqual(new Date(2018, 8, 24).toString());
    });

    it("se cairia no sábado", function() {
      let consulta = new Consulta(ana, [], false, false, new Date(2018, 8, 2));
      let novaConsulta = agenda.para(consulta);
  
      expect(novaConsulta.getData().toString()).toEqual(new Date(2018, 8, 24).toString());
    });


  });
})