import { authInstance } from "./auth-api"; 

export const requestContacts = async () => {
     const response = await authInstance.get('/contacts');
     return response.data;
};

export const requestAddContact = async (body) => {
    const response = await authInstance.post('/contacts', body);
    return response.data;
}

export const requestDeleteContact = async(id) => {
    const response = await authInstance.delete(`/contacts/${id}`);
    return response.data;
}

