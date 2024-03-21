const shuffle = (ansArray) => {
  ansArray = [...ansArray];

  let resultArray = Array(ansArray.length).fill(null);

  if (
    ansArray.some(
      (e) =>
        containsNoCase(e, `(A) و (B`) ||
        containsNoCase(e, `(أ) و (ب)`) ||
        containsNoCase(e, `A and B`) ||
        containsNoCase(e, `(A) و (C`) ||
        containsNoCase(e, `A and C`) ||
        containsNoCase(e, `كلاً من (A) و (C)`) || 
        containsNoCase(e, `جميع ما سب`) ||
        containsNoCase(e, `all of the abov`) ||
        containsNoCase(e, `ا شيء مما س`)
    )
  ) {
    ansArray.forEach((element, index) => {
      if (
        containsNoCase(element, `(A) و (B`) ||
        containsNoCase(element, `(أ) و (ب)`) ||
        containsNoCase(element, `A and B`)
      ) {
        resultArray[2] = element;
        ansArray = ansArray.filter((e) => e != element);
      }
      if (
        containsNoCase(element, `(A) و (C`) ||
        containsNoCase(element, `A and C`) ||
        containsNoCase(element, `كلاً من (A) و (C)`)
      ) {
        resultArray[ansArray.length - 1] = element;
        ansArray = ansArray.filter((e) => e != element);
      }
      if (
        containsNoCase(element, `جميع ما سب`) ||
        containsNoCase(element, `all of the abov`) ||
        containsNoCase(element, `ا شيء مما س`)
      ) {
        resultArray[ansArray.length - 1] = element;
        ansArray = ansArray.filter((e) => e != element);
      }
    });
    resultArray.forEach((element, index) => {
      if (element === null) {
        resultArray[index] = ansArray.shift();
      }
    });

    return resultArray;
  } else {
    for (let i = ansArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ansArray[i], ansArray[j]] = [ansArray[j], ansArray[i]];
    }

    return ansArray;
  }
};

function containsNoCase(sentence, searchText) {
  return sentence.toLowerCase().includes(searchText.toLowerCase());
}

export default shuffle;
