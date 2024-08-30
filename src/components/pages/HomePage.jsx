//App
import React, { useEffect, useRef, useState } from "react";

//Components
import LandingPageCardOne from "../card components/LandingPageCardOne";
import LandingPageCardTwo from "../card components/LandingPageCardTwo";

//File Upload
import { auth, storage } from "../../config/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";

//Icon(s)
import { SlLocationPin } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { MdOutlineDeleteForever } from "react-icons/md";

//Image(s)
import LandingImageL from "../../../public/assets/LandingImageL.png";

const HomePage = () => {
  //custom file input logic
  const [cvUrls, setCvUrls] = useState([]);
  const [user, setUser] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Listen for changes in the authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && user) {
      const storageRef = ref(storage, `CVs/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(storageRef);
      setCvUrls((prevUrls) => [
        ...prevUrls,
        { name: file.name, url: downloadUrl },
      ]);
    }
  };

  const handleDelete = async (cvName) => {
    if (user) {
      const cvRef = ref(storage, `CVs/${user.uid}/${cvName}`);
      await deleteObject(cvRef); // Delete from Firebase storage
      setCvUrls((prevUrls) => prevUrls.filter((cv) => cv.name !== cvName)); // Remove from state
    }
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     onFileChange(file);
  //   }
  // };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileChange({ target: { files: [file] } });
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const getFileExtension = (url) => {
    return url.split(/[#?]/)[0].split(".").pop().trim();
  };

  //custom file input

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-7 lg:space-y-20">
        <section className="flex flex-col lg:flex-row items-center justify-center space-x-9 w-fit px-9 lg:px-[100px]">
          <div className="flex flex-col  items-center justify-center space-y-10 lg:space-y-20">
            <section className="text-center lg:w-[500px] space-y-5 lg:space-y-10">
              <h3 className="text-2xl lg:text-[40px] font-semibold">
                Get your dream job
              </h3>
              <p className="text-sm lg:text-xl w-[340px] lg:w-fit">
                Discover tailored job matches and expert insights for your dream
                career. Begin your journey now
              </p>
            </section>
            <section className="flex justify-between py-2 px-2 rounded-lg border border-gray-300 w-[330px] lg:w-fit">
              <div className="flex items-center space-x-2">
                <IoIosSearch />
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Job title, Keyword or Company"
                  className="outline-none w-[90px] lg:w-full"
                />
              </div>
              <div className="flex items-center space-x-2">
                <SlLocationPin />
                <input
                  type="text"
                  placeholder="Any location"
                  className="outline-none w-[90px] lg:w-full"
                />
              </div>
              <button
                type="submit"
                className="text-white text-sm lg:text-lg bg-[#5847D6] rounded-lg border border-transparent py-2 px-4 lg:w-[183px]"
              >
                Search
              </button>
            </section>
          </div>
          <div className="hidden md:block">
            <img src={LandingImageL} alt="career driven woman" />
          </div>
        </section>
        <section className="flex flex-col items-center gap-10">
          <h3 className="font-semibold text-2xl lg:text-3xl">
            Get Your Dream Job
          </h3>
          <LandingPageCardOne />
          <button className="border border-gray-300 text-gray-400 py-3 px-6 rounded-lg lg:hover:text-white lg:hover:bg-[#3538CD] lg:hover:scale-105 transition delay-200 font-semibold">
            View More
          </button>
        </section>
        <section className="px-7 lg:px-0">
          {/* mobile */}
          <div className="md:hidden">
            <div className="space-y-5">
              <section className="mt-8 text-center space-y-5">
                <h3 className="font-semibold text-2xl">
                  Upload CV to be Reviewed
                </h3>
                <p>
                  Unlock valuable feedback and optimize your chances. Elevate
                  your resume with professional insights for a standout job
                  application.
                </p>
              </section>
              <section>
                <div className="flex space-x-5">
                  <div className="w-[200px]">
                    <h3 className="font-semibold">
                      Finding a job has never been easier
                    </h3>
                    <ul className="list-none space-y-5">
                      <li className="custom-list-icon mt-5">
                        <h3 className="font-semibold">Direct CV Uploads</h3>
                        <p className="text-[12px]">
                          You can upload your resume or CV directly from hired
                          website and soon will be reviewed
                        </p>
                      </li>
                      <li className="custom-list-icon">
                        <h3 className="font-semibold">Schedule Interview</h3>
                        <p className="text-[12px]">
                          You can schedule the interview, but the recruiter has
                          to review your schedule
                        </p>
                      </li>
                    </ul>
                  </div>
                  {user ? (
                    <div
                      className="border-2 border-[#5F5C79] border-dashed rounded-lg p-6 w-[200px] h-[200px] text-center cursor-pointer flex flex-col items-center justify-center"
                      onClick={handleClick}
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                    >
                      <>
                        <div className="w-16 h-16 bg-[#3538CD] rounded-full flex items-center justify-center mb-4">
                          <FiUpload className="text-white text-2xl" />
                        </div>
                        <div className="flex flex-col items-center justify-center space-x-1 text-[14px]">
                          <p className="text-[#3538CD] font-semibold">
                            Click to upload
                          </p>
                          <p className="text-tx-tertiary">or drag and drop</p>
                        </div>
                      </>
                      {/* {cvUrl ? (
                        getFileExtension(cvUrl) === "pdf" ? (
                          <iframe
                            src={cvUrl}
                            title="Uploaded CV"
                            className="w-full h-full"
                            style={{ minHeight: "200px" }}
                          />
                        ) : (
                          <a
                            href={cvUrl}
                            download
                            className="text-blue-500 underline"
                          >
                            Download your uploaded CV
                          </a>
                        )
                      ) : (
                        <>
                          <div className="w-16 h-16 bg-[#3538CD] rounded-full flex items-center justify-center mb-4">
                            <FiUpload className="text-white text-2xl" />
                          </div>
                          <div className="flex flex-col items-center justify-center space-x-1 text-[14px]">
                            <p className="text-[#3538CD] font-semibold">
                              Click to upload
                            </p>
                            <p className="text-tx-tertiary">
                              {" "}
                              or drag and drop
                            </p>
                          </div>
                        </>
                      )} */}
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                  ) : (
                    <p className="text-center text-red-500">
                      Please sign in to upload your CV.
                    </p>
                  )}
                </div>
              </section>
              <section>
                <h3 className="font-semibold">Your Uploaded CVs:</h3>
                {cvUrls.map((cv) => (
                  <div key={cv.name} className="flex items-center space-x-3 mt-5">
                    {getFileExtension(cv.url) === "pdf" ? (
                      <iframe
                        src={cv.url}
                        title={cv.name}
                        className="w-16 h-16"
                        style={{ minHeight: "83px" }}
                      />
                    ) : (
                      <a
                        href={cv.url}
                        download
                        className="text-blue-500 underline"
                      >
                        {cv.name}
                      </a>
                    )}
                    <button
                      className="text-red-500 relative -top-[2rem]"
                      onClick={() => handleDelete(cv.name)}
                    >
                      <MdOutlineDeleteForever />
                    </button>
                  </div>
                ))}
              </section>
            </div>
          </div>

          {/* desktop */}
          <div className="hidden md:flex jus space-x-[7rem]">
            <section className="w-fit space-y-5">
              <h3 className="font-semibold text-2xl">
                Upload CV to be Reviewed
              </h3>
              <p className="w-[405px]">
                Unlock valuable feedback and optimize your chances. Elevate your
                resume with professional insights for a standout job
                application.
              </p>
              {user ? (
                <div
                  className="border-2 border-[#5F5C79] border-dashed rounded-lg p-6 w-[200px] h-[200px] text-center cursor-pointer flex flex-col items-center justify-center"
                  onClick={handleClick}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <>
                    <div className="w-16 h-16 bg-[#3538CD] rounded-full flex items-center justify-center mb-4">
                      <FiUpload className="text-white text-2xl" />
                    </div>
                    <div className="flex flex-col items-center justify-center space-x-1 text-[14px]">
                      <p className="text-[#3538CD] font-semibold">
                        Click to upload
                      </p>
                      <p className="text-tx-tertiary"> or drag and drop</p>
                    </div>
                  </>
                  {/* {cvUrl ? (
                    getFileExtension(cvUrl) === "pdf" ? (
                      <iframe
                        src={cvUrl}
                        title="Uploaded CV"
                        className="w-full h-full"
                        style={{ minHeight: "200px" }}
                      />
                    ) : (
                      <a
                        href={cvUrl}
                        download
                        className="text-blue-500 underline"
                      >
                        Download your uploaded CV
                      </a>
                    ) 
                  ) : ( )}*/}
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              ) : (
                <p className="text-center text-red-500">
                  Please sign in to upload your CV.
                </p>
              )}
            </section>
            <section>
              <h3 className="font-semibold text-2xl">Your Uploaded CVs:</h3>
              {cvUrls.map((cv) => (
                <div key={cv.name} className="flex items-center space-x-3 mt-8">
                  {getFileExtension(cv.url) === "pdf" ? (
                    <iframe
                      src={cv.url}
                      title={cv.name}
                      className="w-16 h-16"
                      style={{ minHeight: "83px" }}
                    />
                  ) : (
                    <a
                      href={cv.url}
                      download
                      className="text-blue-500 underline"
                    >
                      {cv.name}
                    </a>
                  )}
                  <button
                    className="text-red-500 relative -top-[2rem]"
                    onClick={() => handleDelete(cv.name)}
                  >
                    <MdOutlineDeleteForever />
                  </button>
                </div>
              ))}
            </section>

            <section className="">
              <h3 className="font-semibold text-2xl w-[300px]">
                Finding a job has never been easier
              </h3>
              <ul className="list-none space-y-5">
                <li className="custom-list-icon mt-5">
                  <h3 className="font-semibold">Direct CV Uploads</h3>
                  <p className="w-[250px]">
                    You can upload your resume or CV directly from hired website
                    and soon will be reviewed
                  </p>
                </li>
                <li className="custom-list-icon">
                  <h3 className="font-semibold">Schedule Interview</h3>
                  <p className="w-[250px]">
                    You can schedule the interview, but the recruiter has to
                    review your schedule
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </section>
        <section className="w-[450px] lg:w-fit pt-10 lg:pt-[60px] pb-5 lg:pb-[60px]">
          <h3 className="font-semibold text-2xl lg:text-3xl text-center mb-5 lg:mb-7">
            Quick Career Tips from our Blog
          </h3>
          <LandingPageCardTwo />
        </section>
      </div>
    </>
  );
};

export default HomePage;
