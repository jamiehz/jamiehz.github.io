KEEP.initCodeCopy=()=>{HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},document.querySelectorAll("figure.highlight").forEach(e=>{const t=document.createElement("div"),n=(e.wrap(t),t.classList.add("highlight-container"),t.insertAdjacentHTML("beforeend",'<div class="copy-btn"><i class="fas fa-copy"></i></div>'),e.parentNode.querySelector(".copy-btn"));n.addEventListener("click",e=>{const t=e.currentTarget;e=[...t.parentNode.querySelectorAll(".code .line")].map(e=>e.innerText).join("\n");const n=document.createElement("textarea"),o=(n.style.top=window.scrollY+"px",n.style.position="absolute",n.style.opacity="0",n.readOnly=!0,n.value=e,document.body.append(n),document.getSelection());var a=0<o.rangeCount&&o.getRangeAt(0),e=(n.select(),n.setSelectionRange(0,e.length),n.readOnly=!1,document.execCommand("copy"));t.querySelector("i").className=e?"fas fa-check":"fas fa-times",n.blur(),t.blur(),a&&(o.removeAllRanges(),o.addRange(a)),document.body.removeChild(n)}),n.addEventListener("mouseleave",e=>{setTimeout(()=>{e.target.querySelector("i").className="fas fa-copy"},300)})})};