// Pluralize

function pluralize(string) {
  if(string[string.length - 1] === 's') return string;
  else if (string[string.length - 1] === 'y' && !['a','e','i','o','u'].includes(string[string.length - 2])) return string.slice(0, -1) + 'ies';
  return string + 's';
}
