import { Handler } from "./types";

interface Input {}

interface Output {
  status: string;
}

export const handle: Handler<Input, Output> = (event, context) => {
  const input = event.body ?? {};
  console.log("Input is : ", input);

  context.status(200).succeed({
    status: `Hello world my darling ${JSON.stringify(input)}`
  });
};
