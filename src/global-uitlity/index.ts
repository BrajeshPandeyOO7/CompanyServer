import { APIReturnType } from "./interfaces";

export const sendResult = (ok: boolean,data: unknown) => {
    const result: APIReturnType = {
        ok,
        data
    };
    return result;
}
