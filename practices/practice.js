// new Promise((resolve, reject) => {
//   const head = false

//   if(head){
//     resolve('Its Head You Win')
//   }else{
//     reject('Its Tail You Loss')
//   }
// }).then(msg => console.log(msg))
// .catch(msg => console.log(msg))
// .finally(() => console.log('Good Luck'))



/////////////////////////////////////////////

function loginUser(username, password){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(username === 'admin' && password === '1234'){
        resolve('Login Successful')
      }else{
        reject('Login Failed')
      }
    }, 2000);
  })
}


async function handleLogin() {
  try{
    console.log('Trying to log in....');
    const result = await loginUser('admin', '1234')    
    console.log(result);
  }catch(error){
    console.log(error)
  }
}

handleLogin()







