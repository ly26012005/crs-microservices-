import { useState } from 'react';
import { useCourses } from './api/useCourses';
import SearchBox from './components/SearchBox';
import CourseList from './components/CourseList';
import Pagination from './components/Pagination';

function App() {
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(0);

    // Đã thêm số 1 ở cuối để hiển thị 1 môn/trang -> giúp xuất hiện nút phân trang ngay lập tức
    const { courses, totalPages, state, errorMessage, refetch } = useCourses(keyword, page, 2);

    const handleSearch = (newKeyword: string) => {
        setKeyword(newKeyword);
        setPage(0);
    };

    return (
        <div style={{ padding: 24, fontFamily: 'sans-serif', maxWidth: 800, margin: '0 auto' }}>
            <h1>Danh sach mon hoc</h1>
            <SearchBox onSearch={handleSearch} />
            <div style={{ marginTop: 16 }}>
                <CourseList
                    courses={courses}
                    state={state}
                    errorMessage={errorMessage}
                    onRetry={refetch}
                />
            </div>
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
}

export default App;