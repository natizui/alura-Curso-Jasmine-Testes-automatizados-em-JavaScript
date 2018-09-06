describe("Consulta", function() {

  let ana;

  beforeEach(function() {
    ana = new PacienteBuilder().constroi();
  });

  describe("Retornos", function() {

    it("não deve cobrar pelo retorno", function() {
      let consulta = new Consulta(ana, [], true, true);
  
      expect(consulta.preco()).toEqual(0);
    });

  });

  describe("Consultas por convênio", function() {

    it("cobrar 25 de cada procedimento comum", function() {
      let consulta = new Consulta(ana, ["proc1", "proc2"], false, false);
  
      expect(consulta.preco()).toEqual(50);
    });

    it("deve cobrar preco especifico dependendo do procedimento", function() {
      let consulta = new Consulta(ana, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false);

      expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
  });

  });

  describe("Consultas particulares", function() {

    it("cobrar dobro de particular", function() {
      let consulta = new Consulta(ana, ["proc1", "proc2"], true, false);
  
      expect(consulta.preco()).toEqual(50*2);
    });
  
    it("cobrar dobro de particular para mesmos procedimentos especiais", function() {
      let consulta = new Consulta(ana, ["gesso"], true, false);
  
      expect(consulta.preco()).toEqual(32*2);
    });

  });

})