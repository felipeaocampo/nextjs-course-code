import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  const test = router.pathname.split("[")[1].split("]")[0];
  // console.log(test);

  console.log(router.query[test]);

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
};

export default PortfolioProjectPage;
