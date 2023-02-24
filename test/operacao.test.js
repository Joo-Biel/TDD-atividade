const { describe, expect, it } = require('@jest/globals')
const calculadora = require('../src/operacoes.js')

describe('Teste da calculadora', () => {

    it('Operação de soma', () => {
        let resultado = calculadora.sum(1, 2);
        expect(resultado).toEqual(3);

        resultado = calculadora.sum(-1, 2);
        expect(resultado).toEqual(1);

        resultado = () => calculadora.sum("a", 2);
        expect(resultado).toThrow("Não é um numero");

        resultado = () => calculadora.sum(2, "a");
        expect(resultado).toThrow("Não é um numero");

        resultado = calculadora.sum(2, -4);
        expect(resultado).toEqual(-2);
    });

    ('Operação de subtração', () => {
        let resultado = calculadora.sub(2, 1);
        expect(resultado).toEqual(1);

        resultado = calculadora.sub("a", 2);
        expect(resultado).toThrow("Não é um numero");

        resultado = calculadora.sub(-1, "b");
        expect(resultado).toThrow("Não é um numero");

        resultado = calculadora.sub(-1, -2);
        expect(resultado).toEqual(-3);

        resultado = calculadora.sub(-1, 5);
        expect(resultado).toEqual(4);

    })
    it('Operação de divisão', () => {
        let resultado = calculadora.div(4, 2);
        expect(resultado).toEqual(2);

        resultado = calculadora.div(3, 2);
        expect(resultado).toEqual(1.5);

        resultado = calculadora.div(1, 2);
        expect(resultado).toEqual(0.5);

        resultado = calculadora.div(4, 2);
        expect(resultado).toEqual(2);

        resultado = calculadora.div(1, 2);
        expect(resultado).toEqual(0.5);

        resultado = calculadora.div(4, 8);
        expect(resultado).toEqual(0.5);

        resultado = calculadora.div(3, 2);
        expect(resultado).toEqual(1.5);

        resultado = calculadora.div(49, 7);
        expect(resultado).toEqual(7);

        resultado = calculadora.div(56, 8);
        expect(resultado).toEqual(7);
    })

    it('Operação de multiplicação', () => {
        resultado = calculadora.mult(7, 8);
        expect(resultado).toEqual(56);
        resultado = calculadora.mult(7, 7);
        expect(resultado).toEqual(49);
        resultado = calculadora.mult(0.5, 2);
        expect(resultado).toEqual(1);
        resultado = calculadora.mult(15, 4);
        expect(resultado).toEqual(60);
        resultado = calculadora.mult(0.75, 4);
        expect(resultado).toEqual(3);
        resultado = calculadora.mult(4, 2);
        expect(resultado).toEqual(8);
        resultado = calculadora.mult(7, 9);
        expect(resultado).toEqual(63);
        resultado = calculadora.mult(70, 80);
        expect(resultado).toEqual(5600);
    })

    it('Operação de potência', () => {
        resultado = calculadora.pot(2, 2);
        expect(resultado).toEqual(4);

        resultado = calculadora.pot(2, 5);
        expect(resultado).toEqual(32);

        resultado = calculadora.pot(2, 10);
        expect(resultado).toEqual(1024);

        resultado = calculadora.pot(2, 1);
        expect(resultado).toEqual(2);

        resultado = calculadora.pot(2, 3);
        expect(resultado).toEqual(8);

        resultado = calculadora.pot(5, 3);
        expect(resultado).toEqual(125);

        resultado = calculadora.pot(6, 7);
        expect(resultado).toEqual(279936);

    })

    it('Operação de Raiz', () => {
        resultado = calculadora.raiz(9);
        expect(resultado).toEqual(3);
        resultado = calculadora.raiz(64);
        expect(resultado).toEqual(8);
        resultado = calculadora.raiz(4761);
        expect(resultado).toEqual(69);
        resultado = calculadora.raiz(169);
        expect(resultado).toEqual(13);
        resultado = calculadora.raiz(2500);
        expect(resultado).toEqual(50);
        resultado = calculadora.raiz(25);
        expect(resultado).toEqual(5);
        resultado = calculadora.raiz(4);
        expect(resultado).toEqual(2);
        resultado = calculadora.raiz(121);
        expect(resultado).toEqual(11);
        resultado = calculadora.raiz(100);
        expect(resultado).toEqual(10);
    })
})