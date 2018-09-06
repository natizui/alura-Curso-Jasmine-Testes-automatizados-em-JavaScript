describe("Paciente", function() {

  let ana;

  beforeEach(function() {
    ana = new PacienteBuilder().constroi();
  });

  it("deve calcular o imc", function() {
    expect(ana.imc()).toEqual(52 / (1.60*1.60));
  });

  it("deve calcular batimentos cardiacos", function() {
    expect(ana.batimentos()).toEqual(1177344000);
  });
})