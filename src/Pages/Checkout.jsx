// // import React, { useState } from "react";
// // import { useCart } from "../Context/CartContext";
// // import Headline from "../Components/Headline";
// // import Small_nav from "../Components/Small_nav";
// // import Title from "../Components/Title";
// // import Navbar from "../Components/Navbar";
// // import { useNavigate } from "react-router-dom";

// // const Checkout = () => {
// //   const { cartItems, clearCart } = useCart(); // Assuming `clearCart` is a method in CartContext
// //   const [billingInfo, setBillingInfo] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     address: "",
// //     city: "",
// //     zip: "",
// //     country: "",
// //   });

// //   const navigate = useNavigate();

// //   // Calculate the total price of all items in the cart
// //   const totalPrice = cartItems.reduce((total, item) => {
// //     return (
// //       total + item.quantity * parseFloat(item.price?.replace(/[^\d.]/g, ""))
// //     );
// //   }, 0);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setBillingInfo({ ...billingInfo, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert("Order submitted!");
// //     clearCart(); // Clear the cart after submitting the order
// //     navigate("/"); // Navigate to home page
// //   };

// //   return (
// //     <div style={{ backgroundColor: "#f9fafb", paddingBottom: "4rem" }}>
// //       <Headline />
// //       <Small_nav />
// //       <Title />
// //       <Navbar />
// //       <div
// //         style={{
// //           padding: "2rem",
// //           maxWidth: "1120px",
// //           margin: "auto",
// //           fontFamily: "sans-serif",
// //           fontSize: "0.875rem",
// //           color: "#1a1a1a",
// //         }}
// //       >
// //         <h1
// //           style={{
// //             fontSize: "1.75rem",
// //             fontWeight: "700",
// //             marginBottom: "2rem",
// //             color: "#111",
// //           }}
// //         >
// //           Checkout
// //         </h1>

// //         <form onSubmit={handleSubmit}>
// //           {/* Billing Information Section */}
// //           <div
// //             style={{
// //               background: "#fff",
// //               borderRadius: "0.5rem",
// //               boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
// //               padding: "2rem",
// //               marginBottom: "2rem",
// //             }}
// //           >
// //             <h2
// //               style={{ fontSize: "1.5rem", fontWeight: "600", color: "#333" }}
// //             >
// //               Billing Information
// //             </h2>
// //             <div style={{ marginBottom: "1rem" }}>
// //               <label style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
// //                 Full Name:
// //               </label>
// //               <input
// //                 type="text"
// //                 name="fullName"
// //                 value={billingInfo.fullName}
// //                 onChange={handleInputChange}
// //                 required
// //                 style={{
// //                   width: "100%",
// //                   padding: "1rem",
// //                   border: "1px solid #e0e0e0",
// //                   borderRadius: "0.375rem",
// //                   marginBottom: "1rem",
// //                   fontSize: "1rem",
// //                   color: "#333",
// //                 }}
// //               />
// //             </div>

// //             {["email", "phone", "address", "city", "zip", "country"].map(
// //               (field, idx) => (
// //                 <div key={idx} style={{ marginBottom: "1rem" }}>
// //                   <label
// //                     style={{
// //                       fontWeight: "600",
// //                       marginBottom: "0.5rem",
// //                     }}
// //                   >
// //                     {field.charAt(0).toUpperCase() + field.slice(1)}:
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name={field}
// //                     value={billingInfo[field]}
// //                     onChange={handleInputChange}
// //                     required
// //                     style={{
// //                       width: "100%",
// //                       padding: "1rem",
// //                       border: "1px solid #e0e0e0",
// //                       borderRadius: "0.375rem",
// //                       fontSize: "1rem",
// //                       color: "#333",
// //                     }}
// //                   />
// //                 </div>
// //               )
// //             )}
// //           </div>

// //           {/* Order Summary Section */}
// //           <div
// //             style={{
// //               background: "#fff",
// //               borderRadius: "0.5rem",
// //               boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
// //               padding: "2rem",
// //               marginBottom: "2rem",
// //             }}
// //           >
// //             <h2
// //               style={{ fontSize: "1.5rem", fontWeight: "600", color: "#333" }}
// //             >
// //               Order Summary
// //             </h2>
// //             {cartItems.map((item, index) => (
// //               <div
// //                 key={index}
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   padding: "1rem 0",
// //                   borderBottom: "1px solid #f0f0f0",
// //                 }}
// //               >
// //                 <div>
// //                   <p style={{ fontWeight: "600", fontSize: "1rem" }}>
// //                     {item.name}
// //                   </p>
// //                   <p>Quantity: {item.quantity}</p>
// //                 </div>
// //                 <div>
// //                   <p>
// //                     INR{" "}
// //                     {(
// //                       item.quantity *
// //                       parseFloat(item.price?.replace(/[^\d.]/g, ""))
// //                     ).toLocaleString()}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //             <div
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "space-between",
// //                 padding: "1rem 0",
// //                 fontWeight: "600",
// //               }}
// //             >
// //               <p>Total:</p>
// //               <p>INR {totalPrice.toLocaleString()}</p>
// //             </div>
// //           </div>

