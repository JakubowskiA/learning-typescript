var displayName = 'Display name';
var inventoryType = 'furniture';
var trackingNumber = 'A12345';
var createDate = new Date();
var originalCost = 100;
function getInventoryItem(trackingNumber) {
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);
