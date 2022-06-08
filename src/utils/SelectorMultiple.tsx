import { isTemplateTail } from "typescript"
import Button from "./Button"
import './SelectorMultiple.css'


export default function SelectorMultiple(props: SelectorMultipleProps)
{
    function Seleccionar(item:MultiSelectModel)
    {
        const select= [...props.seletcs,item]
        const noSelect= props.noSeletcs.filter(v => v !== item)
        props.onChange(select,noSelect)
    }

    function Deseleccinar(item: MultiSelectModel)
    {
        const select=   props.seletcs.filter(v => v !== item)
        const noSelect= [...props.noSeletcs,item]
        props.onChange(select,noSelect)
    }   
     
    function SelectAll()
    {
        const all= [...props.seletcs,...props.noSeletcs]
        props.onChange(all,[])
    }

    function UnSelectAll()
    {
        const all= [...props.seletcs,...props.noSeletcs]
        props.onChange([],all)
    }

    return(
        <>
            <div className="selector-multiple">
                <ul>
                    {props.noSeletcs.map(it=> <li key={it.key} onClick={()=>Seleccionar(it)}>{it.value}</li>)}
                </ul>
                <div className="selector-multiplo-botones">
                    <Button type='button' onClick={SelectAll} className='btn btn-success'>{'>>'}</Button>
                    <Button type='button' onClick={UnSelectAll} className='btn btn-danger'>{'<<'}</Button>
                </div>
                <ul>
                    {props.seletcs.map(it=> <li key={it.key} onClick={()=>Deseleccinar(it)}>{it.value}</li>)}
                </ul>
            </div>

        </>
    )
}

interface SelectorMultipleProps
{
    seletcs: MultiSelectModel[]
    noSeletcs: MultiSelectModel[]
    onChange(seletcs: MultiSelectModel[], noSeletcs: MultiSelectModel[]):void
}

export interface MultiSelectModel
{
    key: number
    value: string
}