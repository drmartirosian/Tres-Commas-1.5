const BASE_URL = '/api/cart';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}