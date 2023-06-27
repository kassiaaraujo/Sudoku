(function eventDificulty(){
    let difAtual = 0;

    const prevButton= document.getElementById('prev');
    prevButton.onclick= () => {
        console.log(difAtual)
        if (difAtual !==0){
            difAtual -=1;
            document.getElementById('difficulty-option').style.transform=`translateX(${difAtual*-100}%)`
            
        }
    }

    const nextButton= document.getElementById('next');
    nextButton.onclick= () => {

        if (difAtual !==2){
            difAtual +=1;
            document.getElementById('difficulty-option').style.transform=`translateX(${difAtual*-100}%)`
            
        }
    }
})()