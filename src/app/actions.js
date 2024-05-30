"use server"


import { streamObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";
import { z } from "zod";
import { unstable_noStore as noStore } from "next/cache";

export async function generate(input) {
  noStore();

  "use server"
  const stream = createStreamableValue();

  (async () => {
    const { partialObjectStream } = await streamObject({
      model: openai("gpt-3.5-turbo"),
      system:
        "You are a order suggester for a restaurant. You will be provided with a prompt that will  have  a json object with a userPrompt property which is a prompt of a user who will order. You will suggest the order according to an array of products of the restaurant which will be within the given json object with the name of menuItems.Each object of the restaurant product will have the name,price the description of that product and description will hold all the ingredients. You will suggest the food that must be within that array according to the prompt.You will not suggest more than two.",
      prompt: input,
      schema: z.object({
        notifications: z.array(
          z.object({
            message: z
              .string()
              .describe(
                "Describe your reasoning of choosing those food and if you cant find any suitable food for the user say that you could not find proper food match. Make it as humane as possible."
              ),
          })
        ),
        matchedProducts: z.array(
          z.object({
            productname: z.string().describe("name of your suggested product"),
            description: z
              .string()
              .describe("description of the your suggested product"),
            price: z.string().describe("price your of the suggested product"),
          })
        ),
      }),
    });

    for await (const partialObject of partialObjectStream) {
      stream.update(partialObject);
    }

    stream.done();
  })();

  return { object: stream.value };
}

