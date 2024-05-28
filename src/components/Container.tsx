import { ReactNode } from "react"

type Props = {
    children : ReactNode
}

export function Container({ children }: Props){
    return(
    <div className="w-full max-w-[1200px] px-4 mx-auto">
        {children}     
    </div>
   
    )
}