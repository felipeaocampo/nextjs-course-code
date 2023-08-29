import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  const clickedProjectHandler = () => {
    //load data
    router.push("/clients/max/productA");
  };

  return (
    <div>
      <h1>The Projects of a specific client!</h1>
      <button onClick={clickedProjectHandler}>Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
