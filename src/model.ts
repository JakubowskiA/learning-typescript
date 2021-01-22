let displayName: string = 'Display name'
let inventoryType: string = 'furniture'
let trackingNumber: string = 'A12345'
let createDate: Date = new Date()
let originalCost: number = 100

interface InventoryItem {
    displayName: string 
    inventoryType: string 
    readonly trackingNumber: string 
    createDate: Date 
    originalCost?: number  //adding ? makes property optional

    addNote?: (note: string) => string
}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null
}

function saveInventoryItem(item: InventoryItem){
    
}

let inventoryItem = getInventoryItem(trackingNumber)

inventoryItem.createDate = new Date()

saveInventoryItem(inventoryItem)