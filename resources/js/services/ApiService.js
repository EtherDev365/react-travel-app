import http from './Http';

const ApiService = {
    getToken: () => {
        return http.get('/token');
    },
    sendEmail: (data) => {
        return http.post('/send-email', data);
    },
    getAll: () => {
        return http.get('/tutorials');
    },

    get: id => {
        return http.get(`/tutorials/${id}`);
    },

    create: data => {
        return http.post('/tutorials', data);
    },

    update: (id, data) => {
        return http.put(`/tutorials/${id}`, data);
    },

    delete: id => {
        return http.delete(`/tutorials/${id}`);
    },

    deleteAll: () => {
        return http.delete(`/tutorials`);
    },

    findByTitle: title => {
        return http.get(`/tutorials?title=${title}`);
    }
};

export default ApiService;
