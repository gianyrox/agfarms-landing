import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="top-0  w-full h-[100px] flex items-center justify-center left-0 right-0 bg-black">
        <h1 className="md:text-4xl text-xl text-center">
          In Collaboration with WalleyeFest
        </h1>
      </div>
      <div className="mt-[80px] mb-[60px] top-0 mx-4">
        <h1 className="lg:text-8xl md:text-6xl text-4xl text-center">
          AGFarms
        </h1>
      </div>
      <div className="right-0 left-0 w-full ">
        <div className="md:w-[60%] h-fit bg-gray-600 bg-opacity-50 border-4 rounded-lg border-gray-600 top-0 sm:w-80% w-[90%] mx-auto">
          <p className="p-4 text-center text-xl">
            We develop software for existing businesses.
          </p>
        </div>
        <div className="md:w-[60%] h-fit  rounded-lg top-0 sm:w-80% w-[90%] mt-10 mx-auto">
          <p className="p-4 text-center text-xl">
            Looking for a software solution? Contact us today.
          </p>
        </div>
      </div>{" "}
      <div className="right-0 left-0 w-full">
        <button className="w-40 h-20 bg-blue-500 bg-opacity-50 border-2 rounded-lg border-blue-500 mx-auto mt-10 flex items-center justify-center hover:bg-opacity-100">
          <Link
            href="mailto:team@agfarms.dev"
            className="p-4 text-center text-2xl"
          >
            Contact
          </Link>
        </button>
      </div>
      <div className="right-0 left-0 bottom-0 h-[80px] w-[96%] mt-10 mx-auto">
        <div className="w-full grid grid-cols-3 gap-4">
          <div className="bg-red-500 h-10"></div>
          <div className="bg-blue-500 h-10"></div>
          <div className="bg-green-500 h-10"></div>
        </div>
        {/* Add more divs for additional boxes */}
      </div>
    </div>
  );
}
