export default function Inputs({ id, placeholder, type }) {
  return (
    <input
      className="p-2 text-sm border rounded-md border-b-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 peer"
      id={id}
      type={type}
      placeholder={placeholder}
      required
    />
  );
}
