let textbox = document.getElementById("textarea");

textbox.addEventListener("input",function()
{
    var text = this.value;
    //   console.log(text);
    let charactercount = text.length;
    document.getElementById("character").innerHTML = charactercount;

    text = text.trim();
    let words = text.split(" ");
    let cleanlist = words.filter(function( elm)
    {
        return  elm != "";
    });
    document.getElementById("words").innerHTML = cleanlist.length;
    
    
    
    console.log(words);


});