// middleware/authenticated.js
export default function ({ store, redirect, $cookies }) {
    const token = $cookies.get('token');
    if (!token) {
        redirect('/login');
    }
}
