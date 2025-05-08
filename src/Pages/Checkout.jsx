// // import React from "react";
// // import { useCart } from "../Context/CartContext";
// // import Headline from "../Components/Headline";
// // import Small_nav from "../Components/Small_nav";
// // import Title from "../Components/Title";
// // import Navbar from "../Components/Navbar";
// // import { useNavigate } from "react-router-dom";
// // import { PayPalButtons } from "@paypal/react-paypal-js";
// // import { toast } from "react-toastify";
// // import jsPDF from "jspdf";
// // import "jspdf-autotable";
// // import emailjs from "emailjs-com";

// // const Checkout = () => {
// //   const { cartItems, clearCart } = useCart();
// //   const navigate = useNavigate();

// //   const totalPrice = cartItems.reduce((total, item) => {
// //     return (
// //       total + item.quantity * parseFloat(item.price?.replace(/[^\d.]/g, ""))
// //     );
// //   }, 0);

// //   const handlePaymentSuccess = async (details) => {
// //     toast.success(`Transaction completed by ${details.payer.name.given_name}`);
// //     console.log("PayPal Details:", details); // Log full response

// //     const orderData = {
// //       items: cartItems,
// //     };

// //     const paymentData = {
// //       totalPrice: totalPrice.toFixed(2),
// //       paymentStatus: "Completed",
// //       transactionId: details.id,
// //       date: new Date().toISOString(),
// //     };

// //     try {
// //       const orderRes = await fetch("http://localhost:3000/orders", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(orderData),
// //       });

// //       if (!orderRes.ok) throw new Error("Failed to save order.");

// //       const paymentRes = await fetch("http://localhost:3000/payments", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(paymentData),
// //       });

// //       if (!paymentRes.ok) throw new Error("Failed to save payment.");

// //       clearCart();
// //       toast.success("Order & Payment recorded successfully.");

// //       // Log details.payer to check the full response structure
// //       console.log("Payer Details:", details.payer); // Check if email is present

// //       const emailParams = {
// //         user_name: details.payer.name.given_name,
// //         user_email: details.payer.email_address, // Ensure email is available
// //         amount: totalPrice.toFixed(2),
// //         transaction_id: details.id,
// //         date: new Date().toLocaleDateString(),
// //       };

// //       console.log("Sending email to:", emailParams.user_email); // Check email before sending

// //       // Fallback if email is missing
// //       if (!emailParams.user_email) {
// //         emailParams.user_email = "fallback-email@example.com"; // Fallback email
// //         console.warn("User email is missing. Using fallback email.");
// //       }

// //       // Send email only if user_email exists
// //       if (emailParams.user_email) {
// //         emailjs
// //           .send(
// //             "service_gviwnz8", // Your service ID
// //             "template_mtsoasi", // Your template ID
// //             emailParams, // Parameters for the template
// //             "fn_0x05l8LTqKIoXX" // Your user ID
// //           )
// //           .then(
// //             (response) => {
// //               console.log("Email sent successfully:", response);
// //               toast.success("Payment confirmation email sent!");
// //             },
// //             (error) => {
// //               console.error("Failed to send email:", error);
// //               toast.error("Failed to send confirmation email.");
// //               console.error("Error details:", error.text);
// //             }
// //           );
// //       } else {
// //         console.error("Email address is missing in the payment details.");
// //         toast.error("Failed to send email. Missing recipient email address.");
// //       }

// //       navigate("/thankyou");
// //     } catch (error) {
// //       console.error("Checkout error:", error);
// //       toast.error("Failed to save order or payment.");
// //     }
// //   };

// //   const generateBill = () => {
// //     const doc = new jsPDF();

// //     // Header
// //     doc.setFontSize(20);
// //     doc.text("Clumsy Carrot Pvt. Ltd.", 14, 20);
// //     doc.setFontSize(12);
// //     doc.text(`Invoice #: INV-${Date.now()}`, 14, 30);
// //     doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 36);

// //     // Table
// //     doc.autoTable({
// //       startY: 45,
// //       head: [["#", "Product", "Quantity", "Price", "Total"]],
// //       body: cartItems.map((item, index) => {
// //         const price = parseFloat(item.price?.replace(/[^\d.]/g, ""));
// //         return [
// //           index + 1,
// //           item.brand,
// //           item.quantity,
// //           `₹${price.toFixed(2)}`,
// //           `₹${(item.quantity * price).toFixed(2)}`,
// //         ];
// //       }),
// //       styles: { fontSize: 11, halign: "center" },
// //       headStyles: { fillColor: [34, 139, 230], textColor: 255 },
// //     });

