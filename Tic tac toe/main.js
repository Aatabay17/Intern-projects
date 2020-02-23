


let gamePlaying;
let player;
let active;
let firstPlayerArray;
let secondPlayerArray;


let firstPlayerGlobalScore = 0;
let secondPlayerGlobalScore = 0;

init();

function init(){
    gamePlaying = true;
    player = 0;
    active = '';
    firstPlayerArray = [];
    secondPlayerArray = [];
    document.getElementById('btn-1').textContent = '';
    document.getElementById('btn-2').textContent = '';
    document.getElementById('btn-3').textContent = '';
    document.getElementById('btn-4').textContent = '';
    document.getElementById('btn-5').textContent = '';
    document.getElementById('btn-6').textContent = '';
    document.getElementById('btn-7').textContent = '';
    document.getElementById('btn-8').textContent = '';
    document.getElementById('btn-9').textContent = '';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');
    console.log('INITED');
}

function pressBtn(event){
    //  player === 0 ? active = 'X' : active = 'O';
    //  player = 1 - player;
    if(gamePlaying === true){
        if(player === 0 && event.target.textContent===''){
            active='X';
            player = 1;
            firstPlayerArray.push(event.target.attributes.position.value);
            event.target.textContent = active;
        }else if(player === 1 && event.target.textContent === '' ){
            active='O';
            player=0;
            secondPlayerArray.push(event.target.attributes.position.value);
            event.target.textContent = active;
        }
        let element = event.target.attributes.position.value;
        // event.target.textContent = active;
            
        winner();
    }
    else init();
}

function winner(){

    //Possible win for first player

        const diagResultLeft = firstPlayerArray.filter(position => position === '0 0' || position ==='1 1' || position ==='2 2');

        const diagResultRight = firstPlayerArray.filter(position => position === '0 2' || position ==='1 1' || position ==='2 0');

        const firstRowResultRight = firstPlayerArray.filter(position => position === '0 0' || position ==='0 1' || position ==='0 2');

        const secondRowResultRight = firstPlayerArray.filter(position => position === '1 0' || position ==='1 1' || position ==='1 2');

        const thirdRowResultRight = firstPlayerArray.filter(position => position === '2 0' || position ==='2 1' || position ==='2 2');

        const firstColumnResult = firstPlayerArray.filter(position => position === '0 0' || position ==='1 0' || position ==='2 0');

        const secondColumnResult = firstPlayerArray.filter(position => position === '0 1' || position ==='1 1' || position ==='2 1');

        const thirdColumnResult = firstPlayerArray.filter(position => position === '0 2' || position ==='1 2' || position ==='2 2');

        
        //Possible win for second player
        const diagResultLeftSecond = secondPlayerArray.filter(position => position === '0 0' || position ==='1 1' || position ==='2 2');

        const diagResultRightSecond = secondPlayerArray.filter(position => position === '0 2' || position ==='1 1' || position ==='2 0');

        const firstRowResultRightSecond = secondPlayerArray.filter(position => position === '0 0' || position ==='0 1' || position ==='0 2');

        const secondRowResultRightSecond = secondPlayerArray.filter(position => position === '1 0' || position ==='1 1' || position ==='1 2');

        const thirdRowResultRightSecond = secondPlayerArray.filter(position => position === '2 0' || position ==='2 1' || position ==='2 2');

        const firstColumnResultSecond = secondPlayerArray.filter(position => position === '0 0' || position ==='1 0' || position ==='2 0');

        const secondColumnResultSecond = secondPlayerArray.filter(position => position === '0 1' || position ==='1 1' || position ==='2 1');

        const thirdColumnResultSecond = secondPlayerArray.filter(position => position === '0 2' || position ==='1 2' || position ==='2 2');

        

        //Winner will be..

        if(diagResultLeft.length > 2 || diagResultRight.length > 2 || firstRowResultRight.length > 2 || secondRowResultRight.length > 2 || thirdRowResultRight.length > 2 || firstColumnResult.length > 2 || secondColumnResult.length > 2 || thirdColumnResult.length > 2){
            //first player won

            firstPlayerGlobalScore++;

            document.querySelector('#name-0').textContent = 'Winner!';

            document.querySelector('.global-score-0').textContent = firstPlayerGlobalScore;

            document.querySelector('.player-0').classList.add('winner');

            //will be imediatelly restarted
            //init(); 

            //will be restarted if we click any button
            gamePlaying = false;

            
        }
        else if(diagResultLeftSecond.length > 2 || diagResultRightSecond.length > 2 || firstRowResultRightSecond.length > 2 || secondRowResultRightSecond.length > 2 || thirdRowResultRightSecond.length > 2 || firstColumnResultSecond.length > 2 || secondColumnResultSecond.length > 2 || thirdColumnResultSecond.length > 2){
            //second player won

            secondPlayerGlobalScore++;

            document.querySelector('#name-1').textContent = 'Winner!';

            document.querySelector('.global-score-1').textContent = secondPlayerGlobalScore;

            document.querySelector('.player-1').classList.add('winner');


            //will be imediatelly restarted
            //init(); 

            //will be restarted if we click any button
            gamePlaying = false;

        }

    }




function pressRestart(event){
    
    firstPlayerGlobalScore = 0;

    secondPlayerGlobalScore = 0;

    document.querySelector('.global-score-0').textContent = firstPlayerGlobalScore;
    document.querySelector('.global-score-1').textContent = secondPlayerGlobalScore;

    init();
}