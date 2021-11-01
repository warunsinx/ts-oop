import { Developer } from "./Developer";
import { Ceo } from "./Ceo";
import { Marketing } from "./Marketing";

const main = () => {
  const dev1 = new Developer("Korn", 40000, 10, 500, 12, 1000);
  const ceo1 = new Ceo("Warun", 100000, 2, 500, 5, 10000);
  const marketing1 = new Marketing("Momay", 25000, 12, 500, 2, 500);

  let totalPayment = 0;

  const staffs = [dev1, ceo1, marketing1];

  staffs.forEach((staff) => {
    const payment = staff.getPayment();
    console.log(staff.getName() + "'s Payment: " + payment);
    totalPayment += payment;
  });

  console.log("Total Payment: ", totalPayment);
};

main();
