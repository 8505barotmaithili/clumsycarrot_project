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
    toast.success(`Transaction completed}`);
    console.log("PayPal Details:", details);

    const orderData = {
      items: cartItems,
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

      const paymentRes = await fetch("http://localhost:3000/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      });

      clearCart();

      toast.success("Order & Payment recorded successfully.");

      const emailParams = {
        name: details.payer.name.given_name,
        email:
          userEmail ||
          details.payer.email_address ||
          "fallback-email@example.com",
        amount: totalPrice.toFixed(2),
        card: "PayPal",
        date: new Date().toLocaleDateString(),
      };

      emailjs
        .send(
          "service_gviwnz8",
          "template_mtsoasi",
          emailParams,
          "fn_0x05l8LTqKIoXX"
        )
        .then(
          (response) => {
            console.log(response);
            toast.success("Payment confirmation email sent!");
          },
          (error) => {
            console.error(error);
            toast.error("Failed to send confirmation email.");
          }
        );

      navigate("/thankyou");
    } catch (error) {
      console.error(error);
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

      <div
        style={{
          padding: "2rem",
          maxWidth: "1120px",
          margin: "auto",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Checkout
        </h1>

        {/* Order Summary */}
        <div
          style={{
            background: "#fff",
            padding: "2rem",
            marginBottom: "2rem",
            borderRadius: "0.5rem",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Order Summary
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: "1rem",
                  background: "#f9fafb",
                  borderRadius: "8px",
                  boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.brand}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
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
              paddingTop: "1rem",
              borderTop: "1px solid #ddd",
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
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              padding: "0.75rem 1.5rem",
              width: "30%",
              height: "47px",
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1.1rem",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
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
