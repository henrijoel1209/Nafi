import React, { useState } from 'react';
import { ChefHat, Instagram,  Globe, Clock, Users, Award } from 'lucide-react';

// Données des plats
const dishes = [
  {
    id: 1,
    name: "Sauce Graine Traditionnelle",
    description: "Une sauce traditionnelle ivoirienne à base de noix de palme, servie avec du poisson fumé et des fruits de mer.",
    image: "/sauce graine.jpg",
    category: "Traditionnel"
  },
  {
    id: 2,
    name: "Poulet Braisé à l'Africaine",
    description: "Poulet mariné aux épices africaines, grillé à la perfection et servi avec de l'attiéké et des alloco.",
    image: "/poulet braisé.jpg",
    category: "Fusion"
  },
  {
    id: 3,
    name: "Frite poulet",
    description: "Délicieux poulet frit croustillant servi avec des frites dorées et une sauce maison.",
    image: "/frite.jpg",
    category: "Traditionnel"
  },
  {
    id: 4,
    name: "Placali Moderne",
    description: "Version moderne du placali, servie avec une sauce gourmande aux légumes et viandes assorties.",
    image: "/placali.jpg",
    category: "Fusion"
  },
  {
    id: 5,
    name: "Garba Gourmet",
    description: "Réinterprétation élégante du garba traditionnel avec du thon premium et des condiments fins.",
    image: "/garba.jpg",
    category: "Fusion"
  },
  {
    id: 6,
    name: "Kedjenou de Poulet",
    description: "Ragoût traditionnel de poulet cuit lentement avec des épices et légumes locaux.",
    image: "/poulet.jpg",
    category: "Traditionnel"
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredDishes = selectedCategory === 'Tous' 
    ? dishes 
    : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-4">
                O'DeliceFood
              </h1>
              <h2 className="text-2xl md:text-3xl text-orange-800 mb-6">
                Par Nafi
              </h2>
              <p className="text-lg text-orange-700 mb-8">
                Découvrez l'authenticité de la cuisine ivoirienne revisitée
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#contact" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
                  Contactez-moi
                </a>
                <a href="#menu" className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition">
                  Notre Menu
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/nafi.jpg"
                alt="Chef Nafi"
                className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-8 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-orange-900">À Propos de Moi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-lg bg-orange-50">
              <Clock className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-2">5 Ans d'Expérience</h3>
              <p className="text-gray-600">Passionnée de cuisine depuis mon plus jeune âge</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg bg-orange-50">
              <Users className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-2">Cuisine Fusion</h3>
              <p className="text-gray-600">Mélange unique de traditions ivoiriennes et internationales</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg bg-orange-50">
              <Award className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-2">Entrepreneure</h3>
              <p className="text-gray-600">Fondatrice d'O'DeliceFood à Macory, Abidjan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-900">Notre Menu</h2>
          
          {/* Filtres */}
          <div className="flex justify-center gap-4 mb-12">
            {['Tous', 'Traditionnel', 'Fusion'].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-orange-500 hover:bg-orange-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grille de plats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map(dish => (
              <div key={dish.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                <div className="relative h-64">
                  <img 
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-1 bg-orange-500 text-white rounded-full text-sm">
                      {dish.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-orange-900">{dish.name}</h3>
                  <p className="text-gray-600">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-orange-900">Contactez-Moi</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8">
              <a href="https://www.instagram.com/naficuisine?igsh=bzhvYzNmb3l4bWNh&utm_source=qr" className="flex items-center gap-2 text-orange-500 hover:text-orange-600">
                <Instagram className="w-6 h-6" />
                <span>@naficuisine</span>
              </a>
              <a href="https://www.tiktok.com/@naficuisine_?_t=ZM-8u1OpoeU6SL" className="flex items-center gap-2 text-orange-500 hover:text-orange-600">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span>@naficuisine_</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="w-6 h-6" />
            <span className="text-xl font-bold">O'DeliceFood</span>
          </div>
          <p className="text-orange-200"> 2024 O'DeliceFood. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;