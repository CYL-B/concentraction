function Heading1 () {

    return(
        <h1></h1>
    )
}

function Heading2 ({content}) {
    
    return(
        <h2 {...content}></h2>
    )
}

 function Heading3 () {
    
    return(
        <h3></h3>
    )
}

function Heading4 () {
    
    return(
        <h4></h4>
    )
}

function Body () {

    return(
        <p></p>
    )
}

function Fineprint (){
    return(
        <p></p>
    )

}

export {Heading1, Heading2, Heading3, Heading4, Fineprint};