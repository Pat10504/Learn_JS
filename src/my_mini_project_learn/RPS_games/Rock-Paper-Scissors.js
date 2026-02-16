const score = {
  Win: 0,
  Tie: 0,
  Loses: 0,
}
function getIcon(icon){
  if(icon === 'Rock'){
    return '<i class="fa-solid fa-hammer icon-display" style="color: #FFD43B;"></i>';
  }else if(icon === 'Paper'){
    return '<i class="fa-solid fa-hand fa-rotate-by icon-display" style="color: #FFD43B; --fa-rotate-angle: 45deg;"></i>';
  }else if(icon === 'Scissors'){
    return '<i class="fa-solid fa-scissors fa-rotate-by icon-display" style="color: #FFD43B; --fa-rotate-angle: 315deg;"></i>';
  }
}

function display(userPick, programRandom, resultGames){
  document.getElementById('userPick').innerHTML = getIcon(userPick);
  document.getElementById('comPick').innerHTML = getIcon(programRandom);
  document.getElementById('result').innerHTML = resultGames;

  document.getElementById('1').innerHTML = score.Win;
  document.getElementById('2').innerHTML = score.Tie;
  document.getElementById('3').innerHTML = score.Loses;
}

function playGames(userPick){
  const programRandom = random();
  let resultGames = '';
  if(userPick === 'Rock'){
    if(programRandom === 'Rock'){
      resultGames = 'Tie';
    }else if(programRandom === 'Paper'){
      resultGames = 'Loses'
    }else if(programRandom === 'Scissors'){
      resultGames = 'Win'
    }
  }else if(userPick === 'Paper'){
    if(programRandom === 'Rock'){
      resultGames = 'Win';
    }else if(programRandom === 'Paper'){
      resultGames = 'Tie'
    }else if(programRandom === 'Scissors'){
      resultGames = 'Loses'
    }
  }else if(userPick === 'Scissors'){
    if(programRandom === 'Rock'){
      resultGames = 'Loses';
    }else if(programRandom === 'Paper'){
      resultGames = 'Win'
    }else if(programRandom === 'Scissors'){
      resultGames = 'Tie'
    }
  }

  if(resultGames === 'Win'){
    score.Win += 1;
  }else if(resultGames === 'Loses'){
    score.Loses += 1;
  }else if(resultGames === 'Tie'){
    score.Tie += 1;
  }
  display(userPick, programRandom, resultGames);
}

function random(){
  const randomNumBer = Math.floor(Math.random()*3);
  let resultRandomNumber = '';
  console.log(randomNumBer);

  if(randomNumBer === 0){
    resultRandomNumber = 'Rock';
  }else if(randomNumBer === 1){
    resultRandomNumber = 'Paper';
  }else if(randomNumBer === 2){
    resultRandomNumber = 'Scissors';
  }return resultRandomNumber;
}

function resetGames(){
  score.Win = 0;
  score.Loses = 0;
  score.Tie = 0;
  document.getElementById('userPick').innerHTML = '- - -';
  document.getElementById('comPick').innerHTML = '- - -';
  document.getElementById('result').innerHTML = '- - -';
  document.getElementById('1').innerHTML = score.Win;
  document.getElementById('2').innerHTML = score.Tie;
  document.getElementById('3').innerHTML = score.Loses;
}