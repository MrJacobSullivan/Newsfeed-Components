// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

import articles from '../data/articles.js'

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

const exampleData = {
  title: 'foo',
  date: 'Jan 1st, 2021',
  firstParagraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iure earum quidem optio, perferendis eligendi voluptatibus qui in voluptas quibusdam quos cum quis fugiat ipsum. Quisquam eveniet magni numquam doloribus?`,

  secondParagraph: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur culpa officiis aliquam repellendus quibusdam a earum dolorem ea. Illo voluptatum delectus expedita sequi debitis voluptatibus nulla sit earum, tenetur ipsum?`,

  thirdParagraph: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum atque omnis ipsum excepturi maiores? Qui cumque labore suscipit illum, nulla ex nihil rerum at unde voluptate nemo odit distinctio natus.`,
}

const articleMaker = ({ title, date, firstParagraph, secondParagraph, thirdParagraph }) => {
  const article = document.createElement('div')
  const articleTitle = document.createElement('h2')
  const articleDate = document.createElement('p')
  const firstArticleParagraph = document.createElement('p')
  const secondArticleParagraph = document.createElement('p')
  const thirdArticleParagraph = document.createElement('p')
  const expandButton = document.createElement('span')

  article.classList.add('article')
  articleDate.classList.add('date')
  expandButton.classList.add('expandButton')

  article.append(
    articleTitle,
    articleDate,
    firstArticleParagraph,
    secondArticleParagraph,
    thirdArticleParagraph,
    expandButton
  )

  return article
}

const testArticle = articleMaker(exampleData)
console.log(testArticle)
