const secretKey = "clave_secreta";
import CryptoJS from "crypto-js"


// Función para cifrar un mensaje
export function encrypt(message: string, secretKey: string) {
  var ciphertext = CryptoJS.AES.encrypt(message, secretKey);
  return ciphertext.toString();
}

// Función para descifrar un mensaje
export function decrypt(ciphertext: string, secretKey: string) {
  const bytes  = CryptoJS.AES.decrypt(ciphertext, secretKey);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}