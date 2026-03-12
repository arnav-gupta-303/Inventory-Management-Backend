const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Please add a product name']
  },
  productCode: {
    type: String,
    required: [true, 'Please add a product code'],
    unique: true
  },
  category: {
    type: String,
    required: [true, 'Please select a category'],
    enum: ['Electronics', 'Clothing', 'Food', 'Furniture', 'Other']
  },
  supplierName: {
    type: String,
    required: [true, 'Please add a supplier name']
  },
  quantityInStock: {
    type: Number,
    required: [true, 'Please add quantity'],
    min: [0, 'Quantity cannot be negative']
  },
  reorderLevel: {
    type: Number,
    required: [true, 'Please add reorder level'],
    min: [1, 'Reorder level must be at least 1']
  },
  unitPrice: {
    type: Number,
    required: [true, 'Please add unit price'],
    min: [0.01, 'Unit price must be positive']
  },
  manufactureDate: {
    type: Date
  },
  productType: {
    type: String,
    required: [true, 'Please select product type'],
    enum: ['Perishable', 'Non-Perishable']
  },
  status: {
    type: String,
    enum: ['Available', 'Out of Stock', 'Discontinued'],
    default: 'Available'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
