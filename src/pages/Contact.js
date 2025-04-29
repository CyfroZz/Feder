import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Contactez-nous</h2>
      <form className="max-w-xl mx-auto space-y-6">
        <input type="text" placeholder="Nom" className="w-full p-3 rounded bg-white text-black" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded bg-white text-black" />
        <textarea placeholder="Votre message" rows="5" className="w-full p-3 rounded bg-white text-black"></textarea>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl">Envoyer</button>
      </form>
    </section>
  );
}
