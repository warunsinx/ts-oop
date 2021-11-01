import PaymentInterface from "./PaymentInterface";

export default class Staff implements PaymentInterface {
  #name: string;
  #baseSalary: number;
  #overtimeHour: number;
  #overtimeRate: number;

  constructor(
    name: string,
    baseSalary: number,
    overtimeHour: number,
    overtimeRate: number
  ) {
    this.#name = name;
    this.#baseSalary = baseSalary;
    this.#overtimeHour = overtimeHour;
    this.#overtimeRate = overtimeRate;
  }

  getName(): string {
    return this.#name;
  }
  setName(name: string): void {
    this.#name = name;
  }
  baseSalary(): number {
    return this.#baseSalary;
  }
  setBaseSalary(baseSalary: number): void {
    this.#baseSalary = baseSalary;
  }
  overtimeHour(): number {
    return this.#overtimeHour;
  }
  setOvertimeHour(overtimeHour: number): void {
    this.#overtimeHour = overtimeHour;
  }
  overtimeRate(): number {
    return this.#overtimeRate;
  }
  setOvertimeRate(overtimeRate: number): void {
    this.#overtimeRate = overtimeRate;
  }
  getPayment(): number {
    return this.#baseSalary + this.#overtimeHour * this.#overtimeRate;
  }
}
