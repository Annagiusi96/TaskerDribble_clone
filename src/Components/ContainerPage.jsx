import { Children } from "react";

export function ContainerPage({children}){
    return (
    <>
    <div className="p-4 bg-white flex flex-col items-center justify-center ">{children}</div>
    </>
    )
}