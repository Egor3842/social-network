export const Validation=(value)=>{
    if (value) return undefined
    return ('Введите текст')
}

export const MaxLength=(length)=>(value)=>{
    if (value.length>length) return (`Количество символов больше ${length} `)
    return undefined
}
