import { IDonationRecord } from "../models/donationRecord";

export const PaymentApi = {
    pay(payment: IDonationRecord): Promise<any> {
        return Promise.resolve('Success')
    },
};
