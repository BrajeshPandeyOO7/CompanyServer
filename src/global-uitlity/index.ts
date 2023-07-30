import { APIResponse } from "./interfaces";

export const sendResult = (ok: boolean,data: unknown) => {
    const result: APIResponse = {
        ok,
        data
    };
    return result;
}
