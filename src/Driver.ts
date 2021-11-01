import { PaymentInterface } from "./PaymentInterface";

export class Driver implements PaymentInterface {
  #dayCount: number;
  #dayRate: number;

  constructor(dayCount: number, dayRate: number) {
    this.#dayCount = dayCount;
    this.#dayRate = dayRate;
  }

  getDayCount(): number {
    return this.#dayCount;
  }
  setDayCount(dayCount: number): void {
    this.#dayCount = dayCount;
  }
  getDayRate(): number {
    return this.#dayRate;
  }
  setDayRate(dayRate: number): void {
    this.#dayRate = dayRate;
  }
  getPayment(): number {
    return this.#dayRate * this.#dayCount;
  }
}
