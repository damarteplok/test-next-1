import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import { useGetUser } from "../actions/user";

const About = () => {
  const {data, loading} = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>I am About page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
