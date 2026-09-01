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
      { name: "Espresso", price: "160 RSD" },
      { name: "Espresso sa mlekom", price: "170 RSD" },
      { name: "Cappuccino", price: "200 RSD" },
      { name: "Nescafe", price: "200 RSD" },
      { name: "Mocha Cafe", price: "230 RSD" },
      { name: "Latte Macchiato", price: "230 RSD" },
      { name: "Ice Coffee", price: "230 RSD" },
      { name: "Domaća kafa", price: "140 RSD" },
      { name: "Domaća kafa sa mlekom", price: "150 RSD" },
      {
        name: "Espresso sa sojinim mlekom",
        price: "230 RSD",
      },
      {
        name: "Cappuccino sa sojinim mlekom",
        price: "230 RSD",
      },
      { name: "Nes sa sojinim mlekom", price: "240 RSD" },
      { name: "Topla čokolada", price: "240 RSD" },
      { name: "Čaj Dolcezza", price: "220 RSD" },
      { name: "Plazma shake", price: "330 RSD" },
      { name: "Jena Coffee", price: "210 RSD" },
      { name: "Americano", price: "170 RSD" },
      { name: "Med", price: "50 RSD" },
      { name: "Šlag", price: "40 RSD" },
    ],
    photo: coffePhoto,
  },
  {
    id: 2,
    category: "Vode",
    icon: "IoWater",
    items: [
      { name: "Aqua Viva", capacity: "0.25l", price: "170 RSD" },
      { name: "Knjaz Miloš", capacity: "0.25l", price: "170 RSD" },
      { name: "Knjaz Miloš limun", capacity: "0.33l", price: "190 RSD" },
    ],
    photo: water,
  },
  {
    id: 3,
    category: "Sveže ceđeno",
    icon: "GiManualJuicer",
    items: [
      { name: "Limunada", capacity: "0.2l", price: "220 RSD" },
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
        price: "270 RSD",
      },
      {
        name: "Ice Tea homemade",
        variants: ["mango", "breskva", "marakuja", "malina"],
        capacity: "0.3l",
        price: "270 RSD",
      },
      { name: "Ceđena pomorandža", capacity: "0.2l", price: "300 RSD" },
      { name: "Ceđeni grejp", capacity: "0.3l", price: "320 RSD" },
      { name: "Ceđeni mix", capacity: "0.3l", price: "350 RSD" },
    ],
    photo: juice,
  },
  {
    id: 4,
    category: "Negazirani sokovi",
    icon: "RiDrinks2Fill ",
    items: [
      { name: "Pomorandža GUSTO", capacity: "0.2l", price: "210 RSD" },
      { name: "Jabuka GUSTO", capacity: "0.2l", price: "210 RSD" },
      { name: "Jagoda GUSTO", capacity: "0.2l", price: "210 RSD" },
      { name: "Borovnica GUSTO", capacity: "0.2l", price: "210 RSD" },
      { name: "Remix breskva", capacity: "0.33l", price: "200 RSD" },
      { name: "Cedevita pomorandža", capacity: "0.3l", price: "200 RSD" },
      { name: "Cedevita limun", capacity: "0.3l", price: "200 RSD" },
      { name: "Cedevita limun / zova", capacity: "0.3l", price: "200 RSD" },
      { name: "Cedevita limeta", capacity: "0.3l", price: "200 RSD" },
      { name: "Ledeni čaj Lipton", capacity: "0.33l", price: "210 RSD" },
    ],
    photo: stillDrink,
  },
  {
    id: 5,
    category: "Gazirani sokovi",
    icon: "TbBrandPepsi ",
    items: [
      { name: "Pepsi", capacity: "0.25l", price: "210 RSD" },
      { name: "Pepsi Max", capacity: "0.25l", price: "210 RSD" },
      { name: "Mirinda", capacity: "0.25l", price: "210 RSD" },
      { name: "7up", capacity: "0.25l", price: "210 RSD" },
      { name: "Evervess Bitter Lemon", capacity: "0.25l", price: "210 RSD" },
      { name: "Evervess tonic", capacity: "0.25l", price: "210 RSD" },
      { name: "Cockta", capacity: "0.25l", price: "210 RSD" },
      { name: "Cockta free", capacity: "0.25l", price: "210 RSD" },
      { name: "Orangina", capacity: "0.25l", price: "260 RSD" },
    ],
    photo: sparklingDrink,
  },
  {
    id: 6,
    category: "Energetska pića",
    icon: "SlEnergy ",
    items: [
      { name: "Guarana", capacity: "0.25l", price: "220 RSD" },
      { name: "Red Bull", capacity: "0.25l", price: "360 RSD" },
    ],
    photo: energyDrink,
  },
  {
    id: 7,
    category: "Piva",
    icon: "IoBeer ",
    items: [
      { name: "Heineken", capacity: "0.25l", price: "310 RSD" },
      { name: "Birra Moretti", capacity: "0.33l", price: "240 RSD" },
      { name: "Laško", capacity: "0.33l", price: "250 RSD" },
      { name: "Zaječarsko", capacity: "0.33l", price: "190 RSD" },
    ],
    items2: [
      {
        name: "Birra Moretti točeno malo",
        capacity: "0.25l",
        price: "180 RSD",
      },
      {
        name: "Birra Moretti točeno veliko",
        capacity: "0.5l",
        price: "300 RSD",
      },
    ],
    photo: beer,
  },
  {
    id: 8,
    category: "Viski",
    icon: "FaGlassWhiskey ",
    items: [
      { name: "Ballantineis", capacity: "0.03l", price: "270 RSD" },
      { name: "Johnnie Walker", capacity: "0.03l", price: "270 RSD" },
      { name: "Jack Daniel's", capacity: "0.03l", price: "390 RSD" },
      { name: "Jameson", capacity: "0.03l", price: "320 RSD" },
    ],
    photo: whisky,
  },
  {
    id: 9,
    category: "Alkoholna pića",
    icon: "TbGlassChampagne ",
    items: [
      { name: "Gin", capacity: "0.03l", price: "230 RSD" },
      { name: "Rum Havana", capacity: "0.03l", price: "210 RSD" },
      { name: "Tequila Olmeca", capacity: "0.03l", price: "230 RSD" },
      { name: "Vodka Absolut", capacity: "0.03l", price: "250 RSD" },
      { name: "Jegermeister", capacity: "0.03l", price: "270 RSD" },
      { name: "Gorski list", capacity: "0.03l", price: "210 RSD" },
      { name: "Hennesy", capacity: "0.03l", price: "410 RSD" },
    ],
    photo: alcohol,
  },
  {
    id: 10,
    category: "Rakije",
    icon: "LiaGlassWhiskeySolid ",
    items: [
      { name: `Viljamovka "Takovo"`, capacity: "0.03l", price: "220 RSD" },
      { name: "Rakija od dunje", capacity: "0.03l", price: "210 RSD" },
      { name: "Rakija od šljive", capacity: "0.03l", price: "210 RSD" },
      { name: "Medovača", capacity: "0.03l", price: "210 RSD" },
      { name: "Liker od maline", capacity: "0.03l", price: "190 RSD" },
    ],
    photo: rakija,
  },
  {
    id: 11,
    category: "Vina",
    icon: "FaWineGlassAlt ",
    items: [
      { name: "Međaš belo", capacity: "0.187l", price: "300 RSD" },
      { name: "Plataže roze", capacity: "0.187l", price: "300 RSD" },
      { name: "Stota stuza", capacity: "0.187l", price: "400 RSD" },
      { name: "Vranac pro corde", capacity: "0.187l", price: "400 RSD" },
      { name: "Kupinovo vino", capacity: "0.187l", price: "310 RSD" },
      { name: "Somersby (jabuka,mango)", capacity: "0.33l", price: "310 RSD" },
    ],
    photo: wine,
  },
  {
    id: 12,
    category: "Kokteli",
    icon: "FaCocktail ",
    items: [
      {
        name: "Hugo Spritz",
        capacity: "0.3l",
        price: "500 RSD",
      },
      {
        name: "Aperol Spritz",
        capacity: "0.3l",
        price: "500 RSD",
      },
      {
        name: "Daiquiri",
        capacity: "0.3l",
        price: "450 RSD",
      },
      {
        name: "Mojito",
        capacity: "0.3l",
        price: "550 RSD",
      },
      {
        name: "Cosmopolitan",
        capacity: "0.3l",
        price: "550 RSD",
      },
      {
        name: "Aleksandar",
        capacity: "0.3l",
        price: "450 RSD",
      },
      {
        name: "Blue Frog",
        capacity: "0.3l",
        price: "500 RSD",
      },
      {
        name: "Mai Tai",
        capacity: "0.3l",
        price: "550 RSD",
      },
    ],
    photo: cocktail,
  },
];

export default drinks;
