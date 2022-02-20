console.log("emma");

function printChildrenRecursive(t){
    if (t.children.length === 0){return}
    t.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child)
    })
}

const tree={
    name:'Emma',
    children:[
        {name:'Andrew',
        children:[]
},
{name: 'Bill',
children: [
    {name: 'Earl', children: [{name: 'Samuel', children: []}]},
    {name: 'Poop', children: []}]}
]}

printChildrenRecursive(tree);