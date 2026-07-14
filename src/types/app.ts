export interface ControllerResponse<T> {
    success: boolean;
    code: number;
    res?: T;
    error?: {
        msg: string;
    };
}