const score = {
  Win: 0,
  Loses: 0,
  Tie: 0
}

  // browserload
getData();
function getData() {
  const saved = localStorage.getItem('storageGames');
  if(saved) {
    const gamesData = JSON.parse(saved);

    score.Win = gamesData.score.Win;
    score.Loses = gamesData.score.Loses;
    score.Tie = gamesData.score.Tie;

    display(
      gamesData.lastGames.userPick,
      gamesData.lastGames.programRandom,
      gamesData.lastGames.resultGames
    );

  }else {
    document.getElementById('1').innerHTML = score.Win;
    document.getElementById('2').innerHTML = score.Tie;
    document.getElementById('3').innerHTML = score.Loses;
  }
}

  // บันทึกการเล่นเกม
function saveGame(userPick, programRandom, resultGames) {
  const gameData = {
    lastGames: {
      userPick: userPick,
      programRandom: programRandom,
      resultGames: resultGames
    },
    score: score
  }
  localStorage.setItem('storageGames', JSON.stringify(gameData));
}
  // เก็บicon
function getIcon(icon){
  if(icon === 'Rock'){
    return '<i class="fa-solid fa-hammer icon-display" style="color: #FFD43B;"></i>';
  }else if(icon === 'Paper'){
    return '<i class="fa-solid fa-hand fa-rotate-by icon-display" style="color: #FFD43B; --fa-rotate-angle: 45deg;"></i>';
  }else if(icon === 'Scissors'){
    return '<i class="fa-solid fa-scissors fa-rotate-by icon-display" style="color: #FFD43B; --fa-rotate-angle: 315deg;"></i>';
  }
}
  // แสดงผลหน้าจอ
function display(userPick, programRandom, resultGames){
  document.getElementById('userPick').innerHTML = getIcon(userPick);
  document.getElementById('comPick').innerHTML = getIcon(programRandom);
  document.getElementById('result').innerHTML = resultGames;

  document.getElementById('1').innerHTML = score.Win;
  document.getElementById('2').innerHTML = score.Tie;
  document.getElementById('3').innerHTML = score.Loses;
}

  // เล่นเกม(userเริ่มกดเล่น)
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
  saveGame(userPick, programRandom, resultGames);
  display(userPick, programRandom, resultGames);
}

  // โปรแกรมสุ่ม
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
  }
  return resultRandomNumber;
}
  // ล้างค่า
function resetGames(){
  score.Win = 0;
  score.Loses = 0;
  score.Tie = 0;
  localStorage.removeItem('storageGames');
  document.getElementById('userPick').innerHTML = '- - -';
  document.getElementById('comPick').innerHTML = '- - -';
  document.getElementById('result').innerHTML = '- - -';
  document.getElementById('1').innerHTML = score.Win;
  document.getElementById('2').innerHTML = score.Tie;
  document.getElementById('3').innerHTML = score.Loses;
}