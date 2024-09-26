const buttonTag = document.getElementById('btn-color-change');

const btnTags = buttonTag.getElementsByTagName("button");

let lastClicked = null

for (let singleButton of btnTags){

    singleButton.addEventListener('click', function(){
        console.log(lastClicked)
        if(lastClicked == null){

            singleButton.style.backgroundColor = '#B4F461'
            singleButton.style.color = 'black'
            lastClicked = singleButton
        }
        else{
            lastClicked.style.backgroundColor = 'transparent'
            lastClicked.style.color = 'black'

            singleButton.style.backgroundColor = '#B4F461'
            singleButton.style.color = 'black'
            lastClicked = singleButton
        }

    })


}

