export function validate<T>(schema: T, input: any, name?: string): T;
export function ValidateRecursive<T>(schema: T, input: any, name: string): T;

export * from './extensions';
export * from './validators';
