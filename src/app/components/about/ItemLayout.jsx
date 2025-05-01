"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const ItemDisplay = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20}}
      viewport={{ once: true }}
      className={clsx(
        "bg-gradient-to-r from-[#00f2fe]/60 via-[#4facfe]/60 to-[#00f2fe]/60 rounded-md flex items-center justify-center space-y-7",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemDisplay;