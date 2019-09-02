# ReactToDoApp
A React App showcasing login, logout,session/token management,styling done using Bootstrap.Covers various functionalities of ReactJS. 

REACT.JS (Frontend JavaScript Library(not framework)  )
Go Fullstack with React and Springboot -- Udemy
•	npx create-react-app  <Project_name>… 
•	‘npx’  vs ‘npm’, npm will simply install the packages from the repository,  while ‘npx’ executes a generator like create-react-app .It means this command will first install the ‘create-react-app’ “temporarily” and then execute it.So the ‘create-react-app’ is not installed finally but when it runs it generates a boiler plate React project for us which we can use.
•	‘npm run build’ merges various JS files and makes it deployment ready as we do not want to directly put the project in production with thousands of files.
•	React can be used to develop both Web Application and Native applications, for Web REactDOM is there and for Native apps React Native is there.
•	Basically, the html tag <div id=’root’></div> in index.html is replaced by React APP component as in index.js we capture the element with id=’root’ and ask ReactDOM.render() to replace with App component created.
•	We want to develop Web application in a ‘modular’ way that is what React ‘Components’ help us to do.
•	‘Root Component’  ‘App Component’.
•	The Component App with file App.js ‘return’s an HTML to the index.html this can also be called a JSX file it also has a App.css for styling.
•	Created a ‘Class Component’ and add it to the root Component which is the App component i.e call it in App.
•	You can also create ‘function components’ which has smaller code size, but we can not use ‘state’  feature which is available in Class component.
•	Create react app has Babel which converts our JSX code to JS code.[Can play with it Babel.com]
•	Component always starts with a Upper Case letter.
•	Will be creating a Counter app, to cover 
o	Understood how JSX files have HTML and JS code in it.
o	Putting logic in JSX i.e creating variables storing data.
o	Creating various JS functions
o	Interaction between various Components.
o	Calling REST apis(SpringBoot) interacting with them[Will come later on]
•	Here in JSX we use ‘className’ attribute instead of ‘class’ in HTML tags for putting in styles.
•	One Component in React contains the JSX file(HTML&CSS), CSS file and testing file.
•	In JSX you have ‘onClick’.
•	For complex components we should prefer Class Components where we can define functions and call them internally using ’this’ .
•	Define the initial state(where variables will reside) in a constructor of the class.Then use the ‘this’ to interact with it.
•	this.state = {  counter : 0 }   --  inside a constructor , now use the variable this.state.counter
•	Behind the scenes React :
o	If we make any changes in a variable then how does Javascript know when to update the DOM(HTML),each element of HTML is like a Node on the DOM tree…
o	Updating DOM is very slow process(AngularJS1 failed here!)
o	As we see in the VirtualDOM1 diagram(in the folder), React creates a Virtual DOM and instead of updating DOM all the time it first grabs the changes in the Virtual and then at the end update the real DOM.
o	As you can view VirtualDOM2 diagram, if initially there was a variable counter=5 React keeps this state in Virtual Dom,now we call this.setState({counter : this.state.counter++}) we increment the counter and let React’s state know it.Now React will maintain this state as well, it will compare the old state with the new state and then the diff is what it will accordingly update the actual DOM !!!
o	In state we can have various variables which React will maintain.Now setState is something like a merge i.e we can increment to counters present in state and one setSate can capture the increment done in both,setState accepts a JSON object( { counter : this.state.counter++,  counter2 : this.state.counter2++} ).
o	Lambda expression in JAVA and  Arrow function in ES6 look same but are entirely used for different purposes.ES6 Arrow function basically implements the same function in an easier way and one can use outside variables i.e inside a class an Arrow function can use Class variable using ‘this’.  In JAVA Lambda expressions are used to simplify code for creating instances of single function Interfaces(An interface containing one function to override) easily.
o	Let vs var =>  var is accessible across Javascript context but ‘let’  is block scoped.
o	By using “properties of React”  like ‘by={1}’[value of by is 1] and using this.props.by in JSX we can modify specific component.Eg: counter + this.props.by
o	To play with data inside a component we use ‘state’ and for passing data across components we can use properties of the component .
o	Infinite loop trap in React, if we call a function within a JSX like 
<button onClick=”{this.toggle()}”/>  so what happens is that it is an infinite loop. How?
	This ‘<button>’ is obviously written within the ’render’ React function so first time render happens then it calls ‘toggle ()’ then again change happens and again it renders and again ‘toggle ()’ is called , so infinite loop.
	Avoid this by using <button onClick=” {this.toggle}”>.
