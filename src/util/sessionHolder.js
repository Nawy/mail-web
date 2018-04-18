

const COOKIE_NAME = 'JSESSIONID';


export function deleteSessionCookie() {
    document.cookie = COOKIE_NAME + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}