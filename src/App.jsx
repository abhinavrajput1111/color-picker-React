import ColorPicker from "./ColorPicker";
import color from "./crayola.json";
import "./App.css";

function App() {
  {
    console.log(color);
  }
  return (
    <>
      <div className="w-full heading py-5 mb-5">
        <h1 className="text-center text-4xl font-mono text-white font-bold ">
          {" "}
          Modern Color Picker
        </h1>
      </div>
      <div className="flex gap-5 flex-wrap p-5 w-full h-auto">
        {color.map((item) => {
          return <ColorPicker hex={item.hex} colorName={item.name} />;
        })}
      </div>
    </>
  );
}

export default App;
