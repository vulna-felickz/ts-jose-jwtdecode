import * as jose from 'jose';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1cm46ZXhhbXBsZTpjbGFpbSI6dHJ1ZSwiaWF0IjoxNjY5MDU2MjMxLCJpc3MiOiJ1cm46ZXhhbXBsZTppc3N1ZXIiLCJhdWQiOiJ1cm46ZXhhbXBsZTphdWRpZW5jZSJ9.C4iSlLfAUMBq--wnC6VqD9gEOhwpRZpoRarE0m7KEnI';
const claims = jose.decodeJwt(token);
console.log("~~decoded~~")
console.log(claims)

const secretVerify = new TextEncoder().encode(  'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',)

async function verifyJwt() {
const { payload, protectedHeader } = await jose.jwtVerify(token, secretVerify, {
  issuer: 'urn:example:issuer',
  audience: 'urn:example:audience',
})

console.log("~~verified~~")
console.log(protectedHeader)
console.log(payload)
}

verifyJwt();

// decrypt jwt
const secret = jose.base64url.decode('zH4NRP1HMALxxCFnRZABFA7GOJtzU_gIj02alfL1lvI')
const jwt =  'eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..MB66qstZBPxAXKdsjet_lA.WHbtJTl4taHp7otOHLq3hBvv0yNPsPEKHYInmCPdDDeyV1kU-f-tGEiU4FxlSqkqAT2hVs8_wMNiQFAzPU1PUgIqWCPsBrPP3TtxYsrtwagpn4SvCsUsx0Mhw9ZhliAO8CLmCBQkqr_T9AcYsz5uZw.7nX9m7BGUu_u1p1qFHzyIg'

async function decryptJwt() {
    const { payload, protectedHeader } = await jose.jwtDecrypt(jwt, secret, {
      issuer: 'urn:example:issuer',
      audience: 'urn:example:audience',
    });
    console.log("~~decrypted~~")
    console.log(protectedHeader)
    console.log(payload)
  }
  
  decryptJwt();