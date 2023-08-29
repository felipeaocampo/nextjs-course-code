import { useRouter } from "next/router";

const BlogPost = () => {
  const query = useRouter().query;
  console.log(query);

  return (
    <div>
      <h1>BlogPost</h1>
    </div>
  );
};

export default BlogPost;
