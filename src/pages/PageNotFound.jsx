export default function PageNotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
      <p className="text-lg text-white mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="bg-yellow-500 text-blue-900 px-7 py-3 rounded hover:bg-yellow-600"
      >
        Go to Home
      </a>
    </div>
  );
}
