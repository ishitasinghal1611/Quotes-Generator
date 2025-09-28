let url="https://quotes-api-self.vercel.app/quote";
let generateBtn=document.querySelector('#generate');
let quotePara=document.querySelector('#quote');
let quoteAuthor=document.querySelector('#author');

generateBtn.addEventListener('click',getQuote);

async function getQuote(){
    try{
        let res=await axios.get(url);
        quotePara.innerText= res.data.quote;
        quoteAuthor.innerText= res.data.author;

    }catch(e){
        console.log("ERROR - ",e);
    }
}
async function getAuthor() {
    try{
        let res = await axios.get(url);
        return res.data.author;
    }catch(e){
        console.log("ERROR - ",e);
    }
}

// fav quotes functioning--->
let favBtn=document.querySelector("#fav");
favBtn.addEventListener('click',()=>{
    favBtn.style.backgroundColor="hotpink";
    favBtn.style.color="white";
})
favBtn.addEventListener('',()=>{
    favBtn.style.backgroundColor="#FDF9F3";
    favBtn.style.color="black";
})
