"use client";
import React from "react";
import { useRouter } from "next/navigation";

const FoodArray = {
  userPrompt: "Something Spicy with rice.",
  menuItems: [
    {
      name: "Butter Chicken",
      description:
        "A rich and creamy curry made with marinated chicken, tomato sauce, cream, butter, and a blend of spices including garam masala, cumin, and coriander.",
      price: 200,
    },
    {
      name: "Chicken Tikka Masala",
      description:
        "Chunks of grilled chicken cooked in a spicy, creamy tomato-based sauce, flavored with yogurt, garlic, ginger, and a variety of Indian spices.",
      price: 233,
    },
    {
      name: "Chicken Biryani",
      description:
        "A fragrant rice dish made with basmati rice, marinated chicken, saffron, and a mix of spices such as cardamom, cloves, and cinnamon, layered with fried onions and fresh herbs.",
      price: 300,
    },
    {
      name: "Chicken Korma",
      description:
        "A mild, creamy curry made with chicken, yogurt, cream, and a blend of spices including cardamom, cinnamon, and cloves, often garnished with almonds or cashews.",
      price: 350,
    },
    {
      name: "Chicken 65",
      description:
        "A spicy, deep-fried chicken dish marinated with yogurt, ginger, garlic, red chili powder, and a blend of spices, often served with a squeeze of lime and curry leaves.",
    },
    {
      name: "Chicken Alfredo",
      description:
        "A creamy Italian pasta dish made with fettuccine noodles, grilled chicken, heavy cream, Parmesan cheese, and garlic.",
      price: 390,
    },
    {
      name: "Chicken Parmigiana",
      description:
        "Breaded chicken breast topped with marinara sauce and melted mozzarella and Parmesan cheese, served with a side of pasta.",
      price: 450,
    },
    {
      name: "Margherita Pizza",
      description:
        "A classic Italian pizza topped with tomato sauce, fresh mozzarella cheese, and basil leaves.",
      price: 639,
    },
    {
      name: "Lasagna",
      description:
        "Layers of pasta, ground meat, ricotta cheese, mozzarella, and marinara sauce, baked to perfection.",
      price: 683,
    },
    {
      name: "Spaghetti Carbonara",
      description:
        "A traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      price: 735,
    },
    {
      name: "Risotto ai Funghi",
      description:
        "A creamy Italian rice dish made with Arborio rice, mushrooms, Parmesan cheese, and white wine.",
      price: 872,
    },
    {
      name: "Chicken Piccata",
      description:
        "Chicken breast sautéed with lemon juice, capers, and white wine, served with a side of pasta.",
      price: 983,
    },
    {
      name: "Tiramisu",
      description:
        "A classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.",
      price: 458,
    },
    {
      name: "Penne Arrabbiata",
      description:
        "A spicy Italian pasta dish made with penne noodles, tomato sauce, garlic, and red chili flakes.",
      price: 100,
    },
    {
      name: "Caprese Salad",
      description:
        "A fresh Italian salad made with sliced tomatoes, fresh mozzarella, basil leaves, and drizzled with balsamic reduction.",
      price: 120,
    },
  ],
};

const ProductsPage = () => {
  const router = useRouter();
  return (
    <>
      <button
        className="bg-white text-black font-bold p-3 m-3 rounded-xl"
        onClick={() => router.back()}
      >
        Go Back!
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FoodArray.menuItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl text-gray-900 font-bold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-gray-900">{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
