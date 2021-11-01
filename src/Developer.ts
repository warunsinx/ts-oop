import Staff from "./Staff";

export default class Developer extends Staff {
  #codingHour: number;
  #codingRate: number;

  constructor(
    name: string,
    baseSalary: number,
    overtimeHour: number,
    overtimeRate: number,
    codingHour: number,
    codingRate: number
  ) {
    super(name, baseSalary, overtimeHour, overtimeRate);
    this.#codingHour = codingHour;
    this.#codingRate = codingRate;
  }

  getCodingHour(): number {
    return this.#codingHour;
  }
  setCodingHour(codingHour: number): void {
    this.#codingHour = codingHour;
  }
  getCodingRate(): number {
    return this.#codingRate;
  }
  setCodingRate(codingRate: number): void {
    this.#codingRate = codingRate;
  }
  getPayment(): number {
    const staffSalary = super.getPayment();
    return staffSalary + this.#codingHour * this.#codingRate;
  }
}
