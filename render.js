/** @jsx createElement */
/** @jsxFrag createFragment */

for (let script of scripts) {
    document.getElementById("scriptGrid").appendChild(
        <div className="scriptCard" onclick={()=>{window.open(script.downloadLink, '_blank').focus();}}>
            <div class="thumbnail" style={"--image: url(scripts/"+ script.codename +".png)"}></div>
            <div class="title">{script.name}</div>
            <div class="creator">
                <img class="pfp" src={"creators/"+ script.creator +".png"} alt=""></img>
                <div class="name">{creators[script.creator].name}</div>
            </div>
        </div>
    )
}

//  <div class="buttons">
//      <a class="button installButton"><ion-icon name="download-outline"></ion-icon></a>
//      <a class="button viewCodeButton"><ion-icon name="code-working-outline"></ion-icon></a>
//  </div>