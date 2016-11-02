$(document).ready(function(){
  arrayOfSpies = [];

  // Creating initial array of spies with code names
  var adjectives = ["Raging", "Suave", "Midnight", "Gracful"];
  var nouns = ["Eagle", "Rhino", "Porcupine", "Narwhal"];

  adjectives.forEach(function(adjective){
    nouns.forEach(function(noun){
      var someCodeName = adjective + " " + noun;
      arrayOfSpies.push(new Spy(someCodeName));
    });
  });

  // Spy constructor
  function Spy(codeName) {
      this.codeName = codeName;
      this.inDanger = false;
  }

  console.log(arrayOfSpies);
  drawSpiesTable();

  function drawSpiesTable(){
    for(var i = 0; i < arrayOfSpies.length; i++){
      var spy = arrayOfSpies[i];
      var $tr = $("<tr>");
      $tr.data("id", i);
      if(spy.inDanger){
        $tr.addClass("in-danger");
      } else {
        $tr.addClass("not-in-danger");
      }
      $tr.append("<td>" + spy.codeName + "</td>");
      $tr.append('<td><input type="button" class="changeButton" value="Change"/></td>');
      $tr.append('<td><input type="button" class="deleteButton" value="Delete"/></td>');
      $('#spyTableBody').append($tr);
    };
  }

  $('#spyTableBody').on('click', '.changeButton', function(){
    var spyIndex = $(this).parent().parent().data('id');
    arrayOfSpies[spyIndex].inDanger = !arrayOfSpies[spyIndex].inDanger;
    $('#spyTableBody').empty();
    drawSpiesTable();
  });

  $('#spyTableBody').on('click', '.deleteButton', function(){
    var spyIndex = $(this).parent().parent().data('id');
    arrayOfSpies.splice(spyIndex, 1);
    $('#spyTableBody').empty();
    drawSpiesTable();
  });

  var newSpies = 0;
  $('#newSpyButton').on('click', function(){
    newSpies++;
    arrayOfSpies.push(new Spy(newSpies));
    $('#spyTableBody').empty();
    drawSpiesTable();
  });

});