// //     // Footer
// //     const finalY = doc.lastAutoTable.finalY || 60;
// //     doc.text(`Grand Total: ₹${totalPrice.toFixed(2)}`, 150, finalY + 10);
// //     doc.text("Thank you for shopping with us!", 14, finalY + 30);

// //     doc.save("Invoice.pdf");
// //   };

// //   return (
// //     <div style={{ backgroundColor: "#f9fafb", paddingBottom: "4rem" }}>
// //       <Headline />
// //       <Small_nav />
// //       <Title />
// //       <Navbar />

// //       <div style={{ padding: "2rem", maxWidth: "1120px", margin: "auto" }}>
// //         <h1
// //           style={{
// //             fontSize: "1.75rem",
// //             fontWeight: "700",
// //             marginBottom: "2rem",
// //           }}
// //         >
// //           Checkout
// //         </h1>

// //         {/* Order Summary */}
// //         <div
// //           style={{
// //             background: "#fff",
// //             padding: "2rem",
// //             marginBottom: "2rem",
// //             borderRadius: "0.5rem",
// //           }}
// //         >
// //           <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
// //             Order Summary
// //           </h2>
// //           {cartItems.map((item, idx) => (
// //             <div
// //               key={idx}
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "space-between",
// //                 padding: "1rem 0",
// //               }}
// //             >
// //               <div style={{ display: "flex", gap: "1rem" }}>
// //                 <img
// //                   src={item.image} // assuming `item.imageUrl` contains the image URL
// //                   alt={item.brand}
// //                   style={{ width: "50px", height: "50px", objectFit: "cover" }}
// //                 />
// //                 <div>
// //                   <p style={{ fontWeight: "600" }}>
// //                     Product Name: {item.brand}
// //                   </p>
// //                   <p>Quantity: {item.quantity}</p>
// //                 </div>
// //               </div>
// //               <p>
// //                 ₹
// //                 {(
// //                   item.quantity * parseFloat(item.price?.replace(/[^\d.]/g, ""))
// //                 ).toLocaleString()}
// //               </p>
// //             </div>
// //           ))}

// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "space-between",
// //               fontWeight: "600",
// //               marginTop: "1rem",
// //             }}
// //           >
// //             <p>Total:</p>
// //             <p>₹{totalPrice.toLocaleString()}</p>
// //           </div>
// //         </div>

// //         {/* Buttons */}
// //         <div
// //           style={{
// //             display: "flex",
// //             justifyContent: "center",
// //             gap: "1rem",
// //             marginTop: "2rem",
// //             flexWrap: "wrap",
// //           }}
// //         >
// //           <button
// //             onClick={generateBill}
// //             style={{
// //               padding: "0.75rem 1.5rem",
// //               backgroundColor: "#2563eb",
// //               color: "#fff",
// //               border: "none",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //               fontSize: "1rem",
// //             }}
// //           >
// //             Generate Bill
// //           </button>

// //           <div style={{ minWidth: "300px" }}>
// //             <PayPalButtons
// //               style={{ layout: "horizontal" }}
// //               createOrder={(data, actions) => {
// //                 return actions.order.create({
// //                   purchase_units: [
// //                     {
// //                       amount: {
// //                         value: totalPrice.toFixed(2),
// //                         currency_code: "USD",
// //                       },
// //                     },
// //                   ],
// //                 });
// //               }}
// //               onApprove={(data, actions) => {
// //                 return actions.order.capture().then((details) => {
// //                   handlePaymentSuccess(details);
// //                 });
// //               }}
// //               onError={(err) => {
// //                 console.error("PayPal Checkout onError", err);
// //                 toast.error("Payment failed. Please try again.");
// //               }}
// //             />
// //           </div>
// //         </div>
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
// import { toast } from "react-toastify";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import emailjs from "emailjs-com";

// const Checkout = () => {
//   const { cartItems, clearCart } = useCart();
//   const navigate = useNavigate();
//   const [userEmail, setUserEmail] = useState("");

//   const totalPrice = cartItems.reduce((total, item) => {
//     return (
//       total + item.quantity * parseFloat(item.price?.replace(/[^\d.]/g, ""))
//     );
//   }, 0);

//   const handlePaymentSuccess = async (details) => {
//     toast.success(`Transaction completed by ${details.payer.name.given_name}`);
//     console.log("PayPal Details:", details);

//     const orderData = {
//       items: cartItems,
//       email: userEmail,
//     };

