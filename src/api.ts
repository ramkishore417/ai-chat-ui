export const getWelcomeMessage = async (): Promise<string> => {
   const response = await fetch('https://fictional-fishstick-qpxvvwjgrv5h97p4-8080.app.github.dev/openai/welcome');
   const data = await response.json();

   if(!data || !data.message) {
    return "Welcome! We're glad to have you here.";
   }
   return data;
}