import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const App = () => {
  return (
    <div className="h-screen flex gap-5 w-screen bg-black text-white p-5">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default App;