o	React is not a framework so to capture/bind a variable to React’s context is tough. Thus we use ‘this.state’(in constructor) to capture the state of the component and then use it accordingly again we need to implement ‘onchange()’ method so that to capture any change that happens.
	Eg: Username field will keep on changing as we type, that React has to capture and put in a variable, the way we will do is have a variable in this.state and capture changes by using function ‘onchange()’.
	Now the ’Username’ field is a Controlled field i.e it is totally dictated by the state in component.In turn the component will also be called Controlled Component as Password will also be controlled.
	Source of truth is no more the form Html tags but is the React component.
o	Functional Components can be used for ‘conditional checks’ it can also return HTML like Class Components 
 

•	A clever way to resolve checks without using much code(Functional components) is 
{this.state.login && <div>Logging In</div>}
{!this.state.login && <div>Invalid Credentials</div>}
•	login will be either true or false and accordingly the correct HTML will be returned.
•	React Router helps in routing from one component/page to another. We have to install react-router-dom as react does not come with it !
•	To route from one page to another use the history api present in react-router-dom
this.props.history.push('/welcome')
•	We should keep in my mind that erroneous routes should be handled! By creating an Error Component and route whenever invalid routes are entered.
<Switch>
<Route path="/welcome" exact component={WelcomeComponent}/>
<Route component={ErrorComponent}/
</Switch> 
•	And we have to use Switch with it so that it takes care that exactly when a specific Route is called only that Component should be called.
•	To pass parameters in the Route we can use codes like 
this.props.history.push(`/welcome/${this.state.username}`) –for routing
<Route path="/welcome/:name" exact component={WelcomeComponent}/>--the route mentioned
<div>Welcome {this.props.match.params.name}</div>-- to catch the parameter passed with the route

•	In AngularJS being a framework had the priviledge to use various commands like ng-bind,ng-repeat,ng-if   but in React we don’t find these things as it’s just a library. We have to use conditional checks like shown above using && and then similarly for repeating DOM values we have to use Map. 

todos = [{id: 1 , description: 'Learn React'},
{id: 2 , description: 'Learn React Native'},
{id: 3 , description: 'Learn SpringBoot'}]

todos.map( todo => todo.description)
Result is ['Learn React', 'Learn React Native', 'Learn SpringBoot']
•	So above is the result given by the map on which we will loop in DOM .
•	In adding links if we use <a> HTML tags entire page gets refreshed we don’t want that so we use React <Link/> tag  . Here “/todos”  is just a route.
<Link to="/todos">here</Link>
•	If we have to put some HTML which has to be common across the pages then we may put it inside the <Router> tag of React just above other components.Eg:Header and Footer will remain same across the pages.
<Router>
   <HeaderComponent/>
      <Switch>
         <Route path="/" exact component={LoginComponent}/>
         <Route path="/login" exact component={LoginComponent}/>
<Route path="/welcome/:name" exact component={WelcomeComponent}/>
         <Route path="/todos" exact component={TodosComponent}/>
         <Route component={ErrorComponent}/>
      </Switch>  
   <FooterComponent/>
 </Router>
•	Now focusing more on coding.
•	Implemented sessionStorage in the codebase. A simple process. A session storage helps in identifying whether user is logged in or not .It can be viewed in browser Developer tools tab Application->SessionStorage.
•	Remove the session created on logout.
•	Session vs Localstorage is that session automatically expires if you close browser window but localstorage does not and remains in browser till you don’t explicitly delete it.

