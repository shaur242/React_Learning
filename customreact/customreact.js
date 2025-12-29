const { Children } = require("react")

function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
   const DomElement = document.createElement(reactElement.type)
   DomElement.innerHTML = reactElement.Children
   for (const prop in reactElement.props) { 
    if (prop === Children) continue;
    DomElement.setAtrribute(prop, reactElement.props[prop])
   }
   container.appendChild(DomElement)
}   

const reactElement = {
    type: 'a',
    props: {
        href: 'htpps://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}

const MainContainer = document.querySelector('#root')

customRender(reactElement, MainContainer)

