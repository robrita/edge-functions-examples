export default async (request) => {
  return new Response("Barge, Booking!", {
    headers: { "content-type": "text/html" },
  });
};
