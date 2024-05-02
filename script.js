function func1(arr, num) {
    if (num === 1) {
      return arr.filter(item => typeof item === 'number');
    } else if (num === 2) {
      return arr.reduce((acc, char) => {
        if (acc.includes(char)) {
          return acc;
        } else {
          return acc + char;
        }
      }, '');
    } else if (num === 3) {
      const [a, b] = arr;
      return a.filter(item => !b.includes(item));
    } else if (num === 4) {
      const pairs = [];
      for (let i = 0; i < arr.length; i += 2) {
        pairs.push(arr.slice(i, i + 2));
      }
      if (arr.length % 2 !== 0) {
        pairs[pairs.length - 1].push('_');
      }
      return pairs.map(pair => pair.join(''));
    } else {
      return "?";
    }
  }
  
 
  console.log(func1([1, 2, 'a', 'b'], 1)); 
  console.log(func1([[1, 2], [1]], 3));

  
  




  function func2(input) {
    const output = {};
    Object.entries(input).forEach(([key, value]) => {
        const obj = {};
        
        value.forEach(char => {
            

            if (!obj[char]) {
                obj[char] = true;
            }
        });
        output[key] = Object.keys(obj);
    });

    return output;
}

const input1 = {
    "1": ["C", "F", "G"],
    "2": ["A", "B", "C"],
    "3": ["A", "B", "D"]
};

const input2 = {
    "1": ["A"],
    "2": ["A"],
    "3": ["A"]
};

const input3 = {
    "432": ["A", "A", "B", "D"],
    "53": ["L", "G", "B", "C"],
    "236": ["L", "A", "X", "G", "H", "X"],
    "11": ["P", "R", "S", "D"]
};

console.log(func2(input1));
console.log(func2(input2));
console.log(func2(input3));








function func3(good, evil) {
    const num1 = [1, 2, 3, 3, 4, 10];
    const num2 = [1, 2, 2, 2, 3, 5, 10];

    const goodTotal = good.split(' ').reduce((total, value, index) => total + (value * num1[index]), 0);
    const evilTotal = evil.split(' ').reduce((total, value, index) => total + (value * num2[index]), 0);

    if (goodTotal > evilTotal) {
        return "Battle Result: Good triumphs over Evil";
    } else if (goodTotal < evilTotal) {
        return "Battle Result: Evil eradicates all trace of Good";
    } else {
        return "Battle Result: No victor on this battle field";
    }
}


const goodArmy = "1 2 3 3 4 10";
const evilArmy = "1 2 2 2 3 5 10";
console.log(func3(goodArmy, evilArmy));








function func4(ip) {
    const octets = ip.split('.');

    if (octets.length !== 4) {
        return false;
    }
    for (let octet of octets) {
        if (!/^\d{1,3}$/.test(octet)) {
            return false;
        }
        const num = Number(octet);
        if (num < 0 || num > 255) {
            return false;
        }
        if (octet.length > 1 && octet[0] === '0') {
            return false;
        }
    }

    return true;
}
console.log(func4("1.2.3.4")); 
console.log(func4("123.045.067.089")); 








function func5(year) {
    if (year < 1600 || year > 4000) {
        return false;
    }
    
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            return true; 
        } else {
            if (year % 400 === 0) {
                return true; 
            } else {
                return false;
            }
        }
    } else {
        return false; 
    }
}


console.log(`Год: ${func5(2024)}`); 
