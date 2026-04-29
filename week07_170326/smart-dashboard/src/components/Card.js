import { motion } from "framer-motion";

export default function Card({ title, amount, icon }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.1 }}
    >
      <h3>{icon} {title}</h3>
      <h1>₹ {amount}</h1>
    </motion.div>
  );
}