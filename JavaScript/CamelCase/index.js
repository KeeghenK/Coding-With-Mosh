
processData(['S;M;plasticCup()',
'C;V;mobile phone',
'C;C;coffee machine',
'S;C;LargeSoftwareBook',
'C;M;white sheet of paper',
'S;V;pictureFrame'
]);

function processData(input) {
    for (let elements of input) {
        if (elements.startsWith('S;')) {
            str = elements.slice(4);
            if (elements.startsWith('S;M;')) {
                str = (str.replace('()', ''));
            }
            for (let i = 0; i < str.length; i++) {
                let letter = str.charAt(i);
                if (letter == letter.toUpperCase()) {
                    str = str.replace(`${letter}`, ` ${letter.toLowerCase()}`).trim();
                }
            }
        }
          
        if (elements.startsWith('C;')) {
            str = elements.slice(4);
            if (elements.startsWith('C;M;')) {
                str = `${str}()`;
            }
            if (elements.startsWith('C;C;')) {
                for (let i = 0; i < str.length; i++) {
                    let letter = str.charAt(i);
                    if (str.includes(` ${letter}`)) {
                        str = str.replace(` ${letter}`, `${letter.toUpperCase()}`);
                    }
                    if (letter === str.charAt(0)) {
                        str = str.replace(`${letter}`, `${letter.toUpperCase()}`);
                    }
                }
            }
            if (elements.startsWith('C;V;') || elements.startsWith('C;M;')) {
                for (let i = 0; i < str.length; i++) {
                    let letter = str.charAt(i);
                    if (str.includes(` ${letter}`)) {
                        str = str.replace(` ${letter}`, `${letter.toUpperCase()}`);
                    }
                }
            }
        }
        console.log(str);
    }
} 