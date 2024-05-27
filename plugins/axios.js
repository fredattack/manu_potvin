export default function ({ $axios, store, $cookies,redirect }) {
    console.log('axios.js plugin');

    $axios.onRequest(config => {
        config.withCredentials = true;
        config.withXSRFToken = true;
        config.baseURL = 'http://localhost:1400/';

        const token = store.state.auth.csrfToken; // Access CSRF token from Vuex store
        console.log('tokencsrf', token);

        if (token) {
            config.headers.common['X-CSRF-TOKEN'] = token;
        }

        const authToken = $cookies.get('token'); // Use $cookies from context
        console.log("authToken", authToken);
        // Example if you store auth token
        if (authToken) {
            config.headers.common['Authorization'] = `Bearer ${authToken}`;
        }
    });

    $axios.onError(error => {
        if (error.response && error.response.status === 404) {
            console.log('Request error: Page not found');
            // Or handle the error in a way appropriate to your app
        }
        if(error.response && error.response.status === 401){
            console.log('Request error: Unauthorized');
            // Or handle the error in a way appropriate to your app
            redirect('/login');
        }
    });
}
