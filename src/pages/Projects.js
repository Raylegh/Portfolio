//Pages
import Cards from "../components/Projects/Cards";

function Projects({ isLoading, setIsLoading }) {
  return (
    <>
      <Cards setIsLoading={setIsLoading} isLoading={isLoading} />
    </>
  );
}

export default Projects;
