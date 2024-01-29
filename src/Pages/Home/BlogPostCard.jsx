const BlogPostCard = ({ post }) => {
  // console.log(Object.keys(post).join(','));
  const { _id, title, body } = post;
  return (
    <div className="card bg-orange-300 shadow-lg hover:bg-base-300 hover:bottom-2 hover:border-orange-300">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <button className="btn">Show</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
