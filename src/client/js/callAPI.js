export async function callAPI(){
  event.preventDefault()
  const url = document.getElementById('site').value;
  validate(url)
  .then(
    async function(res){
      if (res){
          console.log("it validated")
          const get = await api(url);
          Client.changePage.changePage(get);
      }
    }
  )
};

export function validate(url){

  const exp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi ;
  const pattern = new RegExp(exp);
  const tested = pattern.test(url);
  return tested;
};

const api = async (url)=> {
  const query = "?url=";
  const request = await fetch('/NLP' + query + url);
  try {
    // const response = await request
    const response = await request.json()
    return response
    }
  catch (error) {
    console.log("error", error);
  }


};
