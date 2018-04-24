export function gql(strings, ...values) {
  let raw;
  if (typeof strings === 'string') {
    raw = [strings];
  } else {
    raw = strings.raw;
  }
  const resultArr = [];
  for (let i = 0; i < raw.length; i += 1) {
    resultArr.push(raw[i]);
    if (i < values.length) {
      resultArr.push(values[i]);
    }
  }
  return resultArr.join('').trim();
}

export default {
  gql
};
