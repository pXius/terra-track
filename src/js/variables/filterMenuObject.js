const listFilter = [
  {
    key: 'all',
    text: 'Parcel Status: All',
    value: 'all',
    content: 'All'
  },
  {
    key: 'delivered',
    text: 'Parcel Status: Delivered',
    value: 'delivered',
    content: 'Delivered'
  },
  {
    key: 'on-the-way',
    text: 'Parcel Status: On the Way',
    value: 'on-the-way',
    content: 'On the Way'
  },
  {
    key: 'order-info-received',
    text: 'Parcel Status: Info Received',
    value: 'order-info-received',
    content: 'Info Received'
  },
  {
    key: 'ready-for-pickup',
    text: 'Ready for Pickup',
    value: 'ready-for-pickup',
    content: 'Ready for Pickup'
  }
];

module.exports = { listFilter };
