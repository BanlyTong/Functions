const destinations = {
    A: { B: 4, C: 8, D: 10, E: 8, F: 7 },
    B: { C: 4, D: 5, E: 7, F: 6 },
    C: { D: 4, E: 8, F: 11 },
    D: { E: 6, F: 8 },
    E: { F: 4 },
    F: {}
};
console.time("ended: ");

const permutations = (array) => {
    let output = [];

    if (array.length === 1) {
        output = array;
    }

    for (let i = 0; i < array.length; i++) {
        const letter = array[i];
        // Slice from the start of the array up to the current index (left)
        // Concat first slice with the remaining letters after the index (right)

        const left = array.slice(0, i);
        const right = array.slice(i + 1);
        const permString = left.concat(right);

        // console.log({letter, left, right, permString})
        // Recursively create permutations
        const single_permutation = permutations(permString)
        // console.log({single_permutation})
        for (let j = 0; j < single_permutation.length; j++) {
            const perm_letter = single_permutation[j]

            // Loop through permutations and concat each current letter (from outer scope)
            // with the current permutation set
            // push array combination to output
            output.push([...letter, ...perm_letter]);
        }
    }

    return output
}

const calculateCost = (routes, grahp) => {
    const unique = [];
    const result = [];
    for (let route of routes) {
        const alais = route.join('');
        const path = route.slice(0).reverse().join('');
        // if(unique.includes(path)) continue;

        let cost = 0;
        for (let i = 0; i < route.length; i++) {
            if ((i + 1) === route.length) break;

            let edge = grahp[route[i]][route[i + 1]];
            edge = edge ? edge : grahp[route[i + 1]] ? grahp[route[i + 1]][route[i]] : undefined;

            if (!edge) { cost = 0; break; }
            cost += edge;
        }

        unique.push(alais);
        if (cost === 0) continue;
        result.push({ cost, route });
    }
    return result;
}

const getShortestRoute = (grahp, start, finish) => {
    let goals = Object.keys(grahp);
    let nodes = goals.slice(0);
    let routes = [];

    if(goals.includes(start)) nodes = nodes.filter(n => n !== start);
    if(goals.includes(finish)) nodes = nodes.filter(n => n !== finish);

    // console.log({nodes});

    routes = permutations(nodes);

    if(goals.includes(start)) routes = routes.map(r => [start, ...r]);
    if(goals.includes(finish)) routes = routes.map(r => [...r, finish]);

    const result = calculateCost(routes, grahp);

    const shortest = result.reduce((min, current) => {
        if (min.cost > current.cost) return current;
        return min;
    });

    return shortest;
}
function array_nth_permutation(a, n) {
    var b = a.slice();  // copy of the set
    var len = a.length; // length of the set
    var res;            // return value, undefined
    var i, f;

    // compute f = factorial(len)
    for (f = i = 1; i <= len; i++)
        f *= i;

    // if the permutation number is within range
    if (n >= 0 && n < f) {
        // start with the empty set, loop for len elements
        for (res = []; len > 0; len--) {
            // determine the next element:
            // there are f/len subsets for each possible element,
            f /= len;
            // a simple division gives the leading element index
            i = Math.floor(n / f);
            // alternately: i = (n - n % f) / f;
            res.push(b.splice(i, 1)[0]);
            // reduce n for the remaining subset:
            // compute the remainder of the above division
            n %= f;
            // extract the i-th element from b and push it at the end of res
        }
    }
    // return the permutated set or undefined if n is out of range
    return res;
}
console.log(array_nth_permutation(['A','B','C', 'D'], 10))
const shortest = getShortestRoute(destinations);

console.log({ shortest});
console.timeEnd("ended: ")

// console.log({paths, length: paths.length});