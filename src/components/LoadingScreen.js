const LoadingScreen = ({ isLoading }) => {
  return (
    <div className={isLoading ? "loading" : "notloading"}>
      <div className="load">
        {[...Array(16)].map((x, i) => (
          <div />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
