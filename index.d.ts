// index.ts (antes index.d.ts)
import axios, { AxiosError } from 'axios';
import AppConstants from './lib/types/AppConstants';
export interface PagandoButtonPayloadDetails {
    type: string;
    title: string;
    price: string;
}

export interface PagandoButtonPayload {
    payload: Array<PagandoButtonPayloadDetails>;
    businessID: string;
}

export interface ErrorResponse {
    statusCode: number;
    errorCode: string;
    timestamp: string;
    path: string;
    errors: string[][];
}

export interface PagandoPromiseSuccessResponse {
    status: number;
    message: string;
    data: {
        paymentID: string;
        paymentURL: string;
    };
}

export class StaticPagandoInstance {
    private AppConstants;

    constructor(appConstantsOverride?: typeof AppConstants) {
        this.AppConstants = appConstantsOverride || AppConstants;
    }

    public async postPayment<T>(payload: PagandoButtonPayload): Promise<T | AxiosError> {
        try {
            const response = await axios.post<T>(`${this.AppConstants.BASE_BACKEND_URL}`, payload);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return error;
            } else {
                throw new Error('An unexpected error occurred');
            }
        }
    }
}
export default async function postPayment<T>(payload: PagandoButtonPayload): Promise<T | AxiosError> {
    try {
        const response = await axios.post<T>(`${this.AppConstants.BASE_BACKEND_URL}`, payload);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error;
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}
// Para soportar tanto CommonJS como ES Modules, se puede usar la siguiente sintaxis:
// const pagandoInstance = new StaticPagandoInstance();

// module.exports = pagandoInstance;

// Exportación compatible con ES Modules
// export default pagandoInstance;