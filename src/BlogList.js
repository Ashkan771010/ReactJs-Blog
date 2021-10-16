import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blogs = props.name;
    const title = props.title;

    return (
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((data) => (
          <div className="blog-show" key={data.id}>
            <Link to={`/blogs/${data.id}`}>
              <h2>{data.title}</h2>
              <p>Written By {data.author}</p>
            </Link>
          </div>
        ))}
      </div>
    );
}
 
export default BlogList;