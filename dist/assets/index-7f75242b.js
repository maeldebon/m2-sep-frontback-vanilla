(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();class c extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
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
        `}}customElements.define("header-component",c);class a extends HTMLElement{constructor(){super(),this.data=[],console.log(this.data),this.setData()}async getData(){fetch("https://jsonplaceholder.typicode.com/posts").then(e=>e.json()).then(e=>(console.log(e),e)).catch(e=>console.log(e))}async setData(){const e=await this.getData();this.data=e}connectedCallback(){this.innerHTML=`
            <div style="
                margin-top: 40px;
                padding: 10px;
            ">
                <h1>Content</h1>
                <div id="content">
                    ${this.data.map(e=>`
                            <div>
                                <p>${e.title}</p>
                                <p>${e.body}</p>
                                <hr>
                                </div>
                        `)}
                </div>


            </div>
        `}}customElements.define("content-component",a);
