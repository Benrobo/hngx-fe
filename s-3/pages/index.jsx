import { useState } from "react";
import Layout from "../components/Layout";
import galleryJson from "../data/gallery.json";
import Gallery from "../components/Gallery";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <Layout className="w-full flex flex-col items-center justify-center">
      <div className="w-full h-[100px] "></div>
      <Gallery images={galleryJson} />
    </Layout>
  );
}

export default Home;
