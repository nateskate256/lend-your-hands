const getAuth =async function () {
 const data = await fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body:
      "grant_type=client_credentials&client_id=" +
      process.env.REACT_APP_PETFINDER_API +
      "&client_secret=" +
      process.env.REACT_APP_PETFINDER_SECRET,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  data = data.json();
  return data.access_token;
};

export default getAuth;