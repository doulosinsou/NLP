export function changePage(apiData){

  const results = document.getElementById('results');

  const alert = "The API is failing to authenticate. A notice on their documentation page says that accounts created after mid July would no longer be supported.";


  results.classList.toggle('results');
  results.innerHTML = "'"+ apiData + "' : " + alert;
  console.log(apiData);

  mood(apiData)
}

export function mood(apiData){
  const mood = apiData.mood;
  if (mood === "business"){
    let body = document.getElementsByTagName('body')[0];
    body.style = "background: radial-gradient(at top, #3f7363, #145c46)";
    console.log("your mood is business");
  } else if (mood === "academic"){
    let body = document.getElementsByTagName('body')[0];
    body.style = "background: radial-gradient(at top, #737140, #5c5914)";
  } else if (mood === "casual"){
    let body = document.getElementsByTagName('body')[0];
    body.style = "background: radial-gradient(at top, #3f3963, #1e145c)";
  }

}