// //           {/* Proceed to Payment Button */}
// //           <div style={{ textAlign: "center" }}>
// //             <button
// //               type="submit"
// //               style={{
// //                 padding: "1rem 2rem",
// //                 backgroundColor: "#2563eb",
// //                 color: "#fff",
// //                 border: "none",
// //                 borderRadius: "0.375rem",
// //                 cursor: "pointer",
// //                 fontSize: "1rem",
// //                 transition: "background-color 0.3s",
// //               }}
// //               onMouseEnter={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
// //               onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
// //             >
// //               Proceed to Payment
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Checkout;

// import React, { useState } from "react";
// import { useCart } from "../Context/CartContext";
// import Headline from "../Components/Headline";
// import Small_nav from "../Components/Small_nav";
// import Title from "../Components/Title";
// import Navbar from "../Components/Navbar";
// import { useNavigate } from "react-router-dom";
// import { PayPalButtons } from "@paypal/react-paypal-js";

// const Checkout = () => {
//   const { cartItems, clearCart } = useCart();
//   const [billingInfo, setBillingInfo] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     zip: "",
//     country: "",
//   });

//   const navigate = useNavigate();

//   const totalPrice = cartItems.reduce((total, item) => {
//     return (
//       total + item.quantity * parseFloat(item.price?.replace(/[^\d.]/g, ""))
//     );
//   }, 0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBillingInfo({ ...billingInfo, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Please complete payment using PayPal.");
//   };

//   const handlePaymentSuccess = (details) => {
//     alert(`Transaction completed by ${details.payer.name.given_name}`);
//     clearCart();
//     navigate("/");
//   };

//   return (
//     <div style={{ backgroundColor: "#f9fafb", paddingBottom: "4rem" }}>
//       <Headline />
//       <Small_nav />
//       <Title />
//       <Navbar />
//       <div style={{ padding: "2rem", maxWidth: "1120px", margin: "auto" }}>
//         <h1
//           style={{
//             fontSize: "1.75rem",
//             fontWeight: "700",
//             marginBottom: "2rem",
//           }}
//         >
//           Checkout
//         </h1>

//         <form onSubmit={handleSubmit}>
//           {/* Billing Info */}
//           <div
//             style={{
//               background: "#fff",
//               padding: "2rem",
//               marginBottom: "2rem",
//               borderRadius: "0.5rem",
//             }}
//           >
//             <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
//               Billing Information
//             </h2>
//             {[
//               "fullName",
//               "email",
//               "phone",
//               "address",
//               "city",
//               "zip",
//               "country",
//             ].map((field, idx) => (
//               <div key={idx} style={{ marginBottom: "1rem" }}>
//                 <label style={{ fontWeight: "600" }}>
//                   {field.charAt(0).toUpperCase() + field.slice(1)}:
//                 </label>
//                 <input
//                   type="text"
//                   name={field}
//                   value={billingInfo[field]}
//                   onChange={handleInputChange}
//                   required
//                   style={{
//                     width: "100%",
//                     padding: "1rem",
//                     border: "1px solid #e0e0e0",
//                     borderRadius: "0.375rem",
//                     fontSize: "1rem",
//                   }}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Order Summary */}
//           <div
//             style={{
//               background: "#fff",
//               padding: "2rem",
//               marginBottom: "2rem",
//               borderRadius: "0.5rem",
//             }}
//           >
//             <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
//               Order Summary
//             </h2>
//             {cartItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   padding: "1rem 0",
//                 }}
//               >
//                 <div>
//                   <p style={{ fontWeight: "600" }}>{item.name}</p>
//                   <p>Quantity: {item.quantity}</p>
//                 </div>
//                 <p>
//                   ₹
//                   {(
//                     item.quantity *
//                     parseFloat(item.price?.replace(/[^\d.]/g, ""))
//                   ).toLocaleString()}
//                 </p>
//               </div>
//             ))}
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 fontWeight: "600",
//                 marginTop: "1rem",
//               }}
//             >
//               <p>Total:</p>
//               <p>₹{totalPrice.toLocaleString()}</p>
//             </div>
//           </div>

