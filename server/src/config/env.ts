export const PORT = (function getValidPort(port: string | undefined) {
  const PORT = Number(port);
  if (Number.isNaN(PORT)) throw Error("PORT is NaN");
  return PORT;
})(process.env.PORT);

export const JWT_SECRET = (function getJWTSecret(secret: string | undefined) {
  return String(secret);
})(process.env.JWT_SECRET);
