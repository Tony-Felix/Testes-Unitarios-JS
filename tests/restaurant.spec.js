const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
  });

  it('verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu', () => {
    expect(createMenu({ food: {}, drinks: {} })).toHaveProperty('fetchMenu');
  });

  it('verificando se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função.', () => {
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu).toBeInstanceOf(Function);
  });

  it('verifica se o objeto retornado pela função createMenu retorna um objeto com as chaves food e drinks', () => {
    const objeto = createMenu({ food: {}, drinks: {} }).fetchMenu();
    expect(objeto).toHaveProperty('drinks');
    expect(objeto).toHaveProperty('food');
  });

  it('Escreva um teste que verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu', () => {
    const recupMenu = createMenu({ food: {}, drinks: {} }).fetchMenu();
    expect(recupMenu).toEqual({ food: {}, drinks: {} });
  });

  it('verifica se a propriedade consumption do objeto retornado pela função createMenu, após a criação do menu, retorna um array vazio.', () => {
    const retornado = createMenu({ food: {}, drinks: {} }).consumption;
    expect(retornado).toEqual([]);
  }); 

  it('caso a string passada por parâmetro para order não conste no objeto passado como parâmetro para createMenu (nem em food ou drinks), o retorno da chave order deve ser: Item indisponível', () => {
    const retornado = createMenu({ food: {}, drinks: {} });
    expect(retornado.order('picanha')).toEqual('Item indisponível');
    expect(retornado.consumption).toEqual([]);
  });

  it('testa se a string passada para order esta no objeto, e verifica se consumption foi alterado', () => {
    const retornado = createMenu({food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90}});
      retornado.order('coxinha')
    expect(retornado.consumption).toEqual(['coxinha']);
  });

  it('verifica se, ao adicionar três pedidos em sequência, o array consumption contém os itens pedidos.', () => {
    const retornado = createMenu({food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90}});
      retornado.order('coxinha')
      retornado.order('agua')
      retornado.order('sanduiche')
    expect(retornado.consumption).toEqual(['coxinha', 'agua', 'sanduiche']);
  });

  it('Escreva um teste que verifica se a função order aceita que pedidos repetidos sejam acrescidos a consumption', () => {
    const retornado = createMenu({food: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90}});
      retornado.order('agua')
      retornado.order('agua')
    expect(retornado.consumption).toEqual(['agua', 'agua']);
  })

  it('Escreva um teste que verifica que, ao chamar a função pay()  deve retornar a soma dos preços de tudo que foi pedido, acrecido de 10%.', () => {
    const retornado = createMenu({food: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90}});
      retornado.order('coxinha')
      retornado.order('agua')
      expect(retornado.pay()).toBe(8.58);
  });
});
