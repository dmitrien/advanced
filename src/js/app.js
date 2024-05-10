export function orderByProps(obj, props) {
  let sort_obj = [];
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
            sort_obj.push({ key: key, value: obj[key] });
      }
  }
    sort_obj.sort((a, b) => {
      let indexA = props.indexOf(a.key);
      let indexB = props.indexOf(b.key);

      if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
      }
      else if (indexA === -1 && indexB === -1) {
          return a.key.localeCompare(b.key);
      }
      else if (indexA !== -1) {
          return -1;
      }
      else {
          return 1;
      }
  });

  return sort_obj;
}


