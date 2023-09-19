import { SignIn } from "@clerk/nextjs";
import Layout from "../../components/Layout";

export default function Page() {
  return (
    <Layout>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <SignIn />
      </div>
    </Layout>
  );
}
