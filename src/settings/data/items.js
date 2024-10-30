

import Item1 from "../../assets/images/food-items/item1_1.png";
import Item2 from "../../assets/images/food-items/item1_2.png";
import Item3 from "../../assets/images/food-items/item1_3.png";
import Item4 from "../../assets/images/food-items/item1_4.png";

import Dish1 from "../../assets/images/dishes/dishes1_1.png";
import Dish2 from "../../assets/images/dishes/dishes1_2.png";
import Dish3 from "../../assets/images/dishes/dishes1_3.png";
import Dish4 from "../../assets/images/dishes/dishes1_4.png";
import Dish5 from "../../assets/images/dishes/dishes1_5.png";

import Offer1 from "../../assets/images/offer/offerThumb1_1.png";
import Offer2 from "../../assets/images/offer/offerThumb1_2.png";
import Offer3 from "../../assets/images/offer/offerThumb1_3.png";
import OfferShape from "../../assets/images/offer/offer.png";

//  1- popularItems
//  2- offerItems

const items = {
  popularItems: [
    {
      id: 1,
      title: "Chicken Pizza",
      price: 26.99,
      image: Item1,
    },
    {
      id: 2,
      title: "Egg and Cucumber",
      price: 28.99,
      image: Item2,
    },
    {
      id: 3,
      title: "Chicken Fried Rice",
      price: 100.99,
      image: Item3,
    },
    {
      id: 4,
      title: "Chicken Leg Piece",
      price: 20.99,
      image: Item4,
    },
    {
      id: 5,
      title: "Egg and Cucumber",
      price: 28.99,
      image: Item2,
    },
  ],
  //////////////  2- offerItems

  offerItems: [
    {
      id: 1,
      type: "weekly",
      validateTitle: "ON THIS WEEK",
      title: "SPICY FRIED CHICKEN",
      image: Offer1,
      offerImage: OfferShape,
    },
    {
      id: 2,
      type: "daily",
      validateTitle: "WELCOME FRESHEAT",
      title: "TODAY SPACIAL FOOD",
      image: Offer2,
      offerImage: OfferShape,
    },
    {
      id: 3,
      type: "weekly",
      validateTitle: "ON THIS WEEK",
      title: "SPECIAL CHICKEN ROLL",
      image: Offer3,
      offerImage: OfferShape,
    },
  ],
  bestSellingItems: [
    {
      id: 1,
      title: "Chicken Fried Rice",
      price: 100.99,
      image: Dish1,
    },
    {
      id: 2,
      title: "Chines Pasta",
      price: 15.99,
      image: Dish2,
    },
    {
      id: 3,
      title: "Chicken Pizza",
      price: 26.99,
      image: Dish3,
    },
    {
      id: 4,
      title: "Chicken Noodles",
      price: 39.00,
      image: Dish4,
    },
    {
      id: 5,
      title: "Grilled Chicken",
      price: 20.99,
      image: Dish5,
    }
  ]
};



export default items