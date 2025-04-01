import { FaChevronDown } from "react-icons/fa6";

function TopOfItem({ photo, typeOfDrink }) {
  return (
    <>
      <div className="bg-lime-950 w-full mx-auto h-20 mt-10 rounded-3xl flex items-center">
        <img
          src={photo}
          alt="cup of coffe"
          className="h-full aspect-square rounded-l-3xl object-cover"
          // className="h-16 w-16 rounded-l-3xl object-cover"
        />
        <div className="ml-auto pr-2 h-full flex items-center justify-end w-full text-2xl text-gray-300">
          <p className=" mr-2">{typeOfDrink}</p>
          <FaChevronDown className="text-xl" />
        </div>
      </div>
    </>
  );
}

export default TopOfItem;
