var flag = true;
var state =[1,0,1,1,0,0,0,1,1];
var user1_score=0;
var user2_score=0;
const user1 = document.querySelector('#user1');
const user2 = document.querySelector('#user2');
const winnerDiv = document.getElementById('winner');
document.querySelector('.container').addEventListener('click', function(e){
    // console.log(e.target.id);
    const targetDiv = e.target;
    if(state[targetDiv.id] == 1 || state[targetDiv.id] == 0){
        if(flag){
            document.getElementById(targetDiv.id).innerHTML = 'X';
            state[targetDiv.id] = 'X';
            checkWinner(flag);
        }
        else{
            document.getElementById(targetDiv.id).innerHTML = 'O';
            state[targetDiv.id] = 'O';
            checkWinner(flag);
        }
        // document.getElementById(targetDiv.id).innerHTML = (flag)? 'X' : 'O';
        flag = !flag;
    }
    else{
        alert("Not allowed");
    }
    console.log(state);
});


function checkWinner(flag)
{
    if(state[0]==state[1] && state[0]==state[2]){
        // alert("Winner Row-1");
        winnerDiv.innerHTML = (flag)? 'Winner X' : 'Winner O';
        displayScore(flag);
        changeBgColor(0,1,2);
        setDisabled();
    }
    else if(state[3]==state[4] && state[3]==state[5]){
        // alert("Winner Row-2");
        winnerDiv.innerHTML = (flag)? 'Winner X' : 'Winner O';
        displayScore(flag);
        changeBgColor(3,4,5);
        setDisabled();
    }
    else if(state[6]==state[7] && state[6]==state[8]){
        // alert("Winner Row-3");
        winnerDiv.innerHTML = (flag)? 'Winner X' : 'Winner O';
        displayScore(flag);
        changeBgColor(6,7,8);
        setDisabled();
    }
    else if(state[0]==state[3] && state[0]==state[6]){
        // alert("Winner col-1");
        winnerDiv.innerHTML = (flag)? 'Winner X' : 'Winner O';
        displayScore(flag);
        changeBgColor(0,3,6);
        setDisabled();
    }
    else if(state[1]==state[4] && state[1]==state[7]){
        // alert("Winner col-2");
        winnerDiv.innerHTML = (flag)? 'Winner X' : 'Winner O';
        displayScore(flag);
        changeBgColor(1,4,7);
        setDisabled();
    }
    else if(state[2]==state[5] && state[2]==state[8]){
        // alert("Winner col-3");
        winnerDiv.innerHTML = (flag)? 'Winner X' : 'Winner O';
        displayScore(flag);
        changeBgColor(2,5,8);
        setDisabled();
    }
    else if(state[0]==state[4] && state[0]==state[8]){
        // alert("Winner dia-1");
        winnerDiv.innerHTML = (flag)? 'Winner X' : 'Winner O';
        displayScore(flag);
        changeBgColor(0, 4, 8);
        setDisabled();
    }
    else if(state[2]==state[4] && state[2]==state[6]){
        // alert("Winner dia-2");
        winnerDiv.innerHTML = (flag)? 'Winner X' : 'Winner O';
        displayScore(flag);
        changeBgColor(2,4,6);
        setDisabled();
    }
    else{
        let count=0;
        for(let i=0; i< state.length; i++){
            if(state[i]!=0 && state[i]!=1){
                count++;
            }
        }
        if(count==9){
            alert('Its Draw');
        }
    }
}

function setDisabled(){
    for(let i=0; i< state.length; i++){
        if(state[i]==0 || state[i]==1){
            state[i]=null;
        }
    }
}

function restart(){
    location.reload();
}

function reset()
{
    const mainDiv = document.querySelectorAll('.container div');
    for(let i=0; i< mainDiv.length; i++)
    {
        document.getElementById(i).innerText= '';
        document.getElementById(i).style.background = '#ff8080';
    }
    state = [1,0,1,1,0,0,0,1,1];
    winnerDiv.innerText = '';
    flag = true;
    
}

function displayScore()
{
    if(flag){
        user1_score++;
        user1.innerHTML = user1_score;
    }
    else{
        user2_score++;
        user2.innerHTML = user1_score;
    }
}

function changeBgColor(a,b,c)
{
    document.getElementById(a).style.background = 'cyan';
    document.getElementById(b).style.background = 'cyan';
    document.getElementById(c).style.background = 'cyan';
}
