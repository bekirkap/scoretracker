//--My Selectors--//
const fpButton = document.getElementById("player1-button")
const spButton = document.getElementById("player2-button")
const resetButton = document.getElementById("reset-button")
const scoreInput = document.getElementById("score-to-win")
const fpScore = document.getElementById("firstplayerscore")
const spScore = document.getElementById("seconplayerscore")

let scoreOne = Number(fpScore.textContent)
let scoreTwo = Number(spScore.textContent)
let limitScore = Number(scoreInput.value)





    
 
scoreInput.addEventListener('change', function() { 
   limitScore = this.value
   console.log(limitScore);
}); 

resetButton.addEventListener("click", () =>{
    scoreOne = 0
    scoreTwo = 0
    fpScore.textContent =  scoreOne
    spScore.textContent =  scoreTwo
    fpButton.disabled = false
    spButton.disabled = false
    fpScore.classList.remove('winner', 'loser')
    spScore.classList.remove('winner', 'loser')
    
})

fpButton.addEventListener("click", () =>{
    scoreOne++  
    if( scoreOne == limitScore){
        console.log('selam');
        fpScore.classList.add('winner')
        spScore.classList.add('loser')
        fpButton.disabled = true
        spButton.disabled = true

    }
    fpScore.textContent = scoreOne   

}) 
spButton.addEventListener("click", () =>{
    
    scoreTwo++ 
    if( scoreTwo == limitScore){
        console.log('selam');
        spScore.classList.add('winner')
        fpScore.classList.add('loser')
        fpButton.disabled = true
        spButton.disabled = true
        
    }
    spScore.textContent = scoreTwo 
    
    
    
}) 



