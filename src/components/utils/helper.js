export const scrollToSecton=(goTo)=>{
    document.querySelector("#" + goTo).scrollIntoView({behavior:"smooth"})
}