import { CALL_API } from '../middlewares/api';

export const test = () => ({
    [CALL_API]: {
        endpoint: '/test'
    }
})