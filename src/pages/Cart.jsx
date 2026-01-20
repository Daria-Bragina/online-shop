import CartForm from "../UI/CartForm";
import Label from "../UI/Label";
import Inputs from "../UI/Inputs";

function Cart() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="max-w-md p-5 py-16 mx-auto">
      <h1 className="mb-6 text-2xl font-bold text-center">Shopping Cart</h1>

      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">Your Items:</h2>
        <ul className="space-y-2">
          <li className="flex items-center justify-between pb-2 border-b">
            <span>Product 1</span>
            <span>$25</span>
          </li>
          <li className="flex items-center justify-between pb-2 border-b">
            <span>Product 2</span>
            <span>$45</span>
          </li>
        </ul>
        <p className="mt-4 font-medium text-md">Total: $70</p>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-lg font-semibold">Enter Your Details:</h2>

        {/* Поле Name */}
        <CartForm>
          <Inputs
            id={"name"}
            type={"text"}
            placeholder={"Enter your full name"}
          />
          <Label htmlFor={"name"}>Name</Label>
        </CartForm>

        {/* Поле Email */}
        <CartForm>
          <Inputs
            id={"email"}
            type={"email"}
            placeholder={"Enter your email address"}
          />
          <Label htmlFor={"email"}>Email</Label>
        </CartForm>

        {/* Поле Address */}
        <CartForm>
          <textarea
            className="p-2 text-sm border rounded-md border-b-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 peer"
            id="address"
            placeholder="Enter your delivery address"
            rows="3"
            required
          ></textarea>
          <Label htmlFor={"address"}>Address</Label>
        </CartForm>

        {/* Поле Payment */}
        <CartForm>
          <select
            className="p-2 text-sm border rounded-md border-b-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 peer"
            id="payment"
            required
          >
            <option value="" disabled>
              Select payment method
            </option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
          </select>
          <Label htmlFor={"payment"}>Payment Method</Label>
        </CartForm>

        {/* Кнопка Submit */}
        <button
          className="w-full px-4 py-2 text-sm text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
          type="submit"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Cart;
