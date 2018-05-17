
function colorValidation(text){
        console.log(text.match(/#[a-f0-9]{3,8}/ig)); 
}
let info = `#AACCFF mdam #AACCFF #23d #kld`;
colorValidation(info);