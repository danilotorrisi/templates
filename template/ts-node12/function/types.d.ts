export type FunctionCallback<T> = (error?: Error, result?: T) => void;

export interface FunctionContext<T> {
  status(code: number): FunctionContext<T>;
  headers(headers: {}): FunctionContext<T>;
  succeed(result: T): void;
  fail(error: Error): void;
}

export interface FunctionEvent<T = any> {
  body: T;
  headers: {};
  method: string;
  query?: {};
}

export type Handler<Input = any, Output = any> = (
  event: FunctionEvent<Input>,
  context: FunctionContext<Output>,
  callback: FunctionCallback<Output>
) => Promise<Output> | void;
