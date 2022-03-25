export enum CommandType {
  Request = 1,
  Response = 2,
}

export interface CommandLine {
  command: string;
  type: CommandType;
  timeout: number;
}
