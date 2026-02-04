import { GenericResponse } from "../types";

export const readWelcomeMessage = async (): Promise<GenericResponse<any>> => {
  try {
    const response = await fetch(
      "https://fictional-fishstick-qpxvvwjgrv5h97p4-8080.app.github.dev/openai/welcome"
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    // Return the full GenericResponse object
    return await response.json();
  } catch (error) {
    // Optionally, you can return a fallback GenericResponse here
    return {
      resultCode: "ERROR",
      resultDescription: "Failed to fetch welcome message.",
      resultObj: null,
      executionTime: 0,
    };
  }
};
