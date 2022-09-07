import React from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import { useRouter } from "next/router";
import BasePage from "../../components/BasePage";
import { useGetPostById } from "../../actions";

function Portfolio() {
  const router = useRouter();
  const {
    data: portfolio,
    error,
    loading,
  } = useGetPostById(router.query.id);

  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading Data ...</p>}
        {error && <div className='alert alert-danger'>{error.message}</div>}
        {portfolio && (
          <>
            <h1>I am Portfolio Page</h1>
            <h1>{router.query.id}</h1>
            <p>BODY : {portfolio.body}</p>
            <p>ID : {portfolio.id}</p>
          </>
        )}
      </BasePage>
    </BaseLayout>
  );
}

// Portfolio.getInitialProps = async ({ query }) => {
//   let post = {};

//   try {
//     const res = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts/${query.id}`
//     );
//     post = res.data;
//   } catch (e) {
//     console.log(e);
//   }
//   return { portfolio: post };
// };

export default Portfolio;
