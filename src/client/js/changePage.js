export function changePage(apiData){

  const results = document.getElementById('results');

  const alert = "The API is failing to authenticate. A notice on their documentation page says that accounts created after mid July would no longer be supported."

  results.classList.toggle('results');
  results.innerHTML = "'"+ apiData + "' : " + alert;
}
