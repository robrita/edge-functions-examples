export default async (request) => {
  const url = new URL(request.url);
  const date = url.searchParams.get('date') || '';
  const redirectUrl = `https://ttt.c0m.workers.dev/bargeForm?date=${date}`;

  return new Response(redirectUrl, {
    headers: { "content-type": "text/html" },
  });
};
