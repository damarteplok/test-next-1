import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import { useGetUser } from "../actions/user";

const Blogs = () => {
  const {data, loading} = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>I am Blogs page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Blogs;
