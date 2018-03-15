$(document).ready(function () {
  var losses = 0;
  var CrystalSum = 0;
  var wins = 0;
  $("#wins").html(wins);
  $("#losses").html(losses);
  $("#playerNumbo").html(CrystalSum);

  function randomNumberGenerator(range) {
    return Math.round((Math.random() * range) + 1);
  }

  function rando() {
    var num = randomNumberGenerator(100);
    while (num <= 9) {
      num = randomNumberGenerator(100);
    }
    return num;
  }

  function resetGame() {
    CrystalSum = 0;
    $("#playerNumbo").html(CrystalSum);
    unusualGemValue = randomNumberGenerator(10);
    kyberValue = randomNumberGenerator(10);
    dark_crystalValue = randomNumberGenerator(10);
    homerValue = randomNumberGenerator(10);
    randoSeed = rando();
    return $("#rando").html(randoSeed);
  }
  var randoSeed = rando();
  $("#rando").html(randoSeed);

  function GameCompleteCheck() {
    if (CrystalSum === randoSeed) {
      wins++;
      $("#wins").html(wins)
      alert("Boom Goes The Crystal!");
      return resetGame();
    } else if (CrystalSum > randoSeed) {
      losses++;
      $("#losses").html(losses)
      alert("ADVANCED DARKNESS!");
      return resetGame();
    }
  }

  var unusualGemValue = randomNumberGenerator(10);
  $("#unusualGem").on("click", function () {
    CrystalSum += unusualGemValue;
    $("#playerNumbo").html(CrystalSum);
    GameCompleteCheck();
    return CrystalSum;
  });

  var kyberValue = randomNumberGenerator(10);
  $("#kyber").on("click", function () {
    CrystalSum += kyberValue;
    $("#playerNumbo").html(CrystalSum);
    GameCompleteCheck();
    return CrystalSum;
  });

  var dark_crystalValue = randomNumberGenerator(10);
  $("#dark_crystal").on("click", function () {
    CrystalSum += dark_crystalValue;
    $("#playerNumbo").html(CrystalSum);
    GameCompleteCheck();
    return CrystalSum;
  });

  var homerValue = randomNumberGenerator(10);
  $("#homer").on("click", function () {
    CrystalSum += homerValue;
    $("#playerNumbo").html(CrystalSum);
    GameCompleteCheck();
    return CrystalSum;
  });
});