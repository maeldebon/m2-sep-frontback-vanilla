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
                box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
            ">
                <p>My App</p>
            </header>
        `;
    }
}

customElements.define("header-component", Header);
