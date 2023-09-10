import "./App.css";
import UsernameGenerator from "../components/Header/userName";

function App() {
  return (
    <main className="max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col flex-wrap max-w-3xl mx-auto mt-10">
        <div className="flex justify-center">
          <UsernameGenerator />
        </div>
      </div>
    </main>
  );
}

export default App;
