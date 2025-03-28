function customRender(obj, element){
    /* const domElement: Element = document.createElement(obj.type);
    domElement.innerHTML = obj.children;
    domElement.setAttribute('href', obj.props.href);
    domElement.setAttribute('target', obj.props.target);

    element.appendChild(domElement);
    */

    const domElement = document.createElement(obj.type);
    domElement.innerHTML = obj.children;
    for(const prop in obj.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, obj.props[prop]);
    }
    element.appendChild(domElement);
}


const element = {
    type:  'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google!'

};

const mainContainer = document.querySelector('#root')

customRender(element, mainContainer);