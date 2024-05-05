export default function ({ $axios, store, }) {
    console.log('axios.js plugin')

        $axios.onRequest(config => {
            config.withCredentials = true;
            config.baseURL = 'http://localhost:1400/api';
            const token = store.state.csrfToken; // Access CSRF token from Vuex store
            console.log('token', token)
            if (token) {
                config.headers.common['X-CSRF-TOKEN'] = token;
            }

            const authToken = store.state.authToken; // Example if you store auth token
            if (authToken) {
                config.headers.common['Authorization'] = `Bearer ${authToken}`;
            }

            console.log('Modified request to ' + config.baseURL + config.url);
        });

   /* $axios.onRequest(config => {

        config.baseURL = 'http://localhost:1400/api';
        console.log('Modified request to ' + config.baseURL + config.url);
        const token = $cookies.get('token');
        if (token) {
            config.headers.common['Authorization'] = `Bearer ${token}`;
        }
        if (!config.headers.common['X-CSRF-TOKEN']) {
            const response = $axios.get('/csrf-token');
            config.headers.headers.common['X-CSRF-TOKEN'] = response.data.csrf_token;
        }
    });*/

    $axios.onError(error => {
        if (error.response && error.response.status === 404) {
            console.log('Request error: Page not found');
            // Or handle the error in a way appropriate to your app
        }
    });
}
