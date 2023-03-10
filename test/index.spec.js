import { describe, expect, test, it } from '@jest/globals';
import { soma, subtracao, multiplicacao, divisao } from '../index.js'


describe('Testes de calculadora com valores inteiro ', () => {
    it('Deve retornar a soma de dois valores inteiro', () => {
        const esperado = 30;
        const retornado = soma(10, 20);
        expect(retornado).toBe(esperado);
    });
    it('Deve retornar a subtração de dois valores inteiro', () => {
        const esperado = 9;
        const retornado = subtracao(10, 1);
        expect(retornado).toBe(esperado);
    })
    it('Deve retornar a multiplicação de dois valores inteiro', () => {
        const esperado = 18;
        const retornado = multiplicacao(9, 2);
        expect(retornado).toBe(esperado);
    })
    it('Deve retornar a divisão de dois valores inteiro', () => {
        const esperado = 5;
        const retornado = divisao(10, 2);
        expect(retornado).toBe(esperado);
    })


});
describe('Testes de calculadora com valores flutuante ', () => {
    it('Deve retornar a soma de dois valores flutuante', () => {
        const esperado = 26;
        const retornado = soma(15.5, 10.5);
        expect(retornado).toBeCloseTo(esperado);
    });
    it('Deve retornar a subtração de dois valores flutuante', () => {
        const esperado = 9.0;
        const retornado = subtracao(10.0, 1.0);
        expect(retornado).toBeCloseTo(esperado);
    })
    it('Deve retornar a multiplicação de dois valores flutuante', () => {
        const esperado = 18;
        const retornado = multiplicacao(9, 2);
        expect(retornado).toBeCloseTo(esperado);
    })
    it('Deve retornar a divisão de dois valores flutuante', () => {
        const esperado = 5;
        const retornado = divisao(10, 2);
        expect(retornado).toBeCloseTo(esperado);
    })


});
describe('Testes de calculadora com valores negativos ', () => {
    it('Deve retornar a soma de dois valores negativos', () => {
        const esperado = -25;
        const retornado = soma(-10, -15);
        expect(retornado).toBe(esperado);
    });


});

