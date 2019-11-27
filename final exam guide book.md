## final exam guide
final exam will include producing two new pages. The new pages should: 

utilize a for loop to generate a series of div elements:
1. each new div, produced by the loop, should use setAttribute(class, '[bootstrap class name]') to generate a card or other bootstrap type div. col-md-4 is acceptable. In the case that you create bootstrap divs inside of a grid (4 unit columns, 3 unit columns, etc), then use createElement(div) in order to produce container and row - type divs. 
utilize an array of data in order to populate each div with an image, and some text. 
2. The text elements can arrive in another array, of the same length as the array of image names. You can access this array of text values, for each card, inside the same for-loop that access the image names. Short example below. 
3. each image inside of the cards should contain a hyperlink, with several url params (send the text value as well as the image url inside the url parameter). 
4. The link should proceed to a detail page, as we practiced in project 3. 
5. in order to set up the project, I recommend creating two arrays. The first array should contain the names of the images you wish to display. 
6. The second array should contain sentences or sets of words, like this: var sentences = ['this is a sentence', 'second sentence', '3rd sentence']; and so on, until you have once phrase for each image in your array of images names. 
Hence, once you iterate the array of image names in the first loop, you will access the corresponding sentence in the sentence array: 
```javascript
var imageNames = ['imgLocationA.png', 'http://imageOnTheInternet.com/imgB.png', ...];
for(var i = 0; i < imageNames.length; i++){

//create images, div cards or col-md-x divs
var div = createElement(div);//...
var textNode = createElement(p);
var imgMain = createElement(img);
imgMain.setAttribute(url, imageNames[i]);
//make a text node or paragraph, which we will assign innerHtml or a string value, below ->
//then, 

for(var j = 0; i < sentences.length; i++){

var msg = sentences[j];

textNode.innerHTML = msg;

} //end j loop, assigning sentence content to paragraph
div.setAttribute(class, 'your-favorite-div-class-from-bootstrap');
div.appendChild(textNode);

}//end i loop, assigning image url to image
```
This project is to be completed by: 
1. record a video demonstration of your work. Please use a tool like loom, which is a chrome browser extension. 
2. send Stefan a link to your video via CPP email
3. submit this email by midnight of the day of the final exam
