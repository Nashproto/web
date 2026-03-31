export function GET() {
  return new Response("did:web:nashproto.com", {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
