export default function () {
  return (
    <div className="relative h-[80vh]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
        <h1 className="text-3xl font-bold mb-4">The House of the Stalkers</h1>
        <button className="bg-gradient-to-r from-blue-300 to-blue-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          start now
        </button>
      </div>
      <img
        className="size-full object-cover object-center"
        src="./images/pexels-kelly-1179532-12530465.jpg"
        alt="background image"
      />
    </div>
  );
}
