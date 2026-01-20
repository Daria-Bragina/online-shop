export default function Label({ children, htmlFor }) {
  return (
    <label
      className="text-sm text-gray-500 peer-placeholder-shown:text-gray-400 peer-focus:text-blue-500"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
