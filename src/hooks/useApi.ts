import { api } from "../lib/axios";


export const useApi = () => ({
    validateToken: async (token: string) => {
    
        const response = await api.post('validate', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {

        const user = {
            id: 1,
            email,
            password,
            name: "abc"
        }

        const token = "123"

        return {
            user, token
        }
    
        // const response = await api.post('/signIn', {email, password});
        // return response.data;
    },
    logout: async () => {
        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    }
})

