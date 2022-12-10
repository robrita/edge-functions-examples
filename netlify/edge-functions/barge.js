export default async (request) => {
  return new Response(request.url, {
    headers: { "content-type": "text/html" },
  });
};
