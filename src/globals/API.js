const api = ({
  uri,
  method = "GET",
  headers = { "Content-Type": "application/json" },
  body,
}) =>
  new Promise(async (resolve, reject) => {
    const response = await fetch(uri, {
      method,
      headers,
      body,
    });
    const data = await response.json();

    if (!response.ok) {
      return reject(new Error("There Was An Error!"));
    }
    return resolve(data);
  });

export default api;
