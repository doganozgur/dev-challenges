import Button from "./Button";

function App() {
  return (
    <div className="max-w-screen-md mx-auto py-14">
      <h1 className="text-2xl mb-7">Buttons</h1>
      <div className="grid grid-cols-2">
        <Button />
        <Button />
        <Button variant="outline" />
        <Button />
      </div>
    </div>
  );
}

export default App;
