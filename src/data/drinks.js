import coffePhoto from "../images/drinks/coffePhoto.jpg";
import alcohol from "../images/drinks/alcohol.jpg";
import stillDrink from "../images/drinks/stillDrink.jpg";
import cocktail from "../images/drinks/cocktail.jpg";
import energyDrink from "../images/drinks/energyDrink.jpg";
import juice from "../images/drinks/juice.jpg";
import rakija from "../images/drinks/rakija.jpg";
import sparklingDrink from "../images/drinks/sparklingDrink.jpg";
import water from "../images/drinks/water.jpg";
import whisky from "../images/drinks/whisky.jpg";
import wine from "../images/drinks/wine.jpg";
import beer from "../images/drinks/beer.jpg";

const drinks = [
  {
    id: 1,
    category: "Kafe i topli napici",
    icon: "BiSolidCoffeeBean",
    items: [
      { name: "Espresso", price: "150 RSD" },
      { name: "Espresso sa mlekom", price: "160 RSD" },
      { name: "Cappuccino", price: "180 RSD" },
      { name: "Nescafe", price: "190 RSD" },
      { name: "Mocha Cafe", price: "220 RSD" },
      { name: "Latte Macchiato", price: "220 RSD" },
      { name: "Ice Coffee", price: "210 RSD" },
      { name: "Domaća kafa", price: "120 RSD" },
      { name: "Domaća kafa sa mlekom", price: "130 RSD" },
      { name: "Espresso sa sojinim mlekom", price: "200 RSD" },
      { name: "Nes sa sojinim mlekom", price: "210 RSD" },
      { name: "Topla čokolada", price: "210 RSD" },
      { name: "Čaj Dolcezza", price: "190 RSD" },
      { name: "Plazma shake", price: "300 RSD" },
      { name: "Jena Coffee", price: "190 RSD" },
      { name: "Americano", price: "160 RSD" },
      { name: "Med", price: "30 RSD" },
      { name: "Šlag", price: "30 RSD" },
    ],
    photo: coffePhoto,
  },
  {
    id: 2,
    category: "Vode",
    icon: "IoWater",
    items: [
      { name: "Aqua Viva", capacity: "0.25l", price: "160 RSD" },
      { name: "Knjaz Miloš", capacity: "0.25l", price: "160 RSD" },
      { name: "Knjaz Miloš limun", capacity: "0.33l", price: "180 RSD" },
    ],
    photo: water,
  },
  {
    id: 3,
    category: "Sveže ceđeno",
    icon: "GiManualJuicer",
    items: [
      { name: "Limunada", capacity: "0.2l", price: "210 RSD" },
      {
        name: "Limunada sa ukusom",
        variants: [
          "mango",
          "vocne_strasti",
          "mohito",
          "lubenica",
          "sumsko_voce",
          "zova",
          "jagoda",
          "kivi",
        ],

        capacity: "0.3l",
        price: "260 RSD",
      },
      {
        name: "Ice Tea homemade",
        variants: ["mango", "breskva", "marakuja", "malina"],
        capacity: "0.3l",
        price: "260 RSD",
      },
      { name: "Ceđena pomorandža", capacity: "0.2l", price: "270 RSD" },
      { name: "Ceđeni grejp", capacity: "0.3l", price: "290 RSD" },
      { name: "Ceđeni mix", capacity: "0.3l", price: "320 RSD" },
    ],
    photo: juice,
  },
  {
    id: 4,
    category: "Negazirani sokovi",
    icon: "RiDrinks2Fill ",
    items: [
      { name: "Pomorandža GUSTO", capacity: "0.2l", price: "200 RSD" },
      { name: "Jabuka GUSTO", capacity: "0.2l", price: "200 RSD" },
      { name: "Jagoda GUSTO", capacity: "0.2l", price: "200 RSD" },
      { name: "Borovnica GUSTO", capacity: "0.2l", price: "200 RSD" },
      { name: "Remix breskva", capacity: "0.33l", price: "190 RSD" },
      { name: "Cedevita pomorandža", price: "180 RSD" },
      { name: "Cedevita limun", price: "180 RSD" },
      { name: "Cedevita limun / zova", price: "180 RSD" },
      { name: "Cedevita limeta", price: "180 RSD" },
      { name: "Fuze tea", capacity: "0.33l", price: "190 RSD" },
    ],
    photo: stillDrink,
  },
  {
    id: 5,
    category: "Gazirani sokovi",
    icon: "TbBrandPepsi ",
    items: [
      { name: "Pepsi", capacity: "0.25l", price: "200 RSD" },
      { name: "Pepsi Max", capacity: "0.25l", price: "200 RSD" },
      { name: "Mirinda", capacity: "0.25l", price: "200 RSD" },
      { name: "7up", capacity: "0.25l", price: "200 RSD" },
      { name: "Evervess Bitter Lemon", capacity: "0.25l", price: "200 RSD" },
      { name: "Evervess tonic", capacity: "0.25l", price: "200 RSD" },
      { name: "Cockta", capacity: "0.25l", price: "200 RSD" },
      { name: "Cockta free", price: "200 RSD" },
      { name: "Orangina", capacity: "0.25l", price: "250 RSD" },
    ],
    photo: sparklingDrink,
  },
  {
    id: 6,
    category: "Energetska pića",
    icon: "SlEnergy ",
    items: [
      { name: "Guarana", capacity: "0.25l", price: "200 RSD" },
      { name: "Red Bull", capacity: "0.25l", price: "350 RSD" },
    ],
    photo: energyDrink,
  },
  {
    id: 7,
    category: "Piva",
    icon: "IoBeer ",
    items: [
      { name: "Heineken", capacity: "0.25l", price: "300 RSD" },
      { name: "Birra Moretti", capacity: "0.33l", price: "230 RSD" },
      { name: "Laško", capacity: "0.33l", price: "240 RSD" },
      { name: "Zaječarsko", capacity: "0.33l", price: "180 RSD" },
    ],
    items2: [
      {
        name: "Birra Moretti točeno malo",
        capacity: "0.25l",
        price: "170 RSD",
      },
      {
        name: "Birra Moretti točeno veliko",
        capacity: "0.5l",
        price: "290 RSD",
      },
    ],
    photo: beer,
  },
  {
    id: 8,
    category: "Viski",
    icon: "FaGlassWhiskey ",
    items: [
      { name: "Ballantineis", capacity: "0.03l", price: "260 RSD" },
      { name: "Johnnie Walker", capacity: "0.03l", price: "260 RSD" },
      { name: "Jack Daniel's", capacity: "0.03l", price: "380 RSD" },
      { name: "Jameson", capacity: "0.03l", price: "310 RSD" },
    ],
    photo: whisky,
  },
  {
    id: 9,
    category: "Alkoholna pića",
    icon: "TbGlassChampagne ",
    items: [
      { name: "Gin", capacity: "0.03l", price: "220 RSD" },
      { name: "Rum Havana", capacity: "0.03l", price: "200 RSD" },
      { name: "Tequila Olmeca", capacity: "0.03l", price: "220 RSD" },
      { name: "Vodka Absolut", capacity: "0.03l", price: "240 RSD" },
      { name: "Jegermeister", capacity: "0.03l", price: "260 RSD" },
      { name: "Gorski list", capacity: "0.03l", price: "200 RSD" },
      { name: "Hennesy", capacity: "0.03l", price: "390 RSD" },
    ],
    photo: alcohol,
  },
  {
    id: 10,
    category: "Rakije",
    icon: "LiaGlassWhiskeySolid ",
    items: [
      { name: `Viljamovka "Takovo"`, capacity: "0.03l", price: "210 RSD" },
      { name: "Rakija od dunnje", capacity: "0.03l", price: "190 RSD" },
      { name: "Rakija od šljive", capacity: "0.03l", price: "190 RSD" },
      { name: "Medovača", capacity: "0.03l", price: "190 RSD" },
      { name: "Liker od maline", capacity: "0.03l", price: "170 RSD" },
    ],
    photo: rakija,
  },
  {
    id: 11,
    category: "Vina",
    icon: "FaWineGlassAlt ",
    items: [
      { name: "Međaš belo", capacity: "0.187l", price: "290 RSD" },
      { name: "Međaš crno", capacity: "0.187l", price: "290 RSD" },
      { name: "Plataže roze", capacity: "0.187l", price: "290 RSD" },
      { name: "Stota stuza", capacity: "0.187l", price: "390 RSD" },
      { name: "Vranac pro corde", capacity: "0.187l", price: "390 RSD" },
      { name: "Kupinovo vino", capacity: "0.187l", price: "300 RSD" },
      { name: "Somersbz (jabuka,mango)", capacity: "0.33l", price: "300 RSD" },
    ],
    photo: wine,
  },
  {
    id: 12,
    category: "Kokteli",
    icon: "FaCocktail ",
    items: [
      { name: "Blue frog / red frog", capacity: "0.3l", price: "410 RSD" },
      { name: "Sex on the beach", capacity: "0.2l", price: "380 RSD" },
      { name: "Sky light", capacity: "0.2l", price: "390 RSD" },
      { name: "Long Island", capacity: "0.3l", price: "410 RSD" },
      { name: "Mai tai", capacity: "0.3l", price: "380 RSD" },
      { name: "Aleksandar", price: "380 RSD" },
    ],
    photo: cocktail,
  },
];

export default drinks;