//     const paymentData = {
//       totalPrice: totalPrice.toFixed(2),
//       paymentStatus: "Completed",
//       transactionId: details.id,
//       date: new Date().toISOString(),
//     };

//     try {
//       const orderRes = await fetch("http://localhost:3000/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       if (!orderRes.ok) throw new Error("Failed to save order.");

//       const paymentRes = await fetch("http://localhost:3000/payments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(paymentData),
//       });

//       if (!paymentRes.ok) throw new Error("Failed to save payment.");

//       clearCart();
//       toast.success("Order & Payment recorded successfully.");

//       const emailParams = {
//         user_name: details.payer.name.given_name,
//         user_email:
//           userEmail ||
//           details.payer.email_address ||
//           "fallback-email@example.com",
//         amount: totalPrice.toFixed(2),
//         transaction_id: details.id,
//         date: new Date().toLocaleDateString(),
//       };

//       if (
//         !emailParams.user_email ||
//         emailParams.user_email === "fallback-email@example.com"
//       ) {
//         toast.warn("User email is missing, using fallback.");
//       }

//       emailjs
//         .send(
//           "service_gviwnz8",
//           "template_mtsoasi",
//           emailParams,
//           "fn_0x05l8LTqKIoXX"
//         )
//         .then(
//           (response) => {
//             console.log("Email sent successfully:", response);
//             toast.success("Payment confirmation email sent!");
//           },
//           (error) => {
//             console.error("Failed to send email:", error);
//             toast.error("Failed to send confirmation email.");
//           }
//         );

//       navigate("/thankyou");
//     } catch (error) {
//       console.error("Checkout error:", error);
//       toast.error("Failed to save order or payment.");
//     }
//   };

//   const generateBill = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(20);
//     doc.text("Clumsy Carrot Pvt. Ltd.", 14, 20);
//     doc.setFontSize(12);
//     doc.text(`Invoice #: INV-${Date.now()}`, 14, 30);
//     doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 36);

//     doc.autoTable({
//       startY: 45,
//       head: [["#", "Product", "Quantity", "Price", "Total"]],
//       body: cartItems.map((item, index) => {
//         const price = parseFloat(item.price?.replace(/[^\d.]/g, ""));
//         return [
//           index + 1,
//           item.brand,
//           item.quantity,
//           `₹${price.toFixed(2)}`,
//           `₹${(item.quantity * price).toFixed(2)}`,
//         ];
//       }),
//       styles: { fontSize: 11, halign: "center" },
//       headStyles: { fillColor: [34, 139, 230], textColor: 255 },
//     });

//     const finalY = doc.lastAutoTable.finalY || 60;
//     doc.text(`Grand Total: ₹${totalPrice.toFixed(2)}`, 150, finalY + 10);
//     doc.text("Thank you for shopping with us!", 14, finalY + 30);
//     doc.save("Invoice.pdf");
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

//         {/* Email Input */}
//         <div style={{ marginBottom: "1rem" }}>
//           <label htmlFor="email" style={{ fontWeight: "600" }}>
//             Your Email (for confirmation):
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={userEmail}
//             onChange={(e) => setUserEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//             style={{
//               padding: "0.5rem",
//               width: "100%",
//               marginTop: "0.5rem",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//             }}
//           />
//         </div>

//         {/* Order Summary */}
//         <div
//           style={{
//             background: "#fff",
//             padding: "2rem",
//             marginBottom: "2rem",
//             borderRadius: "0.5rem",
//           }}
//         >
//           <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
//             Order Summary
//           </h2>
//           {cartItems.map((item, idx) => (
//             <div
//               key={idx}
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 padding: "1rem 0",
//               }}
//             >
//               <div style={{ display: "flex", gap: "1rem" }}>
//                 <img
//                   src={item.image}
//                   alt={item.brand}
//                   style={{ width: "50px", height: "50px", objectFit: "cover" }}
//                 />
//                 <div>
//                   <p style={{ fontWeight: "600" }}>
//                     Product Name: {item.brand}
//                   </p>
//                   <p>Quantity: {item.quantity}</p>
//                 </div>
//               </div>
//               <p>
//                 ₹
//                 {(
//                   item.quantity * parseFloat(item.price?.replace(/[^\d.]/g, ""))
//                 ).toLocaleString()}
//               </p>
//             </div>
//           ))}

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               fontWeight: "600",
//               marginTop: "1rem",
//             }}
//           >
//             <p>Total:</p>
//             <p>₹{totalPrice.toLocaleString()}</p>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "1rem",
//             marginTop: "2rem",
//             flexWrap: "wrap",
//           }}
//         >
//           <button
//             onClick={generateBill}
//             style={{
//               padding: "0.75rem 1.5rem",
//               backgroundColor: "#2563eb",
//               color: "#fff",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             Generate Bill
//           </button>

