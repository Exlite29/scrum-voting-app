import "./App.css";
import Heading from "../components/Heading/Heading";
import Button from "../components/Button/Button";

function App() {
  return (
    <main className="max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-8">
      <Heading />
      <div className="flex flex-col flex-wrap max-w-3xl mx-auto mt-10">
        <div className="flex justify-center">
          <Button
            title="Reset Session"
            // handleClick={handleReset}
            //disabled={hidden}
            className="mr-3"
          />
          <Button
            title="Refresh User"
            // handleClick={handleRefreshUser}
            // disabled={false}
            className="ml-3"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
