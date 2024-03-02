import axios from "axios";

export const authInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
})

const setToken = token => {
    if (token) {
        return authInstance.defaults.headers.authorization = `Bearer ${token}`;
    } 
    authInstance.defaults.headers.authorization = "";
}

export const signUpRequest = async body => {
    const { data } = await authInstance.post('/users/signup', body);
    setToken(data.token);
    console.log(data);
    return data;
};

export const loginRequest = async body => {
    const { data } = await authInstance.post('/users/login', body);
    setToken(data.token);
    return data;
};

export const currentRequest = async (token) => {
    setToken(token);
    try {
        const { data } = await authInstance.get('/users/current');
        setToken(token);
    return data;
    } 
    catch (error) {
        setToken();
        throw error;
    }
    
}

export const logoutREquest = async () => {
     const { data } = await authInstance.post('/users/logout');
    return data;
}