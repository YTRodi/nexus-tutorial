import { server } from "./api/server";

const main = async () => {
  try {
    const { url } = await server.listen();
    console.log(`Server ready at ${url}`);
  } catch (error) {
    console.log(error);
  }
};

main();
