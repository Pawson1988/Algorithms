const string =
  "I don't know what I'm writing here but I'm gonna try and write a long sentence to count all the characters and look for the characters with the frequency in a general Englsh sentence like this one.... I wonder what it'll be. Well I finally finished this algorithm and I'm now just adding more to the string in order to test the algorithm a but more.... I'm gonna put a few special characters in here tooo, which are: $^$£$^*((^$£$%^&*(*&^%$££$%^&*(*&^%$£$%^&*, now it seems that e is the most frequent letter in the English language when using this passge to test it on, let's see if it still remains supreme....";

const stringSpanish =
  "Vamos a ver si la letra mas frequente en espanol tambien es la letra e, a ver, es mas dificil escribir en castellano que ingles, por eso, esto no sera tan largo como lo del ingles.....";

const newString =
  "We and select companies use cookies to store and retrieve information from your browser. This information may be about you, your preferences or your device and is mostly used to make the site work as you expect. While the information does not usually directly identify you, details such as the device, operating system and type of browser may be considered personal data as it helps to create a more personalised web experienceYou can review how this information is used and customise your consent preferences for cookies or for any other identifying technology below by either purpose, feature or third party vendor.Certain vendors may process personal data on the basis of legitimate interests to offer certain services. You have the right to object to the processing of data in this manner and can do so on an individual basis or globally by clickingReject All. Please refer to the vendor tab for more details. You may freely change your preferences at any time by clicking the Cookie Control icon.The aforementioned personalised advertising services adhere to the IAB";

function countChars(string) {
  const obj = {};

  string = string.toLowerCase();

  for (let el of string) {
    let index = string.indexOf(el);
    let charCode = string.charCodeAt(index);
    if (
      (charCode >= 48 && charCode <= 57) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      if (el !== " ") {
        if (obj[el]) {
          obj[el] += 1;
        } else {
          obj[el] = 1;
        }
      }
    }
  }
  return obj;
}

function charMostFrequent(obj) {
  obj1 = Object.values(obj);
  let max = obj1[0];

  for (let el of obj1) {
    if (el > max) {
      max = el;
    }
  }
  let temp = obj1.indexOf(max);
  obj = Object.entries(obj);
  let maxNum = [obj[temp]];

  return maxNum;
}

console.log(countChars(string));
console.log(charMostFrequent(countChars(string)));
