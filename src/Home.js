import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");
    return (
      <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <div className="loading">Loading...</div>}
        {blogs && <BlogList name={blogs} title="All Blogs" />}
      </div>
    );
}
 
export default Home;