import { BiSolidCoffeeBean } from "react-icons/bi";
import { IoWater } from "react-icons/io5";
import { GiManualJuicer } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import { TbBrandPepsi } from "react-icons/tb";
import { SlEnergy } from "react-icons/sl";
import { IoBeer } from "react-icons/io5";
import { FaGlassWhiskey } from "react-icons/fa";
import { TbGlassChampagne } from "react-icons/tb";
import { LiaGlassWhiskeySolid } from "react-icons/lia";
import { FaWineGlassAlt } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";

const drinksIcons = [
  { id: 1, category: "Kafe i topli napici", icon: BiSolidCoffeeBean },
  { id: 2, category: "Vode", icon: IoWater },
  { id: 3, category: "Sveže ceđeno", icon: GiManualJuicer },
  { id: 4, category: "Negazirani sokovi", icon: RiDrinks2Fill },
  { id: 5, category: "Gazirani sokovi", icon: TbBrandPepsi },
  { id: 6, category: "Energetska pića", icon: SlEnergy },
  { id: 7, category: "Piva", icon: IoBeer },
  { id: 8, category: "Viski", icon: FaGlassWhiskey },
  { id: 9, category: "Alkoholna pića", icon: TbGlassChampagne },
  { id: 10, category: "Rakije", icon: LiaGlassWhiskeySolid },
  { id: 11, category: "Vina", icon: FaWineGlassAlt },
  { id: 12, category: "Kokteli", icon: FaCocktail },
];

export default drinksIcons;
