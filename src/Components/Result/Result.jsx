import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

export default function () {
  const { usersResult, questions } = useContext(AuthContext);
  console.log(questions);
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-96 h-96 p-8 border">
            <h1 className="text-center capitalize font-bold">
              this is result page {usersResult}/{questions?.length}
            </h1>
            <div className="flex justify-center items-center p-8">
              <Link
                to="/"
                className="border px-8 py-2 rounded-full border-black hover:bg-gradient-to-r from-slate-900 to-black cursor-pointer duration-500 hover:text-white font-bold"
              >
                Reset
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
