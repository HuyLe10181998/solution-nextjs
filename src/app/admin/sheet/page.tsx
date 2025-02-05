import { getSheetInfo } from '@/actions/auth.action'
import SheetForm from '@/components/SheetForm'

async function SheetPage(){
    const data = await getSheetInfo()
    return(
        <div className='p-24 flex items-center justify-center'>
            <SheetForm sheetData={data} />
        </div>
    )
}

export default SheetPage