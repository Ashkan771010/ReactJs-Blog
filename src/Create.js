import { useHistory } from "react-router-dom";
import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isloading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const blog = {title, body, author,};
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false);
            console.log("added New Blog");
            // history.go(-1);
            history.push("/")
        })
    }

    return (
      <div className="create">
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label>Blog Body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog Author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="ashkan">Ashkan</option>
            <option value="shayan">Shayan</option>
          </select>
          {!isloading && <button>Add Blog</button>}
          {isloading && <button disabled>Adding Blog...</button>}
        </form>
      </div>
    );
}
 
export default Create;