function Heading1 ({children}) {

    return(
        <h1 className="font-anton text-[40px] leading-[44px] md:text-5xl md:leading-[52px] xl:text-6xl xl:leading-[70px]">{children}</h1>
    )
}

function Heading2 ({children}) {
    
    return(
        <h2 className="font-anton text-2xl leading-10 md:text-[40px] md:leading-[44px] xl:text-[48px] xl:leading-[52px]">{children}</h2>
    )
}

 function Heading3 ({children}) {
    
    return(
        <h3 className="font-anton text-xl leading-[19px] md:text-2xl md:leading-[40px] xl:text-[40px] xl:leading-[44px]">{children}</h3>
    )
}

function Heading4 ({children}) {
    
    return(
        <h4 className="font-anton text-lg leading-4  md:leading-9 xl:text-2xl xl:leading-10">{children}</h4>
    )
}

function Body ({children, body2}) {

    return(
        <p className={`font-helvetica ${body2 ?"text-sm leading-[21px]":"text-base leading-6"} `}>{children}</p>
    )
}

function Fineprint ({children}){
    return(
        <p className="font-helvetica text-xs leading-[18px]">{children}</p>
    )

}

export {Heading1, Heading2, Heading3, Heading4, Body, Fineprint};