function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)  //creates a real DOM element based on provided type
    // turns the blueprint(reactElement) into an actual element that browser understands 
    // without this you only have a jsobject; the browser sees nothing
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props){
        if (prop==children) continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}

const reactElement ={  //blueprint of a possible react/DOM element only
    type:'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
// above is JS Object representation of React element(DOM element)
// it mimics how react internally represents elements
const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)