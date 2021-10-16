import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogsDetail = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleClick = () => {
      fetch("http://localhost:8000/blogs/" + blog.id, {
        method: "DELETE"
      }).then(() => {
        history.push('/');
      })
    }

    return (
      <div className="blog-detail">
        <article>
          {isLoading && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {blog && (
            <article>
              <h2>{blog.title}</h2>
              <p>Written By {blog.author}</p>
              <div>{blog.body}</div>
              <button onClick={handleClick}>DELETE</button>
            </article>
          )}
        </article>
      </div>
    );
}
 
export default BlogsDetail;