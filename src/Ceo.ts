import Staff from "./Staff";

export default class Ceo extends Staff {
  #expYear: number;
  #expRate: number;

  constructor(
    name: string,
    baseSalary: number,
    overtimeHour: number,
    overtimeRate: number,
    expYear: number,
    expRate: number
  ) {
    super(name, baseSalary, overtimeHour, overtimeRate);
    this.#expYear = expYear;
    this.#expRate = expRate;
  }

  getExpYear(): number {
    return this.#expYear;
  }
  setExpYear(expYear: number): void {
    this.#expYear = expYear;
  }
  getExpRate(): number {
    return this.#expRate;
  }
  setExpRate(expRate: number): void {
    this.#expRate = expRate;
  }
  getPayment(): number {
    const staffSalary = super.getPayment();
    return staffSalary + this.#expYear * this.#expRate;
  }
}
