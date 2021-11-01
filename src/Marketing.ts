import { Staff } from "./Staff";

export class Marketing extends Staff {
  #extraLanguage: number;
  #extraLanguageRate: number;

  constructor(
    name: string,
    baseSalary: number,
    overtimeHour: number,
    overtimeRate: number,
    extraLanguage: number,
    extraLanguageRate: number
  ) {
    super(name, baseSalary, overtimeHour, overtimeRate);
    this.#extraLanguage = extraLanguage;
    this.#extraLanguageRate = extraLanguageRate;
  }

  getExtraLanguage(): number {
    return this.#extraLanguage;
  }
  setExtraLanguage(extraLanguage: number): void {
    this.#extraLanguage = extraLanguage;
  }
  getLanguageRate(): number {
    return this.#extraLanguageRate;
  }
  setLanguageRate(extraLanguageRate: number): void {
    this.#extraLanguageRate = extraLanguageRate;
  }
  getPayment(): number {
    const staffSalary = super.getPayment();
    return staffSalary + this.#extraLanguage * this.#extraLanguageRate;
  }
}
