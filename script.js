const convertNow=()=>{
    let box=document.querySelector('#box').value;
    let output=document.querySelector('#output');
    
    let selectedTemp=document.querySelector('#operation').value;

    const ctof=(c)=>{
        let f = Math.round((((9*c)/5)+32));
        return f;
    }

    const ftoc=(f)=>{
        let c = Math.round((f-32)*(5/9));
        return c;
    }

    let result;
    if(selectedTemp=="celcius"){
        result=ctof(box);
        output.innerHTML=`${result} °F`;
    }
    else{
        result=ftoc(box);
        output.innerHTML=`${result} °C`;
    }
}