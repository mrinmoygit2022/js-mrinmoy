fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

// Notes about fetch()
// https://developer.mozilla.org/en-US/docs/Web/API/fetch
// https://fetch.spec.whatwg.org/#fetch-method

