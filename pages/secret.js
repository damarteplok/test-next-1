import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import { useGetUser } from "../actions/user";
import { useRouter } from "next/router";

const Secret = () => {
  const {data, loading} = useGetUser();
  const router = useRouter();

  if (loading) {
    return <p>Loading ...</p>
  }

  if (!data) {
    // Todo Improve retirm
    router.push('/api/v1/login')
    return null;
  } else {
    return (
        <BaseLayout user={data} loading={loading}>
          <BasePage>
            <h1>I am Secret page</h1>
          </BasePage>
        </BaseLayout>
      );
  }
};

export default Secret;
