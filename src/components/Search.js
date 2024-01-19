import { Component} from "../core/heropy";

export default class Search extends Component {
    render() {
        this.el.classList.add('search');
        this.el.innerHTML = /*html */ `
            <input placeholder="Enter the movie title to seach!"/>
            <button class="btn btn-primary">
                Search!
            </button>
        `
        
        const inputEl = this.el.querySelector('input');
        inputEl.addEventListener('input', () => {
            //
        })
        inputEl.addEventListener('keydown', event => {
            if(event.key === 'Enter') { // enter 눌리면 검색
                //
            }
        })
        const btnEl = this.el.querySelector('.btn');
        btnEl.addEventListener('click', () => {
            //실제 검색시 동작
        })
    }
}