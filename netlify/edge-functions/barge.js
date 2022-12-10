export default async (request) => {
  const url = new URL(request.url);
  const date = url.searchParams.get('date') || '';
  const redirectUrl = `https://ttt.c0m.workers.dev/bargeForm?date=${date}&t=${Date.now()}`;

  return new Response(redirectUrl, {
    headers: { "content-type": "text/html" },
  });
};
