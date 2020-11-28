const api = ({ method = "GET", uri, body, headers, token }) =>
  new Promise(async (resolve, reject) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      token && myHeaders.append("Authorization", `Bearer ${token}`);

      const response = await fetch(uri, {
        method,
        headers: headers || myHeaders,
        body,
      });
      if (!response.ok) {
        throw response;
      }
      let data = await response.json();
      console.log("[API Data]:", data);
      resolve(data);
    } catch (err) {
      const error = await err.json();
      alert("Whoops: " + error.message);
      console.log("[API Error]:", error);
      reject(error);
    }
  });

export default api;
