const searchData = [
    "almond","beach","cactus","dolphin","eagle","feather","globe","honey","island","jungle","kiwi","lighthouse","moon","noodle","ocean","pineapple","quill","rainbow","sandwich","tulip","unicorn","volcano","waffle","xylophone","yoga","zeppelin","acorn","butterfly","candle","daisy","earth","firefly","grape","hiking","iceberg","jigsaw","kayak","lizard","mountain","nectar","oasis","palm","quokka","raccoon","seashell","thunder","umbrella","violet","whistle","xylophone","yacht","zebra","amethyst","blossom","caramel","diamond","emerald","flamingo","gazelle","honeydew","indigo","jade","kiwi","lavender","mimosa","ninja","opal","pansy","quartz","rose","sapphire","tulip","uranium","vanilla","wisteria","xenon","yarrow","zephyr","apricot","blueberry","cotton","dandelion","evergreen","firework","grapefruit","hazelnut","icicle","jasmine","kangaroo","leopard","mistletoe","nymph","orchid","peacock","quiver","raven","sunflower","thistle","umbrella","violet","willow","xerox","yacht","zucchini"
]

const ip = document.querySelector("input");
const sug = document.querySelector(".sug");

function generateSuggestion(userIp)
{
    sug.innerHTML='';
  
    //create an array to store matching items of searchData Array.
    let match=[];

    for(word of searchData)
    {
        if(word.includes(userIp))
        match.push(word);
        if(match.length==10) break;  //maximum suggetion will be 10
    }

    console.log(match);  //printing matched elements
    for(item of match)
    {
        //creating p elements and inserting items into <div sug> elements
        const El = document.createElement("p");
        El.textContent=item;

        sug.append(El);
    }
}


//onchange event fire
ip.addEventListener("input",function()
{
    const userIp = ip.value;
    generateSuggestion(userIp); //called function by taking input value
})