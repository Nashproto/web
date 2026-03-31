export const prerender = false;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "*",
};

export function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export function GET() {
  return new Response(
    JSON.stringify({
      "@context": [
        "https://www.w3.org/ns/did/v1",
        "https://w3id.org/security/multikey/v1",
        "https://w3id.org/security/suites/secp256k1-2019/v1",
      ],
      id: "did:web:nashproto.com",
      alsoKnownAs: ["at://nashproto.com"],
      verificationMethod: [
        {
          id: "did:web:nashproto.com#atproto",
          type: "Multikey",
          controller: "did:web:nashproto.com",
          publicKeyMultibase:
            "zQ3shV9a5gKTkraUDNvjw2VnjRkmmYur1NiU8rFGVPhzy1XvS",
        },
      ],
      service: [
        {
          id: "#atproto_pds",
          type: "AtprotoPersonalDataServer",
          serviceEndpoint: "https://teal.town",
        },
      ],
    }),
    {
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    },
  );
}
