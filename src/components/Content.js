class Content extends HTMLElement {
    constructor() {
        super();
        this.data = [];
    }

    async setData() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        this.data = data;
    }

    async connectedCallback() {
        await this.setData();

        this.innerHTML = `
            <div style="
                margin-top: 40px;
                padding: 10px;
            ">
                <h1>Content</h1>
                <div id="content">
                    ${this.data
                        .map((item) => {
                            return `
                                <div>
                                    <b>${item.title}</b>
                                    <p>${item.body}</p>
                                    <hr>
                                </div>
                            `;
                        })
                        .join("")}
                </div>
            </div>
        `;
    }
}

customElements.define("content-component", Content);
