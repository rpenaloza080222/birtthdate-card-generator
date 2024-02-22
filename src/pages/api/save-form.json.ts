import type { APIRoute } from "astro";
import { encrypt, decrypt } from "../../resources/utils/crypto";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { token, key, value, step } = body;

  // Decrypt the token
  console.log(token, import.meta.env.SECRET_KEY)
  const tokenDecrypted = decrypt(token, import.meta.env.SECRET_KEY);
  // Parse the string to obtain the current object
  console.log(tokenDecrypted)
  let formDataParse = {};
  if(tokenDecrypted){
    formDataParse = JSON.parse(tokenDecrypted)
  }
  // Add the new key
  formDataParse = {
    ...formDataParse,
    [key]: value,
    step: step + 1
  };

  console.log(formDataParse)

  //Encrypt the new form data
  const newFormEncrypted = encrypt(JSON.stringify(formDataParse), import.meta.env.SECRET_KEY);

  return new Response(JSON.stringify({
    newToken: newFormEncrypted
  }));
};
