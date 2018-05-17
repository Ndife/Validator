function link_Url(text2){
     var re =/(https?:\/\/|ftps?:\/\/)([\d|\w].[\w-{2,6}.]*)/g;
        console.log(text2.replace(re, "<a href=\"$1$2\">$2</a>"));
}
 
    let info = 'Visit ftps://genesystechhub.com for more information about Genesys';
    link_Url(info);