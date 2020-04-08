import { User } from "../types"

export const fetchUsersData = (): Promise<User[]> => {
    return fetch('https://jsonplaceholder.typicode.com/users', { mode: 'cors' })
        .then((response) => checkResponce(response))
}

export const fetchUserDetails = (id: number): Promise<User> => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { mode: 'cors' })
        .then((response) => checkResponce(response))
}

const checkResponce = (response: any) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}
