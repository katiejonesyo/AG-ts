interface SomethingWithAnId {
    id: string | number,
    [key: string]: any
}

export function findById(arr : Array<SomethingWithAnId>, id : string | number) : SomethingWithAnId {
    return arr.find(item => item.id === id);
}