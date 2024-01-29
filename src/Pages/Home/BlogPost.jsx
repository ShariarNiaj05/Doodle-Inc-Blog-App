import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import BlogPostCard from "./BlogPostCard";

const BlogPost = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allPost, isLoading } = useQuery({
    queryKey: ["all-post"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-post");
      // console.log(res.data);
      return data;
    },
  });

  if (isLoading) return <h2>loading........</h2>;
  // console.log(allPost);

  return (
    <div className=" max-w-7xl mx-auto mt-5">
      <div>
        <h2 className=" text-center text-2xl mt-10">
          <span className=" bg-orange-300 p-2 rounded font-bold">
            Featured Blogs
          </span>
          : Spotlight on Inspiring Narratives
        </h2>
      </div>

      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allPost?.map((post) => (
          <BlogPostCard key={post._id} post={post}></BlogPostCard>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
