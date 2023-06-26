import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1+4 = 5',
  inject ([CalculadoraService], (serivce: CalculadoraService) =>{
    let soma = service.calcular(1,4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  })
  );

  it('deve garantir que 1-4 = -3',
  inject ([CalculadoraService], (serivce: CalculadoraService) =>{
    let subtracao = service.calcular(1,4, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(-3);
  })
  );

  it('deve garantir que 1/4 = 0.25',
  inject ([CalculadoraService], (serivce: CalculadoraService) =>{
    let divisao = service.calcular(1,4, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(0.25);
  })
  );

  it('deve garantir que 1*4 = 4',
  inject ([CalculadoraService], (serivce: CalculadoraService) =>{
    let multiplicacao = service.calcular(1,4, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(4);
  })
  );

  it('deve retornar 0 para operação inválida',
  inject ([CalculadoraService], (serivce: CalculadoraService) =>{
    let opercaoInvalida = service.calcular(1,4,'%'); // % significa que o valor é default
    expect(opercaoInvalida).toEqual(0);
  })
  );


  




});
