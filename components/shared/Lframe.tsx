export default function Lframe({children}:{children:React.ReactNode}){
    return (

        <div className='relative w-  h-[284px] '>
            <div className='absolute  right-2 top-8 w-[317px]  h-[284x]'>
               {children}
            </div>
            <div className='absolute left w-[315px]  z-2 h-[284px] border-l-4  border-dotted  border-b-4 border-primary top-10  -dashed  border-dashed t'>
                <div className='absolute left-4 border-l-4 border-dotted  border-b-4 border-primary -bottom-4 w-[317px]  h-[284px]'>
                </div>
            </div>
        </div>
    )
}

