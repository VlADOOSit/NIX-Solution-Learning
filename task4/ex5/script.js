let names = 'Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo';

function replaceNames(str) {
    let re = /(\w+), (\w+)/g;

    let newstr = names.replace(re, '$2 $1');

    return newstr.replace(/\n/g, '\n\n');
}

console.log(replaceNames(names));