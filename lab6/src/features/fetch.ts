import {backendUri} from "./constants.ts";

export enum RequestMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

export function executeFetch(
    uri: string,
    method: RequestMethod,
    body: any = null,
): Promise<Response> {
    return fetch(backendUri + uri, {
        body: body === null ? null : JSON.stringify(body),
        headers: [["Content-Type", "application/json"]],
        method,
    });
}

export async function fetchGet<Result>(
    uri: string,
    defaultValue: Result
): Promise<Result> {
    const response = await executeFetch(uri, RequestMethod.GET);
    if (!response.ok) {
        console.error(`Couldn't fetch from ${uri}`);
        return defaultValue;
    }
    return await response.json() as Result
}
