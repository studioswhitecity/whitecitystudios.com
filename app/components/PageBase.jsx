"use client";
import FramerContext from "@/app/_context/FramerContext";
import { motion } from "framer-motion";

export default function PageBase({ children }) {
  return (
    <FramerContext.Provider value={motion}>{children}</FramerContext.Provider>
  );
}
