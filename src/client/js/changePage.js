export function changePage(apiData){

  const url = document.getElementById('site').value;
  let tone;
      if (apiData.agreement === "DISAGREEMENT"){
        tone = "conflicting";
      } else{
        tone = "consistent";
      };
  let irony;
      if (apiData.irony === "NONIRONIC"){
        irony = "non-ironic";
      } else{
        irony = "ironic";
      }
  let subjectivity;
      if (apiData.subjectivity === "OBJECTIVE"){
        subjectivity = "objective";
      } else {
        subjectivity = "subjective"
      }
  let sentiment;
        if (apiData.score_tag === "P+"){
          sentiment ="very positive";
        } else if (apiData.score_tag === "P"){
          sentiment ="positive";
        } else if (apiData.score_tag === "NEU"){
          sentiment ="neutral";
        } else if (apiData.score_tag === "N"){
          sentiment ="negative";
        } else if (apiData.score_tag === "N+"){
          sentiment ="very negative";
        } else if (apiData.score_tag === "NONE"){
          sentiment ="lack of";
        }

const confidence = apiData.confidence;

  const results = document.getElementById('results');
  results.innerHTML =

  "<p>Using a generic model, the text on <u>" + url + "</u> has " + tone + " tones. It leans toward being <i>" + irony + "</i> and <i>" + subjectivity +"</i>. Overall, it has a <strong>" + sentiment + "</strong> sentiment.</p><p>The <a href ='https://www.meaningcloud.com/developer/sentiment-analysis'>MeaningCloud Sentiment</a> analysis service is <strong>" + confidence + "%</strong> sure of this rating.</p>"

  console.log(apiData);

  mood(apiData)
}

export function mood(apiData){
  const mood = apiData.score_tag;
  if (mood === "P+" || mood ==="P"){
    let body = document.getElementsByTagName('body')[0];
    body.style = "background: radial-gradient(at top, #3f7363, #145c46)";
    console.log("your mood is positive");
  } else if (mood === "NEU" || mood === "NONE"){
    let body = document.getElementsByTagName('body')[0];
    body.style = "background: radial-gradient(at top, #737140, #5c5914)";
    console.log("your mood is neutral");
  } else if (mood === "N" || mood === "N+"){
    let body = document.getElementsByTagName('body')[0];
    body.style = "background: radial-gradient(at top, #3f3963, #1e145c)";
    console.log("your mood is negative");
  }

}