//           <div style={{ minWidth: "300px" }}>
//             <PayPalButtons
//               style={{ layout: "horizontal" }}
//               createOrder={(data, actions) => {
//                 return actions.order.create({
//                   purchase_units: [
//                     {
//                       amount: {
//                         value: totalPrice.toFixed(2),
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
//                 toast.error("Payment failed. Please try again.");
//               }}
//             />
//           </div>
//         </div>
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
import jsPDF from "jspdf";
import "jspdf-autotable";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  const totalPrice = cartItems.reduce((total, item) => {
    return (
      total + item.quantity * parseFloat(item.price?.replace(/[^\d.]/g, ""))
    );
  }, 0);

  const handlePaymentSuccess = async (details) => {
    toast.success(`Transaction completed by ${details.payer.name.given_name}`);
    console.log("PayPal Details:", details);

    const orderData = {
      items: cartItems,
      email: userEmail,
    };

    const paymentData = {
      totalPrice: totalPrice.toFixed(2),
      paymentStatus: "Completed",
      transactionId: details.id,
      date: new Date().toISOString(),
    };

    try {
      const orderRes = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!orderRes.ok) throw new Error("Failed to save order.");

      const paymentRes = await fetch("http://localhost:3000/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      });

      if (!paymentRes.ok) throw new Error("Failed to save payment.");

      clearCart();
      toast.success("Order & Payment recorded successfully.");
      const emailParams = {
        name: details.payer.name.given_name,
        email:
          userEmail ||
          details.payer.email_address ||
          "fallback-email@example.com",
        amount: totalPrice.toFixed(2),
        card: "PayPal", // optional
        date: new Date().toLocaleDateString(),
      };

      if (
        !emailParams.user_email ||
        emailParams.user_email === "fallback-email@example.com"
      ) {
        toast.warn("User email is missing, using fallback.");
      }

      emailjs
        .send(
          "service_gviwnz8",
          "template_mtsoasi",
          emailParams,
          "fn_0x05l8LTqKIoXX"
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            toast.success("Payment confirmation email sent!");
          },
          (error) => {
            console.error("Failed to send email:", error);
            toast.error("Failed to send confirmation email.");
          }
        );

      navigate("/thankyou");
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to save order or payment.");
    }
  };

  const generateBill = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Clumsy Carrot Pvt. Ltd.", 14, 20);
    doc.setFontSize(12);
    doc.text(`Invoice #: INV-${Date.now()}`, 14, 30);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 36);

    doc.autoTable({
      startY: 45,
      head: [["#", "Product", "Quantity", "Price", "Total"]],
      body: cartItems.map((item, index) => {
        const price = parseFloat(item.price?.replace(/[^\d.]/g, ""));
        return [
          index + 1,
          item.brand,
          item.quantity,
          `₹${price.toFixed(2)}`,
          `₹${(item.quantity * price).toFixed(2)}`,
        ];
      }),
      styles: { fontSize: 11, halign: "center" },
      headStyles: { fillColor: [34, 139, 230], textColor: 255 },
    });

    const finalY = doc.lastAutoTable.finalY || 60;
    doc.text(`Grand Total: ₹${totalPrice.toFixed(2)}`, 150, finalY + 10);
    doc.text("Thank you for shopping with us!", 14, finalY + 30);
    doc.save("Invoice.pdf");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ backgroundColor: "#f9fafb", paddingBottom: "4rem" }}
    >
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

        {/* Email Input */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email" style={{ fontWeight: "600" }}>
            Your Email (for confirmation):
          </label>
          <input
            type="email"
            id="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{
              padding: "0.5rem",
              width: "100%",
              marginTop: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
          >
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                  background: "#f0f4f8",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.brand}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginBottom: "1rem",
                  }}
                />
                <p style={{ fontWeight: "600" }}>{item.brand}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  ₹
                  {(
                    item.quantity *
                    parseFloat(item.price?.replace(/[^\d.]/g, ""))
                  ).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

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

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          <motion.button
            onClick={generateBill}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Generate Bill
          </motion.button>

          <div style={{ minWidth: "300px" }}>
            <PayPalButtons
              style={{ layout: "horizontal" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: totalPrice.toFixed(2),
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
                toast.error("Payment failed. Please try again.");
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
