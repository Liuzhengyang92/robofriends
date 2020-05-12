import axios from 'axios';

export const apiCall = (link: string) => axios.get(link).then();
