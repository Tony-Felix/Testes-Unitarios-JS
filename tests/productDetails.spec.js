const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  });

  it('Testa se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Testa se o retorno da função é um array.', () => {
    const retorno = productDetails('Alcool gel', 'Máscara')
    expect(Array.isArray(retorno)).toBe(true);
  });

  it('Testa se o array retornado pela função contém dois itens dentro.', () => {
    const retorno = productDetails('Alcool gel', 'Máscara').length;
    expect(retorno).toBe(2);
  });

  it('Testa se os dois itens dentro do array retornado pela função são objetos.', () => {
    const testObjeto = productDetails('Alcool gel', 'Máscara');
    expect(typeof testObjeto[0] && typeof testObjeto[1]).toBe('object');
  });

  it('Testa se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const testObjeto = productDetails('Alcool gel', 'Máscara');
    expect(testObjeto[0] !== testObjeto[1]).toBe(true);
  });

  it('Testa se os dois productIds terminam com 123.', () => {
    const idProduto = productDetails('Alcool gel', 'Máscara');
    const objeto1 = idProduto[0].details.productId
    const objeto2 = idProduto[1].details.productId
    expect(objeto1.endsWith('123')).toBe(true);
    expect(objeto2.endsWith('123')).toBe(true);
  });
});
