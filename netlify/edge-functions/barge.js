export default async (request) => {
  const url = new URL(request.url);
  const date = url.searchParams.get('date') || '';

  const redirectUrl = `https://ttt.c0m.workers.dev/bargeForm?date=${date}&t=${Date.now()}`;
  // return Response.redirect(redirectUrl, 302);
  return new Response(redirectUrl);
};
