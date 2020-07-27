export async function callAPI(){
  event.preventDefault()
  const url = document.getElementById('site').value;
  validate(url)
  .then(
    function(res){
      if (res){
          console.log("it validated")
          Client.changePage.changePage()
      }
    }
  )

}

async function validate(url){

  const exp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi ;
  const pattern = new RegExp(exp);
  const tested = pattern.test(url);
  return tested;
}

async function API(){
  fetch()
  .then(res => res.json())
  .then(
    if (res){
      console.log(res);
    // Client.changePage.changePage(res)
  }
  )
}
