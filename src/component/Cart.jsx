import { toast } from "react-toastify";
import empty from "../assets/emptyimg.jpg";

const Cart = ({carts, setCarts}) => {
  let totalPrice = 0;
  carts.forEach((item) => {
    totalPrice += item.price;
  });


  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.success("Item removed!");
  };

  return (
    <div className="max-w-[1200px] border-2 border-gray-100 mx-auto p-6 rounded-xl">
      <h1 className="text-xl font-semibold mb-6">Your Cart</h1>

      {carts.length === 0 ? (
        <>
          <img src={empty} alt="" className="h-40 w-40 my-10 mx-auto" />
          <p className="text-center text-lg text-gray-500">Cart is empty</p>
        </>
      ) : (
        <>
          <div className="space-y-4">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-full p-2 shadow-md w-12 h-12 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-slate-500 text-lg">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(item)}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>


          <div className="flex justify-between mt-8">
            <span className="text-sm text-slate-500">Total:</span>
            <span className="text-2xl font-bold">${totalPrice}</span>
          </div>


          <button
            onClick={handlePayment}
            className="mt-6 w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-full font-semibold text-lg hover:opacity-90 transition"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
