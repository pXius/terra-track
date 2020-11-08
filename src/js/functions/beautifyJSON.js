function beautifyJSONStatus(status) {
  switch (status) {
    case 'order-info-received':
      return 'Order Info Received';
    case 'ready-for-pickup':
      return 'Ready for Pickup';
    case 'on-the-way':
      return 'On the Way';
    case 'delivered':
      return 'Delivered';
    default:
      return status;
  }
}

function beautifyJSONStatusSE(status) {
  switch (status) {
    case 'order-info-received':
      return 'Orderinformation Mottagen';
    case 'ready-for-pickup':
      return 'Redo för Insamling';
    case 'on-the-way':
      return 'På Väg';
    case 'delivered':
      return 'Levereras';
    default:
      return status;
  }
}

module.exports = { beautifyJSONStatus, beautifyJSONStatusSE };
