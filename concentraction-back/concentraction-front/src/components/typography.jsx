function Heading1 ({children, classHeading}) {

    return(
        <h1 className={`font-anton text-[40px] leading-[44px] md:text-5xl md:leading-[52px] xl:text-6xl xl:leading-[70px] ${classHeading}`}>{children}</h1>
    )
}

function Heading2 ({text, heading2ClassName}) {
    
    return(
        <h2 className={`font-anton text-2xl leading-10 md:text-[40px] md:leading-[44px] xl:text-[48px] xl:leading-[52px] ${heading2ClassName ?? ""}`}>{text}</h2>
    )
}

 function Heading3 ({children, classHeading}) {
    
    return(
        <h3 className={`font-anton text-xl leading-[19px] md:text-2xl md:leading-[40px] xl:text-[40px] xl:leading-[44px] ${classHeading}`}>{children}</h3>
    )
}

function Heading4 ({children, classHeading}) {
    
    return(
        <h4 className={`font-anton text-lg leading-4  md:leading-9 xl:text-2xl xl:leading-10 ${classHeading} `}>{children}</h4>
    )
}

function Body ({children, body2, classHeading}) {

    return(
        <p className={`font-nunito ${body2 ?"text-sm leading-[21px]":"text-base leading-6"} ${classHeading} `}>{children}</p>
    )
}

function Fineprint ({children, classFineprint}){
    return(
        <p className={`font-nunito text-xs leading-[18px] ${classFineprint}`}>{children}</p>
    )

}

export {Heading1, Heading2, Heading3, Heading4, Body, Fineprint};