import axiosClient from './axiosClient';
import type { Course, PagedResponse } from '../types/course';

export const getCourses = (
    keyword?: string,
    page = 0,
    size = 10
) => {
    return axiosClient.get<PagedResponse<Course>>(
        'http://localhost:8080/api/public/courses',
        {
            params: {
                keyword,
                page,
                size,
                _t: Date.now(),
            },
            headers: {
                'X-API-KEY': 'crs-partner-key-2026',
            },
        }
    );
};