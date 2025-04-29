import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-orange-600 text-white font-sans">
      <nav className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-80 fixed w-full z-50 shadow-md">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo Feder" className="h-10" />
          <span className="text-xl font-bold text-orange-500">Feder</span>
        </div>
      </nav>
      <section className="text-center py-32 px-6">
        <h1 className="text-5xl font-extrabold mb-4">Fédérez vos supporters. Développez votre club.</h1>
        <p className="text-xl mb-8">L'outil digital tout-en-un pour les clubs semi-pro et pro.</p>
      </section>
    </motion.div>
  );
}