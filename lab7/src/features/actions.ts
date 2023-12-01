import {executeFetch, RequestMethod} from "./fetch.ts";
import {ReviewDto} from "../components/product/ReviewForm.tsx";

export const createReviewAction = async (request: any) => {
    const reviewDto = await request.formData() as ReviewDto;
    const response = await executeFetch("/api/product/review/create", RequestMethod.POST, reviewDto);
    if (!response.ok) {
        throw Error(`Error while creating review with reviewDto=${reviewDto}`)
    }
    return response.json();
};
