import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

export default function PostsList() {
  const  posts=useLoaderData();
  // const [isFetching, setIsFetching] = useState(false);
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
    
  //     setPosts(resData);
  //     setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  return (
    <>
      { posts.length > 0 && (
        <ul className={classes.posts}>
          {/* <Post author="MANUEL" body="Check out the full course!" /> */}
          {posts.map((post, key) => (
            <Post key={key} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      { posts.length === 0 && (
        <div className={classes.null}>
          <h2>There are no Posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {/* {isFetching && (
        <div className={classes.loading}>
          <p>Loading Posts...</p>
        </div>
      )} */}
    </>
  );
}
