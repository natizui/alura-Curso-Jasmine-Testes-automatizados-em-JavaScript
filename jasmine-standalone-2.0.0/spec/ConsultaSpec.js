describe("Consulta", function() {

  it("não deve cobrar pelo retorno", function() {
    let ana = new Paciente("Ana", 28, 50, 1.60);
    let consulta = new Consulta(ana, [], true, true);

    expect(consulta.preco()).toEqual(0);
  });

  it("cobrar 25 de cada procedimento comum", function() {
    let ana = new Paciente("Ana", 28, 50, 1.60);
    let consulta = new Consulta(ana, ["proc1", "proc2"], false, false);

    expect(consulta.preco()).toEqual(50);
  });

  it("cobrar dobro de particular", function() {
    let ana = new Paciente("Ana", 28, 50, 1.60);
    let consulta = new Consulta(ana, ["proc1", "proc2"], true, false);

    expect(consulta.preco()).toEqual(50*2);
  });

  it("cobrar dobro de particular para mesmos procedimentos especiais", function() {
    let ana = new Paciente("Ana", 28, 50, 1.60);
    let consulta = new Consulta(ana, ["gesso"], true, false);

    expect(consulta.preco()).toEqual(32*2);
  });

})