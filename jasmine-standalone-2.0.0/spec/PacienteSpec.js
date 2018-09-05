describe("Paciente", function() {

  it("deve calcular o imc", function() {
    let ana = new Paciente("Ana", 28, 50, 1.60);

    expect(ana.imc()).toEqual(50 / (1.60*1.60));
  });

  it("deve calcular batimentos cardiacos", function() {
    let ana = new Paciente("Ana", 28, 50, 1.60);

    expect(ana.batimentos()).toEqual(1177344000);
  });
})