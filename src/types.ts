export type GenericResponse<T> = {
    resultCode: string;
    resultDescription: string;
    resultObj: T;
    executionTime: number;
};
