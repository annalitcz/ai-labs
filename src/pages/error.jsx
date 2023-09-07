import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const Error = () => {
  useEffect(() => {
    document.title = "Error";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Error</h1>
        <p className="text-gray-600">Maaf, terjadi kesalahan.</p>
        <Link to="/" className="mt-4 text-blue-500 hover:underline">
          <FontAwesomeIcon icon={faBackward} className="mr-2"/> back
        </Link>
      </div>
    </div>
  );
};

export default Error;
