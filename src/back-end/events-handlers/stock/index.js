const stockController = require('../../controllers/stock');
const STOCK_OPERATIONS_TYPES = require('./types');

const handleStockEvent = (operation, args) => {
  switch (operation) {
    case STOCK_OPERATIONS_TYPES.UPDATE_IN_BATCH: return stockController.editInBatch(args);

    case STOCK_OPERATIONS_TYPES.INSERT_PRODUCT_STOCK: return stockController.insert(args);

    case STOCK_OPERATIONS_TYPES.READ_STOCK: return stockController.getAll();

    case STOCK_OPERATIONS_TYPES.UPDATE_PRODUCT_STOCK: return stockController.edit(args);

    default: return {};
  }
};

module.exports = handleStockEvent;
