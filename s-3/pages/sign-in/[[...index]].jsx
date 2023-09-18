import { SignIn } from "@clerk/nextjs";
import Layout from "../../components/Layout";

export default function Page() {
  return (
    <Layout>
      <SignIn />
    </Layout>
  );
}
