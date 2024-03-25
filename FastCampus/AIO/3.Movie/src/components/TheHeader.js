import { Component } from "../core/core";

export default class TheHeader extends Component{
  constructor(){
    super({
      tagName:'header'
    })
  }

  render(){
    this.ele.innerHTML = /* HTML */`
      <a href="#">Main</a>
      <a href="#/about">About</a>
    `
  }
}