import Getcontact from "./index";
require("dotenv").config();

it("Getcontact checkNumber should get response", async () => {
  const getcontact = new Getcontact(process.env.TOKEN!, process.env.KEY!);
  // check kemenkes number
  const res = await getcontact.checkNumber("081110500567");
  console.dir(res, { depth: null });
  expect(res).toBeDefined();
});
