import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger-service";

describe('CalculatorService', () => {
  let mockedLoggerService: any;
  let cs: CalculatorService;

  beforeEach(() => {
    mockedLoggerService = jasmine.createSpyObj('LoggerService', ['log'])
    cs = new CalculatorService(mockedLoggerService);
  })

  it('should add two numbers', () => {
    let res = cs.add(2, 3);
    expect(res).toBe(5);
    expect(mockedLoggerService.log).toHaveBeenCalledTimes(1)
  });
  it('should subtract numbers', () => {
    let res = cs.subtract(8, 4);
    expect(res).toBe(4);
    expect(mockedLoggerService.log).toHaveBeenCalledTimes(1)
  })
})

