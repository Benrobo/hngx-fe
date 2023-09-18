import { SignUp } from "@clerk/nextjs";
import Layout from "../../components/Layout";
import TopBar from "../../components/TopBar";

export default function Auth() {
  return (
    <Layout className="w-full">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <SignUp />
      </div>
    </Layout>
  );
}
