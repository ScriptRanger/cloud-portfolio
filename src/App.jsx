function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Willkommen auf smile4it.de
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Diese Seite wird aktuell aus der <span className="font-semibold">AWS Cloud</span> ausgeliefert (S3 Static Website).
        <br />Klicken Sie unten, um zur lokal gehosteten Version auf meinem eigenen Server zu wechseln.
      </p>
      <a
        href="https://marcelebel.de"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow"
      >
        Zur On-Premise-Version wechseln
      </a>

      <footer className="mt-12 text-sm text-gray-500">
        Hosting: <span className="font-mono">AWS S3 (Frankfurt)</span> · Domain: <span className="font-mono">smile4it.de</span>
      </footer>
    </div>
  );
}

export default App;
