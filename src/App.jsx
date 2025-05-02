import Headbar from "./components/Headbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Headbar />
      <main className="flex flex-col items-center justify-center text-center px-4 pt-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Willkommen auf smile4it.de
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-xl">
          Diese Seite wird aktuell aus der <span className="font-semibold">AWS Cloud</span> ausgeliefert.
          <br />Wechsel zur lokalen Version:
        </p>
        <a
          href="https://marcelebel.de"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow"
        >
          Zur On-Premise-Version
        </a>
        <footer className="mt-12 text-sm text-gray-500">
          Hosting: AWS S3 · Domain: smile4it.de
        </footer>
      </main>
    </div>
  );
}

export default App;