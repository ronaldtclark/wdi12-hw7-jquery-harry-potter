if (typeof jQuery == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {
  console.log('I did it! I linked jQuery and this js file!')
};


// YEAR 1

$container = $('#container');

$h1 = $('<h1>Hogwarts Student Wizard</h1>');
$container.append($h1);

// YEAR 2

$name = $('<h2>Victor Vivicus</h2>');
$container.append($name);
$school = $('<h3>Ravenclaw</h3>');
$container.append($school);
$pet = $('<h4>Owl: "Badger"</h4>');
$pet.addClass('owl');
$container.append($pet);
$wand = $('<h4>Wand: Birch with Unicorn Hair Core</h4>');
$container.append($wand);

$ul = $('<ul id="trunk"></ul>');
$container.append($ul);

$ul.append('<li>butter beer</li>');
$ul.append('<li class="secret">invisibility cloak</li>');
$ul.append('<li class="secret">magic map</li>');
$ul.append('<li class="secret">time turner</li>');
$ul.append('<li class="owl">leash</li>');
$ul.append("<li>Bertie Bott's every flavor jelly beans</li>");

$h5 = $('<h5>------ Fall 2018 ------</h5>');
$container.append($h5);

$table = $('<table>');
  $container.append($table);

$tr1 = $('<tr>');
  $table.append($tr1);
$th1 = $('<th>Day</th>');
$th2 = $('<th>Classes</th>');
  $tr1.append($th1);
  $tr1.append($th2);

$tr2 = $('<tr>');
  $table.append($tr2);
$td1 = $('<td>Monday</td>');
$td2 = $('<td>Herbology , Charms</td>');
  $tr2.append($td1);
  $tr2.append($td2);

$tr3 = $('<tr>');
  $table.append($tr3);
$td3 = $('<td>Tuesday</td>');
$td4 = $('<td>Divination , Quidditch Practice</td>');
  $tr3.append($td3);
  $tr3.append($td4);

$tr4 = $('<tr>');
  $table.append($tr4);
$td5 = $('<td>Wednesday</td>');
$td6 = $('<td>History of Magic</td>');
  $tr4.append($td5);
  $tr4.append($td6);

$tr5 = $('<tr>');
  $table.append($tr5);
$td7 = $('<td>Thursday</td>');
$td8 = $('<td>Transfiguration, Potions</td>');
  $tr5.append($td7);
  $tr5.append($td8);

$tr6 = $('<tr>');
  $table.append($tr6);
$td9 = $('<td>Friday</td>');
$td0 = $('<td>Defense Against the Dark Arts</td>');
  $tr6.append($td9);
  $tr6.append($td0);

$wand.remove();

$('#trunk li').eq(0).remove();

$wand2 = $('<h4>Wand: Elderwood with Phoenix Feather Core</h4>');
  $wand2.insertAfter($pet);
    $wand2.css('color', 'indigo');

$pet.detach().appendTo($ul);
  $pet.detach().insertAfter($school);

$('.secret').hide('slow').delay(2000).show('slow');

$('li.owl').addClass("cabbage");
  $('li.owl').removeClass("cabbage");

$('#trunk').prepend('<li>butter beer</li>');

$ul.removeAttr('id = "trunk"');
  $ul.attr('id', 'chest');














