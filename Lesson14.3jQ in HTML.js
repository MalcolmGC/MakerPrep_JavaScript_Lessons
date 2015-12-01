// Lesson 14 Exercise 3 jQuery
// Using the provided HTML document: Lesson14.3jQ in HTML.heml
// Include the jQuery library in the file
// <script src="../jquery-2.1.1.js"></script>
// <script src="Lesson14.3jQ in HTML.js"></script>
$(document).ready(function(){
// Write an expression using jQuery that targets all h1 elements and
// makes their font-color blue
$('h1').css('color', 'blue');
// ... that targets the body element and turns its background red
$('body').css('background-color', 'red');
// ... that targets the element with the id "everything" and increases its font-size
$('#everything').css('font-size', '2em');
//$('#everything').html('<div class="alert">Hold on! <b>an error</b> has occured!</div>');
// ... that targets all elements with the class "holder" and adds a black border
$('.holder').css({ "border": "1px solid black"});
// $(this).css({ "border": "1px solid red", "background": "#FFCECE" });
// ... that targets all li elements within ul elements and bold them
$('ul li').css({ "font-weight": "bold"});
// ... that targets p elements coming immediately ap>A new first paragraph.</p><p>A new second paragraph.fter an h1 element and makes it green
$('h1 + p').css({ "color": "green"});
// ... that targets the element with the id of "secret" and changes its display property to 'none'
$('#secret').css({'display': 'none'});
// ... now change #secret's display property back to block
$('#secret').css({'display': 'block'});
// ... that targets the element with the id of "change-me" and changes its text to a new sentence
$('#change-me').text('I was changed by JS via jQ.');
// ... that appends new text to the end of the sentence in #change-me
//$( "p" ).append( "<strong>Hello</strong>" );
$('#change-me').append(' Plus, I was appended with "Hello".');
// ... that replaces #change-me's contents with two new paragraph tags with content included
// var new_div = $('<div class="important">Got a new div coming in here!</div>');
// new_div.css('color','red').attr('id','primary').text("Hi, I'm new here");
// $('body').append(new_div);
var new_div = $('<div id="change-me"><p>A new first paragraph.</p><p>A new second paragraph.</p></div>');
$('#change-me').replaceWith(new_div);
// ... that appends a new paragraph to #change-me
$('#change-me').append('<p>Then we appended this other paragraph.</p>');
// ... that targets the all li elements and changes their text to a new sentence
$('li').text('This is an li element with text changed by jQ!');
// ... that targets the all li elements and appends new text to all of them
$('li').append(' Plus, I was appended by jQ!');
// ... that targets the element with the id of "everything" and appends an ordered list with three list elements inside
var orderedList = $('<ol>' +
      '<li>Ordered List Item 1</li>' +
      '<li>Ordered List Item 2</li>' +
      '<li>Ordered List Item 3</li>' +
    '</ol>');
$('#everything').append(orderedList);
}); // .ready().
