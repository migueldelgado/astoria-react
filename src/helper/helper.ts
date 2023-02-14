export const generateRandomString = (stringLength?: number) => {
  const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let generatedString = '';
  for (let i = 0 ; i < (stringLength || 10) ; i++) {
    generatedString += charList.charAt(Math.random() * charList.length);
  }
  return generatedString
}