//           {/* PayPal Button */}
//           <div style={{ textAlign: "center", marginTop: "2rem" }}>
//             <PayPalButtons
//               style={{ layout: "horizontal" }}
//               createOrder={(data, actions) => {
//                 return actions.order.create({
//                   purchase_units: [
//                     {
//                       amount: {
//                         value: totalPrice.toFixed(2), // Convert to USD if needed
//                         currency_code: "USD",
//                       },
//                     },
//                   ],
//                 });
//               }}
//               onApprove={(data, actions) => {
//                 return actions.order.capture().then((details) => {
//                   handlePaymentSuccess(details);
//                 });
//               }}
//               onError={(err) => {
//                 console.error("PayPal Checkout onError", err);
//                 alert("Payment failed. Try again.");
//               }}
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// import React, { useState } from "react";
// import { useCart } from "../Context/CartContext";
// import Headline from "../Components/Headline";
// import Small_nav from "../Components/Small_nav";
// import Title from "../Components/Title";
// import Navbar from "../Components/Navbar";
// import { useNavigate } from "react-router-dom";
// import { PayPalButtons } from "@paypal/react-paypal-js";
// import { toast } from "react-toastify";

// const Checkout = () => {
//   const { cartItems, clearCart } = useCart();
//   const [billingInfo, setBillingInfo] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     zip: "",
//     country: "",
//   });

//   const navigate = useNavigate();

//   const totalPrice = cartItems.reduce((total, item) => {
//     return (
//       total + item.quantity * parseFloat(item.price?.replace(/[^\d.]/g, ""))
//     );
//   }, 0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBillingInfo({ ...billingInfo, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Please complete payment using PayPal.");
//   };

//   const handlePaymentSuccess = (details) => {
//     alert(`Transaction completed by ${details.payer.name.given_name}`);

//     // Prepare order data
//     const orderData = {
//       fullName: billingInfo.fullName,
//       email: billingInfo.email,
//       phone: billingInfo.phone,
//       address: billingInfo.address,
//       city: billingInfo.city,
//       zip: billingInfo.zip,
//       country: billingInfo.country,
//       items: cartItems,
//       totalPrice: totalPrice.toFixed(2),
//       paymentStatus: "Completed",
//       transactionId: details.id,
//       date: new Date(),
//     };

//     // Save the order to JSON Server
//     fetch("  http://localhost:3000/orders", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderData),
//     })
//       .then((response) => response.json())
//       .then(() => {
//         clearCart(); // Clear the cart after submitting the order
//         toast.success("payment successfull");
//       })
//       .catch((error) => console.error("Error saving order:", error));
//   };

//   return (
//     <div style={{ backgroundColor: "#f9fafb", paddingBottom: "4rem" }}>
//       <Headline />
//       <Small_nav />
//       <Title />
//       <Navbar />
//       <div style={{ padding: "2rem", maxWidth: "1120px", margin: "auto" }}>
//         <h1
//           style={{
//             fontSize: "1.75rem",
//             fontWeight: "700",
//             marginBottom: "2rem",
//           }}
//         >
//           Checkout
//         </h1>

//         <form onSubmit={handleSubmit}>
//           {/* Billing Info */}
//           <div
//             style={{
//               background: "#fff",
//               padding: "2rem",
//               marginBottom: "2rem",
//               borderRadius: "0.5rem",
//             }}
//           >
//             <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
//               Billing Information
//             </h2>
//             {[
//               "fullName",
//               "email",
//               "phone",
//               "address",
//               "city",
//               "zip",
//               "country",
//             ].map((field, idx) => (
//               <div key={idx} style={{ marginBottom: "1rem" }}>
//                 <label style={{ fontWeight: "600" }}>
//                   {field.charAt(0).toUpperCase() + field.slice(1)}:
//                 </label>
//                 <input
//                   type="text"
//                   name={field}
//                   value={billingInfo[field]}
//                   onChange={handleInputChange}
//                   required
//                   style={{
//                     width: "100%",
//                     padding: "1rem",
//                     border: "1px solid #e0e0e0",
//                     borderRadius: "0.375rem",
//                     fontSize: "1rem",
//                   }}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Order Summary */}
//           <div
//             style={{
//               background: "#fff",
//               padding: "2rem",
//               marginBottom: "2rem",
//               borderRadius: "0.5rem",
//             }}
//           >
//             <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
//               Order Summary
//             </h2>
//             {cartItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   padding: "1rem 0",
//                 }}
//               >
//                 <div>
//                   <p style={{ fontWeight: "600" }}>{item.name}</p>
//                   <p>Quantity: {item.quantity}</p>
//                 </div>
//                 <p>
//                   ₹
//                   {(
//                     item.quantity *
//                     parseFloat(item.price?.replace(/[^\d.]/g, ""))
//                   ).toLocaleString()}
//                 </p>
//               </div>
//             ))}
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 fontWeight: "600",
//                 marginTop: "1rem",
//               }}
//             >
//               <p>Total:</p>
//               <p>₹{totalPrice.toLocaleString()}</p>
//             </div>
//           </div>

