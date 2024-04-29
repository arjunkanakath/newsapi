
const firsttitle = document.getElementById('titles')
const firstdescription = document.getElementById('description')
const firstimage = document.getElementById('image')
const firstcontent = document.getElementById('content')
const firstauthor = document.getElementById('author')
const firstpublishedAt = document.getElementById('publishedAt')

fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=40e11e4e19054f15905f6c1a593c1054')

.then(response => response.json())
.then(news => {
   const maintitle = news.articles[5]
   firsttitle.innerHTML = maintitle.title

  const maindescription = news.articles[5]
  firstdescription.innerHTML = maindescription.description

   const mainimage = news.articles[5]
   firstimage.src = mainimage.urlToImage

   const maincontent = news.articles[5]
   firstcontent.innerHTML = maincontent.content

   const mainauthor = news.articles[5]
   firstauthor.innerHTML = mainauthor.author

   const mainpublish = news.articles[5]
   firstpublishedAt.innerHTML = mainpublish.publishedAt
})
.catch(error => {
    console.log(error)
})