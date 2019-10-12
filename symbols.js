const allCapsAlpha = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const allLowerAlpha = [...'abcdefghijklmnopqrstuvwxyz'];
const allUniqueChars = [...'~!@#$%^&*()_+-=[]\{}|;:'\',./<>?'];
const allNumbers = [...'0123456789'];
const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha, ...allUniqueChars];

module.exports = base;
