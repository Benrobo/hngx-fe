import React, { useContext, useCallback } from "react";
import Gallery from "../components/Gallery.jsx";
import Layout from "../components/Layout.jsx";
import {
  BsFillCloudUploadFill,
  BsFillSearchHeartFill,
  BsSearch,
} from "react-icons/bs";
import DataContext from "../context/DataContext.jsx";
import { ChildBlurModal } from "../components/Modal";
import Dropzone from "react-dropzone";
import { encode } from "blurhash";
import { Spinner } from "@chakra-ui/spinner";
import galleryJson from "../data/gallery.json";
import { useAuth } from "@clerk/clerk-react";
import { motion } from "framer-motion";

function GalleryPage() {
  const {} = useContext(DataContext);
  const { isLoaded, isSignedIn, sessionId, getToken } = useAuth();
  const [isDragActive, setIsDragActive] = React.useState(false);
  const [acceptedFiles, setAcceptedFiles] = React.useState([]);
  const [dndModal, setDnDModal] = React.useState(false);
  const [searchWrd, setSearchWrd] = React.useState("");

  const clearUploadedFiles = () => setAcceptedFiles([]);
  const toggleDnDModal = () => setDnDModal(!dndModal);
  const [updateGalleryImage, setUpdateGalleryImage] = React.useState([
    ...galleryJson,
  ]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [copyOfGalleryImage, setCopyOfGalleryImage] = React.useState([]);

  function uploadFiles() {}

  function OnDrop(acceptedFiles) {
    setIsLoading(true);
    setAcceptedFiles(acceptedFiles);

    const imagePromises = acceptedFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = () => {
          resolve(image);
        };
        image.onerror = (error) => {
          reject(error);
        };
      });
    });

    Promise.all(imagePromises)
      .then((images) => {
        const blurhashPromises = images.map((image) => {
          const imageData = getImageData(image);
          const hash = encode(
            imageData.data,
            imageData.width,
            imageData.height,
            4,
            4
          );
          return {
            image: image.src,
            hash,
            width: imageData.width,
            height: imageData.height,
          };
        });

        Promise.all(blurhashPromises)
          .then(async (blurhashes) => {
            // function to add items one after the other with a delay
            const appendWithDelay = async (dataList, delay) => {
              for (const d of dataList) {
                await new Promise((resolve) => setTimeout(resolve, delay));
                setUpdateGalleryImage((prev) => [d, ...prev]);
                setCopyOfGalleryImage((prev) => [d, ...prev]);
              }
            };

            setDnDModal(false);
            await appendWithDelay(blurhashes, 500);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error processing blurhash:", error);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        setIsLoading(false);
      });
  }

  const getImageData = (image) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, image.width, image.height);
  };

  React.useCallback(() => {
    if (acceptedFiles.length > 0) {
      setIsLoading(true);
    }
  }, [acceptedFiles]);

  React.useEffect(() => {
    setCopyOfGalleryImage(galleryJson);
  }, []);

  function debounce(fn, delay) {
    let timerId;

    return function (...args) {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  const handleSearch = (searchTerm) => {
    if (searchTerm.length > 0) {
      const filteredImages = copyOfGalleryImage.filter((p) => {
        return p?.tags?.includes(searchTerm);
      });
      setUpdateGalleryImage(filteredImages);
    } else {
      setUpdateGalleryImage(copyOfGalleryImage);
    }
  };

  // Usage example:
  const delayedFunction = debounce(handleSearch, 500);

  return (
    <Layout>
      <div className="w-full h-screen mt-9 py-8">
        <div className="w-full border-dashed border-b-[2px] border-b-white-600 flex items-center justify-start px-4 py-3">
          {isSignedIn && (
            <>
              <button
                className={`w-auto px-4 py-2 rounded-[30px] font-ppB bg-white-100 text-dark-200 text-[14px] flex items-center justify-start gap-2 border-[1px] border-white-600 hover:opacity-[1] opacity-[.80] transition-all scale-[.95] hover:scale-[1]  `}
                onClick={toggleDnDModal}
              >
                <BsFillCloudUploadFill /> Upload
              </button>
            </>
          )}
          <div className="w-auto ml-5">
            <div className="w-full border-solid border-[2px] border-white-600 flex items-center justify-start px-[.8em] rounded-lg ">
              <BsSearch size={20} className="text-white-400" />
              <input
                type="text"
                className="w-full bg-transparent text-[13px] px-3 py-2 outline-none font-ppB text-white-100"
                placeholder="Search here..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                  }
                }}
                onChange={(e) => {
                  delayedFunction(e.target.value);
                  setSearchWrd(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        {/* upload modal */}
        <ChildBlurModal
          isOpen={dndModal}
          onClose={toggleDnDModal}
          showCloseIcon={true}
          fixed={true}
        >
          <div className="w-screen h-full flex flex-col items-center justify-center">
            <div className="w-full relative max-w-[40%] bg-dark-200 border-solid border-[.1px] border-white-600 rounded-lg overflow-hidden ">
              {isLoading && (
                <div className="w-full h-full z-[500] absolute top-0 left-0 bg-dark-600 flex flex-col backdrop-blur items-center justify-center text-center">
                  <Spinner color="#fff" />
                  <p className="text-white-300 font-ppB mt-2 text-[12px] ">
                    Processing {acceptedFiles.length} Image
                  </p>
                </div>
              )}
              <div className="w-full flex flex-col items-center justify-center px-4 py-5">
                <h1 className="text-white-100 font-ppB">Drag and Drop</h1>
                <p className="text-white-400">Drag and Drop your files here</p>
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    setIsDragActive(false);
                    OnDrop(acceptedFiles);
                  }}
                  onDragOver={() => {
                    setIsDragActive(true);
                  }}
                  onDragLeave={() => setIsDragActive(false)}
                  onDragEnter={() => setIsDragActive(false)}
                >
                  {({ getRootProps, getInputProps }) => (
                    <button
                      className={`w-full h-[100px] max-w-[420px] border-dashed border-[1px] border-white-400 ${
                        isDragActive ? "bg-white-600" : ""
                      } px-3 flex flex-col items-center justify-center rounded-md text-center `}
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <p className="text-white-400">Drop the files here...</p>
                      ) : (
                        <p className="text-white-400">
                          Drop your files here or Click to upload
                        </p>
                      )}
                    </button>
                  )}
                </Dropzone>
              </div>
              <br />
              <div className="w-full px-7 py-3 flex items-center justify-between gap-3">
                <button
                  className="w-auto px-5 py-3 font-ppB text-white-100 rounded-md bg-red-305 text-[13px] "
                  onClick={clearUploadedFiles}
                  disabled={acceptedFiles.length === 0}
                  style={{
                    opacity: acceptedFiles.length === 0 ? 0.5 : 1,
                  }}
                >
                  Clear Uploaded Files
                </button>
                {/* <button
                  className="w-auto min-w-[180px] px-5 py-3 font-ppB text-white-100 rounded-md bg-blue-300 text-[13px] "
                  onClick={uploadFiles}
                >
                  Upload File
                </button> */}
              </div>
              <br />
            </div>
          </div>
        </ChildBlurModal>

        <motion.div className="mt-9">
          <Gallery images={updateGalleryImage} />
        </motion.div>
      </div>
    </Layout>
  );
}

export default GalleryPage;
