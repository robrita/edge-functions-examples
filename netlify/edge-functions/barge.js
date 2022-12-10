export default async (request) => {
  return new Response("hahaha", {
    headers: { "content-type": "text/html" },
  });
};
