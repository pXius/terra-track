const listFilter = [
  {
    key: 'all',
    text: 'Parcel Status: All',
    value: 'all',
    content: 'All'
  },
  {
    key: 'order-info-received',
    text: 'Parcel Status: Order Info Received',
    value: 'order-info-received',
    content: 'Order Info Received'
  },
  {
    key: 'ready-for-pickup',
    text: 'Ready for Pickup',
    value: 'ready-for-pickup',
    content: 'Ready for Pickup'
  },
  {
    key: 'on-the-way',
    text: 'Parcel Status: On the Way',
    value: 'on-the-way',
    content: 'On the Way'
  },
  {
    key: 'delivered',
    text: 'Parcel Status: Delivered',
    value: 'delivered',
    content: 'Delivered'
  }
];

module.exports = { listFilter };
