import Card from "./Card";

const RightContent = () => {
  return (
    <div className="border-l-2 w-1/2 bg-gray-900 p-2">
      <div className="flex justify-center p-2">
        <h1 className="text-xl font-bold">Your Notes</h1>
      </div>
      <div className="h-full flex gap-5 flex-wrap justify-evenly overflow-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default RightContent;
