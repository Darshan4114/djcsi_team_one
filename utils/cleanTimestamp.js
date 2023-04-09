/**
 * @description This utility scans array of objects for timestamps of structure {seconds:... , nanoseconds:... }
 * and replaces them with date strings. This helps us use the array to map to react components
 */

export default function cleanTimestamp(objArr, stringType = "date") {
  return objArr.map((obj) => {
    for (const prop in obj) {
      if (obj[prop] && obj[prop].seconds) {
        if (stringType === "date") {
          obj[prop] = new Date(obj[prop].seconds * 1000).toDateString();
        } else if (stringType === "datetime") {
          obj[prop] = new Date(obj[prop].seconds * 1000).toString();
        }
      }
    }
    return obj;
  });
}

const isLiteralObject = function (a) {
  return !!a && a.constructor === Object;
};
