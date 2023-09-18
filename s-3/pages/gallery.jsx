import React, { useContext } from "react";
import Gallery from "../components/Gallery.jsx";
import Layout from "../components/Layout.jsx";
import { BsFillCloudUploadFill } from "react-icons/bs";
import DataContext from "../context/DataContext.jsx";

function GalleryPage() {
  const { toggleModal } = useContext(DataContext);

  return (
    <Layout>
      <div className="w-full h-screen mt-9 py-8">
        <div className="w-full flex items-center justify-start px-4 py-2">
          <button
            className={`w-auto px-4 py-2 rounded-[30px] font-ppB bg-white-100 text-dark-200 text-[14px] flex items-center justify-start gap-2 border-[1px] border-white-600 hover:opacity-[1] opacity-[.80] transition-all scale-[.95] hover:scale-[1]  `}
            onclick={toggleModal}
          >
            <BsFillCloudUploadFill /> Upload
          </button>
        </div>

        {/* upload modal */}

        {/* <Gallery /> */}
      </div>
    </Layout>
  );
}

export default GalleryPage;
