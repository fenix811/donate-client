import { IDonationRecord } from "../models/donationRecord";

export const DonateApi = {
    addProduct(product: IDonationRecord): Promise<any> {
        return fetch(`api/donate/adddonate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(product)
        })
    },
};
