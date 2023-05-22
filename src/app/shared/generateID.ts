export function generateId(T: any) {
  let max;
  if (T.length == 0) {
    max = 0;
  }
  else {
    max = T[0].id;

    for (var i = 1; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;

      }
    }
  }
  return max + 1;



}