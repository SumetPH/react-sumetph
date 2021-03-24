export default function _Card({ title, children }) {
  return (
    <div className="bg-gray-800 rounded-xl mb-3 mx-3 p-4">
      <h2 className="font-bold text-2xl">{title}</h2>
      <div className="ml-6 my-3">{children}</div>
    </div>
  );
}
