let goToMovie = (success,failure)=>{
    let bal = 1000;
    if(bal >500){
        success("Go and Enjoy!")
    }
    else{
        failure("Go to Prostack! and Practice")
    }
}

goToMovie((msg)=>{  console.log(msg) },(err)=>{ console.log(err)})