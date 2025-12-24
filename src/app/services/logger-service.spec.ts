import { LoggerService } from "./logger-service"

describe('LoggerService', () => {
  it('should not have any messages at starting', () => {
    //arrange
    let loggerService = new LoggerService();

    //act
    let count = loggerService.messages.length;

    //assert
    expect(count).toBe(0)

  })
})