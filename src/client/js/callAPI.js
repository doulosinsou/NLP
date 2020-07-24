export function callAPI(){
  const url = document.getElementById('site').value;
  // validate(url
  console.log("did it validate?")
}

function validate(url){


//found via https://stackoverflow.com/a/14582229
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  const tested = pattern.test(url);

  console.log(tested);
}
