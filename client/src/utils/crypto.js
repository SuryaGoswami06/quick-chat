import AES from 'crypto-js/aes'
import UTF from 'crypto-js/enc-utf8'

const encrypt =async (plainText)=>{
  return  AES.encrypt(plainText,import.meta.env.VITE_CRYPTO_SECRET_KEY).toString();
}
const decrypt = async (encryptedText)=>{
  const decryptedText = AES.decrypt(encryptedText,import.meta.env.VITE_CRYPTO_SECRET_KEY)
  return decryptedText.toString(UTF);
}

export {decrypt,encrypt}