// purpose: interface khop voi CourseDTO ben course-service (Buoi 2-3)
export interface Course {
    id: number;
    tenMonHoc: string;
    soTinChi: number;
    soChoToiDa: number;
    soChoConLai: number;
}
// Khop voi cau truc Page<CourseDTO> ma Spring Data JPA tra ve (Buoi3, muc A)
export interface PagedResponse<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
    number: number; // trang hien tai (bat dau tu 0)
    size: number;
}
// Thêm vào cuối file course.ts đã có từ Buổi 5
export interface CourseFormValues {
    tenMonHoc: string;
    soTinChi: string; // Dùng string trong form để kiểm soát input rỗng, ép kiểu parseInt khi gửi API
    soChoToiDa: string;
}

export const emptyCourseForm: CourseFormValues = {
    tenMonHoc: '',
    soTinChi: '',
    soChoToiDa: '',
};