const Skeleton = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4 py-8">
      <div className="skeleton h-32 w-128"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-96"></div>
      <div className="skeleton h-4 w-128"></div>
    </div>
  );
};

export default Skeleton;
