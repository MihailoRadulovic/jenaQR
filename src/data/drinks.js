import coffePhoto from "../images/coffePhoto.jpg";
import alcohol from "../images/alcohol.jpg";
import stillDrink from "../images/stillDrink.jpg";
import cocktail from "../images/cocktail.jpg";
import energyDrink from "../images/energyDrink.jpg";
import juice from "../images/juice.jpg";
import rakija from "../images/rakija.jpg";
import sparklingDrink from "../images/sparklingDrink.jpg";
import water from "../images/water.jpg";
import whisky from "../images/whisky.jpg";
import wine from "../images/wine.jpg";
import beer from "../images/beer.jpg";

const drinks = [
  {
    id: 1,
    category: "Kafe i topli napici",
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
      { name: "Čaj Dolcezza", price: "180 RSD" },
      { name: "Plazma shake", price: "270 RSD" },
      { name: "Nesquik", price: "170 RSD" },
      { name: "Jena Coffee", price: "180 RSD" },
      { name: "Med", price: "30 RSD" },
      { name: "Šlag", price: "30 RSD" },
    ],
    photo: coffePhoto,
  },
  {
    id: 2,
    category: "Vode",
    items: [
      { name: "Aqua Viva", capacity: "0.25l", price: "150 RSD" },
      { name: "Knjaz Miloš", capacity: "0.25l", price: "150 RSD" },
      { name: "Knjaz Miloš limun", capacity: "0.33l", price: "170 RSD" },
    ],
    photo: water,
  },
  {
    id: 3,
    category: "Sveže ceđeno",
    items: [
      { name: "Limunada", capacity: "0.2l", price: "210 RSD" },
      {
        name: "Limunada (mango, voćne strasti, mohito, kiwi, lubenica, šumsko voće)",
        capacity: "0.3l",
        price: "260 RSD",
      },
      { name: "Ice Tea homemade", capacity: "0.3l", price: "260 RSD" },
      { name: "Ceđena pomorandža", capacity: "0.2l", price: "270 RSD" },
      { name: "Ceđeni grejp", capacity: "0.3l", price: "290 RSD" },
      { name: "Ceđeni mix", capacity: "0.3l", price: "320 RSD" },
    ],
    photo: juice,
  },
  {
    id: 4,
    category: "Negazirani sokovi",
    items: [
      { name: "Pomorandža GUSTO", capacity: "0.2l", price: "190 RSD" },
      { name: "Jabuka GUSTO", capacity: "0.2l", price: "190 RSD" },
      { name: "Jagoda GUSTO", capacity: "0.2l", price: "190 RSD" },
      { name: "Borovnica GUSTO", capacity: "0.2l", price: "190 RSD" },
      { name: "Remix breskva", capacity: "0.33l", price: "190 RSD" },
      { name: "Cedevita pomorandža", price: "170 RSD" },
      { name: "Cedevita limun", price: "170 RSD" },
      { name: "Cedevita limun / zova", price: "170 RSD" },
      { name: "Cedevita limeta", price: "170 RSD" },
      { name: "Fuze tea", capacity: "0.33l", price: "180 RSD" },
    ],
    photo: stillDrink,
  },
  {
    id: 5,
    category: "Gazirani sokovi",
    items: [
      { name: "Pepsi", capacity: "0.25l", price: "190 RSD" },
      { name: "Pepsi Max", capacity: "0.25l", price: "190 RSD" },
      { name: "Mirinda", capacity: "0.25l", price: "190 RSD" },
      { name: "7up", capacity: "0.25l", price: "190 RSD" },
      { name: "Evervess Bitter Lemon", capacity: "0.25l", price: "190 RSD" },
      { name: "Evervess tonic", capacity: "0.25l", price: "190 RSD" },
      { name: "Cockta", capacity: "0.25l", price: "190 RSD" },
      { name: "Cockta free", price: "190 RSD" },
      { name: "Orangina", capacity: "0.25l", price: "250 RSD" },
    ],
    photo: sparklingDrink,
  },
  {
    id: 6,
    category: "Energetska pića",
    items: [
      { name: "Guarana", capacity: "0.25l", price: "200 RSD" },
      { name: "Red Bull", capacity: "0.25l", price: "350 RSD" },
    ],
    photo: energyDrink,
  },
  {
    id: 7,
    category: "Piva",
    items: [
      { name: "Heineken", capacity: "0.25l", price: "300 RSD" },
      { name: "Birra Moretti", capacity: "0.33l", price: "230 RSD" },
      { name: "Laško", capacity: "0.33l", price: "240 RSD" },
      { name: "Zaječarsko", capacity: "0.33l", price: "180 RSD" },
    ],
    photo: beer,
  },
  {
    id: 8,
    category: "Viski",
    items: [
      { name: "Ballantineis", capacity: "0.03l", price: "250 RSD" },
      { name: "Johnnie Walker", capacity: "0.03l", price: "250 RSD" },
      { name: "Jack Daniel's", capacity: "0.03l", price: "370 RSD" },
      { name: "Jameson", capacity: "0.03l", price: "300 RSD" },
    ],
    photo: whisky,
  },
  {
    id: 9,
    category: "Alkoholna pića",
    items: [
      { name: "Gin", capacity: "0.03l", price: "210 RSD" },
      { name: "Rum Havana", capacity: "0.03l", price: "190 RSD" },
      { name: "Tequila Olmeca", capacity: "0.03l", price: "220 RSD" },
      { name: "Vodka Absolut", capacity: "0.03l", price: "240 RSD" },
      { name: "Jegermeister", capacity: "0.03l", price: "260 RSD" },
      { name: "Gorski list", capacity: "0.03l", price: "190 RSD" },
      { name: "Hennesy", capacity: "0.03l", price: "390 RSD" },
      { name: "Vodka Puškin", capacity: "0.03l", price: "200 RSD" },
    ],
    photo: alcohol,
  },
  {
    id: 10,
    category: "Rakije",
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
    items: [
      { name: "Blue frog / red frog", capacity: "0.3l", price: "410 RSD" },
      { name: "Sex on the beach", capacity: "0.2l", price: "360 RSD" },
      { name: "Sky light", capacity: "0.2l", price: "390 RSD" },
      { name: "Long Island", capacity: "0.3l", price: "410 RSD" },
      { name: "Mai tai", capacity: "0.3l", price: "360 RSD" },
      { name: "Aleksandar", price: "360 RSD" },
    ],
    photo: cocktail,
  },
];

export default drinks;
