# vanilla-spa

- A vanilla js solution to routing for a single-page application.
Watch the [corresponding YouTube video](https://www.youtube.com/watch?v=JmSb1VFoP7w&t=91s).


- I updated the code as the code presented in the video was using deprecated elements, but am still thankful for the video and tutorial.


## Why not use a framework?
- Great question.  If you are into frameworks and want to use one, they might be beneficial for really large applications; however, I also think they are sort of a hoax.  The last time I checked, the three biggest frameworks installed a minimum of 200 packages and most installed over 500.  I personally don't like having to manage that many packages and vette them for security when most of what I need for a basic app is ... about 10-20 lines of JavaScript.
- One other comment regarding large applications.  Working in the industry for multiple commercial applications, everyone says "don't use global variables" but then they waste weeks or more of coding trying to manage Redux to create ... (wait for it) a global store, with fancy words like reducers, selectors, and pure functions. Maybe I just didn't drink the juice, but isn't that really just an object history like in databases?  They even borrowed the word 'selector' when they copied the homework, so I personally would prefer to see how far I can get with VanillaJS and RxJS.

## Try it out
- Clone this repo to your machine and start it up with the live server extension, which will open the page, typically on port 5500.

- NOTE: that since it is running on live server, the index.html isn't 'loaded' the way it would be on a standard webserver, so trying to navigate directly to a page will not work locally. 