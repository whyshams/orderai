"use client";
export const dynamic = "force-dynamic";
import { useState, useContext } from "react";
import { generate } from "./actions";
import { readStreamableValue } from "ai/rsc";
import Link from "next/link";
import ContextApi from "@/ContextApi";

export default function Home() {
  const {
    suggested,
    setSuggested,
    generation,
    setGeneration,
    prompt,
    setPrompt,
  } = useContext(ContextApi);

  const FoodArray = {
    userPrompt: prompt,
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

  return (
    <div className="grid place-content-center place-items-center">
      <div className=" rounded m-10 bg-white text-emerald-950 w-28 p-4 text-bold flex justify-center">
        <Link href="/products">
          <strong>Full Menu</strong>
        </Link>
      </div>
      <textarea
        style={{ width: "300px", height: "200px", padding: "10px" }}
        placeholder="Let me know about your apetite,need or mood...."
        className="bg-slate-700  rounded-2xl m-5 "
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        className="bg-white text-black pt-6 pb-6 px-10 mb-20 rounded-3xl"
        onClick={async () => {
          const { object } = await generate(
            `"the json object : ${JSON.stringify(FoodArray)}"`
          );

          for await (const partialObject of readStreamableValue(object)) {
            if (partialObject) {
              console.log(partialObject);

              setGeneration(partialObject.notifications);
              if (partialObject?.matchedProducts?.length > 0) {
                setSuggested(partialObject.matchedProducts);
              }
            }
          }
        }}
      >
        <strong>ASK</strong>
      </button>
      {generation?.length && (
        <div>
          <h1 className="mt-10 mb-10">{generation[0].message}</h1>
          <div></div>
        </div>
      )}
      <div className="flex flex-wrap sm:flex-nowrap">
        {suggested?.map((item, index) => (
          <div key={index}>
            <div className="bg-white rounded-lg shadow-md p-4 m-4">
              <h2 className="text-xl text-gray-900 font-bold">
                {item.productname}
              </h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-900">{item.price} Taka</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
