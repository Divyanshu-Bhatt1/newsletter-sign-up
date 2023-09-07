
let error=0;
let check1=(a)=>{
    let str="company.com";
     let j=str.length-1;
     let i=a.length-1;
     while(j>=0 && i>=0)
     {
        if(str[j]===a[i]){
            j--;
            i--;
        }else{
            return false;
        }
     }

     if(j<0)
     {
        return true;
     }else{
        return false;
     }
}

let check=()=>
{
    let a=document.getElementById("email").value;
     
    if((a.search("@") !=-1 )&& check1(a))
    {
        console.log(true)
        return true;
    }else{
        console.log(false)
        error=1;
        return false;
    }

}

document.getElementById("email").addEventListener('keydown',function()
{
    if(error==1)
    {
        document.getElementsByClassName("err")[0].style.display="none";
        document.getElementById("email").style.borderColor = "hsl(231, 7%, 60%)";
        document.getElementById("email").style.color = "black";
        document.getElementById("email").style.backgroundColor ="white";
        error=0;
    }
})

document.getElementsByClassName("subscribe")[0].addEventListener('click',function()
{

    if(check()){
        // document.body.getElementsByClassName('container')[0].classList.add("mk-blur");
        document.body.getElementsByClassName('container')[0].style.display="none";
        document.body.getElementsByClassName('success-container')[0].classList.remove("mk-blur");
    }else{
        document.getElementsByClassName("err")[0].style.display="inline";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.color = "red";
        document.getElementById("email").style.backgroundColor ="#FFCCCB";
    }
    
})