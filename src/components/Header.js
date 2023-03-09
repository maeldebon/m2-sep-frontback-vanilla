class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header style="
                background-color: #333;
                color: #fff;
                padding: 10px;
                width: 100%;
                position: fixed;
                top: 0;
                margin: 0;
                height: 40px;
                font-size: 20px;
            ">
                <p>My App</p>
            </header>
        `;
    }
}

customElements.define("header-component", Header);