//           {/* PayPal Button */}
//           <div style={{ textAlign: "center", marginTop: "2rem" }}>
//             <PayPalButtons
//               style={{ layout: "horizontal" }}
//               createOrder={(data, actions) => {
//                 return actions.order.create({
//                   purchase_units: [
//                     {
//                       amount: {
//                         value: totalPrice.toFixed(2), // Convert to USD if needed
//                         currency_code: "USD",
//                       },
//                     },
//                   ],
//                 });
//               }}
//               onApprove={(data, actions) => {
//                 return actions.order.capture().then((details) => {
//                   handlePaymentSuccess(details);
//                 });
//               }}
//               onError={(err) => {
//                 console.error("PayPal Checkout onError", err);
//                 alert("Payment failed. Try again.");
//               }}
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => {
    return (
      total + item.quantity * parseFloat(item.price?.replace(/[^\d.]/g, ""))
    );
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Please complete payment using PayPal.");
  };

  const handlePaymentSuccess = (details) => {
    alert(`Transaction completed by ${details.payer.name.given_name}`);

    // Prepare order data
    const orderData = {
      fullName: billingInfo.fullName,
      email: billingInfo.email,
      phone: billingInfo.phone,
      address: billingInfo.address,
      city: billingInfo.city,
      zip: billingInfo.zip,
      country: billingInfo.country,
      items: cartItems,
      totalPrice: totalPrice.toFixed(2),
      paymentStatus: "Completed",
      transactionId: details.id,
      date: new Date(),
    };

    // Save the order to JSON Server
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then(() => {
        // Prepare payment data
        const paymentData = {
          totalPrice: totalPrice.toFixed(2),
          paymentStatus: "Completed",
          transactionId: details.id,
          date: new Date(),
        };

        // Save the payment data to JSON Server
        fetch("http://localhost:3000/payments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        })
          .then((response) => response.json())
          .then(() => {
            clearCart(); // Clear the cart after submitting the order
            toast.success("Payment successful");
            navigate("/thank-you"); // Navigate to thank you page or confirmation
          })
          .catch((error) => console.error("Error saving payment:", error));
      })
      .catch((error) => console.error("Error saving order:", error));
  };

  return (
    <div style={{ backgroundColor: "#f9fafb", paddingBottom: "4rem" }}>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />
      <div style={{ padding: "2rem", maxWidth: "1120px", margin: "auto" }}>
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            marginBottom: "2rem",
          }}
        >
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Billing Info */}
          <div
            style={{
              background: "#fff",
              padding: "2rem",
              marginBottom: "2rem",
              borderRadius: "0.5rem",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              Billing Information
            </h2>
            {[
              "fullName",
              "email",
              "phone",
              "address",
              "city",
              "zip",
              "country",
            ].map((field, idx) => (
              <div key={idx} style={{ marginBottom: "1rem" }}>
                <label style={{ fontWeight: "600" }}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                </label>
                <input
                  type="text"
                  name={field}
                  value={billingInfo[field]}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "1rem",
                    border: "1px solid #e0e0e0",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div
            style={{
              background: "#fff",
              padding: "2rem",
              marginBottom: "2rem",
              borderRadius: "0.5rem",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              Order Summary
            </h2>
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "1rem 0",
                }}
              >
                <div>
                  <p style={{ fontWeight: "600" }}>{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p>
                  ₹
                  {(
                    item.quantity *
                    parseFloat(item.price?.replace(/[^\d.]/g, ""))
                  ).toLocaleString()}
                </p>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "600",
                marginTop: "1rem",
              }}
            >
              <p>Total:</p>
              <p>₹{totalPrice.toLocaleString()}</p>
            </div>
          </div>

          {/* PayPal Button */}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <PayPalButtons
              style={{ layout: "horizontal" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: totalPrice.toFixed(2), // Convert to USD if needed
                        currency_code: "USD",
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  handlePaymentSuccess(details);
                });
              }}
              onError={(err) => {
                console.error("PayPal Checkout onError", err);
                alert("Payment failed. Try again.");
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
