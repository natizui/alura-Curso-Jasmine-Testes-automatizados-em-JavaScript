## Aula01
- O Jasmine nos ajuda a executar e validar os testes que escrevemos. Ele não é uma ferramenta mágica que escreve os testes, ou coisa assim.

- O _expect_ é o método auxiliar que nos ajuda a fazer as asserções necessárias.

- _SpecRunner.html_: importa as bibliotecas do Jasmine, que estão em /lib. Em seguida, ele importa os javascripts, que estão em _/src_. Por fim, ele importa as _Specs_, que são os nossos testes.

- _describe_: serve para descrever o que vamos testar.

- _funcção it_: nela passamos o "nome do teste", ou seja, o quê aquele teste faz, e em seguida uma função com o teste.

- _método expect_: serve para dizermos quais são as nossas expectativas com o resultado final. 

## Aula02
- **classes de equivalência** são cenários que exercitam partes diferentes do código. Idealmente devemos ter apenas um único teste por classe de equivalência. Afinal, se dois testes exercitam o mesmo trecho de código, então ambos passarão e falharão no mesmo momento, tornando um deles desnecessário.

- O nome dos nossos testes devem deixar claro o que aquele teste faz. 

## Aula03
- _beforeEach_: método executado automaticamente pelo framework antes de cada teste. 

- _afterEach_: método executado após cada teste.Em testes de unidade, ele é menos útil.Em testes de integração, podemos usá-lo para liberar algum possível recurso que alocamos para determinado teste.

- Podemos separar melhor os testes para facilitar a legibilidade. Podemos agrupá-los. Para isso, usamos _describe_. Podemos ter describes dentro de describes, para facilitar a legibilidade. 

- **Test Data Builders**: construtores de dados para testes. Esse é um padrão muito comum, usado em testes escritos em qualquer linguagem de programação, para facilitar a criação dos cenários dos testes. Criar _Builders_ para objetos complicados de serem criados ou que sofram muitas mudanças para facilitar a sua criação.

## Aula04
- O que fazer com códigos que misturam regras de negócio com interface?
  - Devemos separar as responsabilidades ao máximo. Regras de negócio de um lado, manipulação de interface em outro. 

- **Teste de unidade**: é aquele que testa uma unidade (uma classe, por exemplo) isolado do resto. Esse tipo de teste não se preocupa com a integração daquela unidade com o resto. É rápido, mas não tão real.

- **Teste de sistema**: é aquele que testa o sistema como uma caixa preta. Ele não conhece detalhes de implementação, e testa o sistema totalmente integrado. É um teste mais demorado, mas muito parecido com o mundo real.

## Aula05
- **Test-Driven Development(TDD)**: ciclo de desenvolvimento onde escrevemos um teste antes do código.
  1. escrevemos um teste
  2. o rodamos e o vimos falhar
  3. escrevemos o código mais simples para passar o teste
  4. rodamos-o novamente
  5. dessa vez ele passou
  6. refatoramos nosso código para que ele fique melhor e mais claro. 

- Vantagens:
  - Se sempre escrevermos o teste antes, garantimos que todo nosso código já "nasce" testado;

  - Temos segurança para refatorar nosso código, afinal sempre refatoraremos com uma bateria de testes que garante que não quebraremos o comportamento já existente;

  - Como o teste é a primeira classe que usa o seu código, você naturalmente tende a escrever código mais fácil de ser usado e, por consequência, mais fácil de ser mantido.
