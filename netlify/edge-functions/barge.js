export default async (request) => {
  const url = new URL(request.url);
  const date = url.searchParams.get('date') || '';
  const source = url.searchParams.get('source') || '';
  const origin = url.searchParams.get('origin') || '';

  const redirectUrl = `https://ttt.c0m.workers.dev/bargeForm?date=${date}&source=${source}&origin=${origin}&t=${Date.now()}`;
  return Response.redirect(redirectUrl, 302);
};
