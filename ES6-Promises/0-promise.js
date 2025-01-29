export default function getResponseFromAPI(success = true) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve('Successful');
    } else {
      reject(new Error('Failed'));
    }
  });
}
