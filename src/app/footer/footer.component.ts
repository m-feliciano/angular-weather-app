import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="text-center text-lg-start footer" >
    <div class="text-center p-3" >
      <a class="text-dark" href="https://github.com/m-feliciano" target="_blank" >
        <img class="icons" src="../../assets/github.svg">
      </a>
      <a class="text-dark" href="https://www.linkedin.com/in/marcelo-feliciano-16387a1a0/" target="_blank" >
        <img class="icons" src="../../assets/icon_linkedin.png">
      </a>
    </div>
  </footer>
`,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent { }
