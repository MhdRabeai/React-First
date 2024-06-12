import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

export default function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);

  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // }
  return (
    <>
    <Outlet />
      <main>
        <PostsList />
        {/* <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        /> */}
      </main>
    </>
  );
}
export async function loader() {
  const response = await fetch(
    "https://json-server-avob.onrender.com/posts"
  );
  const resData = await response.json();
  return resData;
}
