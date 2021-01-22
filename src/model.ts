let displayName: string = 'Display name'
let inventoryType: string = 'furniture'
let trackingNumber: string = 'A12345'
let createDate: Date = new Date()
let originalCost: number = 100

function getInventoryItem(trackingNumber: string): {
    displayName: string 
    inventoryType: string 
    trackingNumber: string 
    createDate: Date 
    originalCost: number
} {
    return null
}

function saveInventoryItem(item){
    
}

let inventoryItem = getInventoryItem(trackingNumber)

inventoryItem.createDate = new Date()

saveInventoryItem(inventoryItem)