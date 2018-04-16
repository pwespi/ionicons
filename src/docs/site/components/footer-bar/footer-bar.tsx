import { Component } from '@stencil/core';


@Component({
  tag: 'footer-bar',
  styleUrl: 'footer-bar.css',
  scoped: true
})
export class FooterBar {

  render() {
    return(
    <footer>
      <div class="container">
        <div class="footer__open-source">
          <a href="http://ionicframework.com/"
            title="IonicFramework.com"
            rel="noopener">
            <img
              src="/assets/img/ionic-os-logo.png"
              alt="Ionic Open Source Logo" />
          </a>
          <p>
            Released under <span id="mit">MIT License</span> | Copyright @ 2018
          </p>
        </div>

        <div class="footer-menu">
          <a href="cheatsheet.html">Cheatsheet</a>
          <a href="#">v1.5.2</a>
          <a href="#">v2.0.1</a>
          <a href="https://ionicframework.com/">Ionic Framework</a>
        </div>
      </div>
    </footer>
  )}

}
