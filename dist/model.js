var displayName = 'Display name';
var inventoryType = 'furniture';
var trackingNumber = 'A12345';
var createDate = new Date();
var originalCost = 100;
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Decor"] = "decor";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);
