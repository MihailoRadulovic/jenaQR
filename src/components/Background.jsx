import leafPicture from "../images/leafPicture.jpg";

function Background() {
  return (
    <div className="fixed w-full h-full z-0">
      <img
        src={leafPicture}
        alt="Background with leafs"
        className="top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65"></div>
    </div>
  );
}

export default Background;
