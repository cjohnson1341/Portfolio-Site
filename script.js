// Custom Header Class
class MyHeader extends HTMLElement{
	connectedCallback () {
		this.innerHTML = `
		<header>
		<a href="https://cjohnson1341.github.io/Portfolio-Site/" class="logo_link">
		  <div class="logo">
			<h4>Christine Daniels</h4>
		  </div>
		</a>
		<nav>
		<ul class="navigation">
		  <li><a href="https://www.artstation.com/cjohnson1341" target="_blank">Tech Art</a></li>
		  <li><a href="about.html">About</a></li>
		   <li><a href="Resume.pdf" target="_blank">Resume</a></li>
		</ul>
	  </nav>
	  </header>
		`
	}
}

// Custom Footer Class
class MyFooter extends HTMLElement{
	connectedCallback () {
		this.innerHTML = `
		<footer>

  		<div class="left_footer_column">
	  		<div class="social_icons">
			<a href="https://www.artstation.com/cjohnson1341" target="_blank"><svg aria-labelledby="simpleicons-codepen-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="logos"><title>ArtStation</title><path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"/></svg></a>
          <a href="https://codepen.io/cjohnson1341" target="_blank"><svg aria-labelledby="simpleicons-codepen-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="logos"><title id="simpleicons-codepen-icon">Dribbble icon</title><path d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12 0 18.627 5.373 24 12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12Z"/></svg></a>
	  			<a href="https://dribbble.com/cjohnson1341" target="_blank"><svg aria-labelledby="simpleicons-dribbble-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="logos"><title id="simpleicons-dribbble-icon">Dribbble icon</title><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg></a>
          <a href="https://github.com/cjohnson1341" target="_blank"><svg aria-labelledby="simpleicons-github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="logos"><title id="simpleicons-github-icon">GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
	  		</div>
	  		<a href="mailto:cfjohnson1341@gmail.com" class="email">cfjohnson1341@gmail.com</a>
  		</div>

  		<div class="right_footer_column">
  			<div class="favorites">
	  			<div class="list_one">
	  				<ul>
	  					<li class="title">Current Favorites:</li>
	  					<li>• #F73859</li>
	  					<li>• Two Point Museum</li>
	  					<li>• Wind and Truth</li>
	  				</ul>
	  			</div>

	  			<div class="list_two">
	  				<ul>
	  					<li class="title">All Time Favorites:</li>
	  					<li>• Rainy Days</li>
	  					<li>• Anime Lofi</li>
	  					<li>• Tea with milk</li>
	  				</ul>
	  			</div>
	  		</div>
  		</div>
  		
  		
  	</footer>
		`
	}
}

customElements.define('my-header', MyHeader) 
customElements.define('my-footer', MyFooter) 



window.onload = function() {

	// Get the image that opens the modal
	var portfolios = document.getElementsByClassName("rotate");

	for(var i=0; i < portfolios.length; i++) {
		(function () {
			var portfolio = portfolios[i]
			var modal = portfolio.parentElement.getElementsByClassName('modal')[0]

			// Get the modal to display
			portfolio.onclick = function(event) {
			    modal.style.display = "block"; 
			    event.stopPropagation();
			}
			// Get the <span> element that closes the modal
			var span = modal.getElementsByClassName("close")[0];
			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			modal.onclick = function() {
				modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			modal.firstElementChild.onclick = function(event) {
				event.stopPropagation();
			}

		})();

	
	}


}



