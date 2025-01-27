import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para envio do formulário (ex.: API ou email)
    console.log("Dados do formulário:", formData);
  };

  return (
    <div className="min-h-[80vh] bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-sky-700 mb-8">Entre em Contato</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Informações de Contato</h2>
            <p className="text-gray-600 mb-4">
              Entre em contato com a **Genfarm** para dúvidas, sugestões ou solicitações.
            </p>
            <p className="text-gray-800 font-semibold mb-2">Endereço:</p>
            <p className="text-gray-600 mb-4">Rua das Flores, 123, Centro, São Paulo - SP</p>

            <p className="text-gray-800 font-semibold mb-2">Telefone:</p>
            <p className="text-gray-600 mb-4">(11) 98765-4321</p>

            <p className="text-gray-800 font-semibold mb-2">Email:</p>
            <p className="text-gray-600 mb-4">contato@genfarm.com</p>
          </div>

          
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-sky-300"
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-sky-300"
                placeholder="Digite seu email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-sky-300"
                placeholder="Digite seu telefone"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-sky-300"
                placeholder="Digite sua mensagem"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-sky-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-800 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
