let displayName: string = 'Display name'
let inventoryType: string = 'furniture'
let trackingNumber: string = 'A12345'
let createDate: Date = new Date()
let originalCost: number = 100

function getInventoryItem(trackingNumber){

}

function saveInventoryItem(item){
    
}

let inventoryItem = getInventoryItem(trackingNumber)

inventoryItem.createDate = new Date()

saveInventoryItem(inventoryItem)