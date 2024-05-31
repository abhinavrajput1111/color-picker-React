function ColorPicker({ colorName, hex }) {
  return (
    <>
      <div
        id="wrapper"
        className="wrapper md:w-[23%] w-full h-auto shadow-xl bg-green-50"
      >
        <div id="box" className="box w-full h-auto border border-black">
          <div
            id="color"
            className="color w-full h-48 shadow-lg"
            style={{ backgroundColor: hex }}
          ></div>
          <p id="code" className="code text-lg font-semibold px-2 my-2">
            {hex}
          </p>
          <p id="name" className="name px-2 text-lg">
            {colorName}
          </p>
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
