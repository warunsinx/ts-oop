import { PaymentInterface } from "./PaymentInterface";

export class Cleaner implements PaymentInterface {
  #tripCount: number;
  #tripRate: number;

  constructor(tripCount: number, tripRate: number) {
    this.#tripCount = tripCount;
    this.#tripRate = tripRate;
  }

  getTripCount(): number {
    return this.#tripCount;
  }
  setTripCount(tripCount: number): void {
    this.#tripCount = tripCount;
  }
  getTripRate(): number {
    return this.#tripRate;
  }
  setTripRate(tripRate: number): void {
    this.#tripRate = tripRate;
  }
  getPayment(): number {
    return this.#tripRate * this.#tripCount;
  }
}
