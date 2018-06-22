if (typeof jQuery == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {
  console.log('I did it! I linked jQuery and this js file!')
};


// YEAR 1

$container = $('#container')

$h1 = $('<h1>Hogwarts</h1>')
$container.append($h1)

// YEAR 2

$h2 = $('<h2>Victor Vivicus</h2>')
$container.append($h2)
$h3 = $('<h3>Ravenclaw</h3>')
$container.append($h3)
$h4 = $('<h4>Badger</h4>')
$h4.addClass('owl')
$container.append($h4)
$h4_2 = $('<h4>Elderwood Wand with Phoenix Feather Core</h4>')
$container.append($h4_2)

$ul = $('<ul storage="trunk"> </ul>');
$container.append($ul)

$ul.append('<li>butter beer</li>');
$ul.append('<li class="secret">invisibility cloak</li>');
$ul.append('<li class="secret">magic map</li>');
$ul.append('<li class="secret">time turner</li>');
$ul.append('<li class="owl">leash</li>');
$ul.append("<li>Bertie Bott's every flavor jelly beans</li>");



















