const getLetter = (number, currentL) => {
  let letter;
  // console.log(number);
  if (currentL && typeof currentL?.toLowerCase == `function` && currentL?.toLowerCase()) {
    var currentLang = currentL?.toLowerCase();
  } else {
    var currentLang = "";
  }
  switch (number) {
    case 0:
      letter = currentLang == `ar` ? `أ.` : "A.";
      break;
    case 1:
      letter = currentLang == `ar` ? `ب.` : "B.";
      break;
    case 2:
      letter = currentLang == `ar` ? `ج.` : "C.";
      break;
    case 3:
      letter = currentLang == `ar` ? `د.` : "D.";
      break;
    case 4:
      letter = currentLang == `ar` ? `ه.` : "E.";
      break;
    default:
      letter = currentLang == `ar` ? `أ.` : null;
      break;
  }

  return letter;
};

export default getLetter;
