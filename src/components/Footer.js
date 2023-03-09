class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer
            style="
                position: fixed;
                bottom: 0;
                width: 100%;
                height: 60px;
                background-color: #f5f5f5;
                box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
            "
        >
            <p>footer</p>
        </footer>
        `;
    }
}

customElements.define("footer-component", Footer);
