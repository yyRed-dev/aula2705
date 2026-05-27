function processiFoodOrder(order) {

  verificarRestaurante(order);
  validarCliente(order);
  tamanhoPedido(order);
  validarEnderecoEntrega(order);

  const subtotal = calcularSubtotal(order);
  const discount = calcularDesconto(order);
  const deliveryFee = calcularEntrega(order);
  const serviceFee = calcularTaxaServiço(order);

  const total = subtotal - discount + deliveryFee + serviceFee;

  for (let item of order.items) {
    console.log(`Reduzindo estoque do item ${item.id} em ${item.quantity} unidades`);
  }

  const orderRecord = {
    id: `IFOOD-${Date.now()}`,
    restaurantId: order.restaurantId,
    customerId: order.customerId,
    items: order.items,
    subtotal,
    discount,
    deliveryFee,
    serviceFee,
    total,
    status: 'confirmed',
    createdAt: new Date()
  };

  console.log('Pedido registrado no banco de dados:', orderRecord.id);

  console.log(`Notificação enviada ao restaurante ${order.restaurantId}`);
  console.log('Restaurante recebeu novo pedido');

  console.log(`Email de confirmação enviado para ${order.customerEmail}`);
  console.log(`SMS enviado para ${order.customerPhone}`);

  console.log(`Pedido adicionado à fila de entrega`);
  console.log(`Entregador será atribuído em breve`);

  console.log(`Histórico de compras do cliente ${order.customerId} atualizado`);

  console.log(`Dados do pedido enviados para sistema de recomendações`);

  console.log(`Pedido ${orderRecord.id} processado com sucesso`);
  console.log(`Total: R$ ${total.toFixed(2)}`);

  return orderRecord;
}

function verificarRestaurante(order){
  if (!order.restaurantId) {
    console.log('Erro: Restaurante não identificado');
    return null;
  }
}
function validarCliente(order) {
  if (!order.customerId) {
    console.log('Erro: Cliente não identificado');
    return null;
  }
}
function tamanhoPedido(order) {
  if (!order.items || order.items.length === 0) {
    console.log('Erro: Pedido sem itens');
    return null;
  }
}
function validarEnderecoEntrega(order) {
  if (!order.deliveryAddress) {
    console.log('Erro: Endereço de entrega não fornecido');
    return null;
  }
}
function calcularSubtotal(order) {
  let subtotal = 0;
  for (let item of order.items) {
    subtotal += item.price * item.quantity;
  }
  return subtotal;
}
function calcularDesconto(order) {
  let discount = 0;
  const subtotal = calcularSubtotal(order);

  if (order.couponCode === 'IFOOD10') {
    discount = subtotal * 0.10;
    console.log('Cupom IFOOD10 aplicado: 10% de desconto');
  } 
  else if (order.couponCode === 'PRIMEIRACOMPRA') {
    discount = subtotal * 0.15;
    console.log('Cupom PRIMEIRACOMPRA aplicado: 15% de desconto');
  }

  return discount;
}
function calcularEntrega(order) {
  let deliveryFee = 0;
  const subtotal = calcularSubtotal(order);
  const distance = order.deliveryAddress.distance || 5;

  if (distance <= 2) {
    deliveryFee = 5;
  } else if (distance <= 5) {
    deliveryFee = 8;
  } else if (distance <= 10) {
    deliveryFee = 12;
  } else {
    deliveryFee = 15;
  }

  if (subtotal > 50) {
    deliveryFee = 0;
    console.log('Entrega grátis para pedidos acima de R$ 50');
  }

  return deliveryFee;
}
function calcularTaxaServiço(order) {
  const subtotal = calcularSubtotal(order);
  return subtotal * 0.05;
}

const iFoodOrder = {
  restaurantId: 'rest-123',
  customerId: 'cust-456',
  customerEmail: 'cliente@example.com',
  customerPhone: '11999999999',
  couponCode: 'IFOOD10',
  items: [
    { id: 'item-1', name: 'Hambúrguer', price: 25, quantity: 2 },
    { id: 'item-2', name: 'Refrigerante', price: 8, quantity: 2 },
    { id: 'item-3', name: 'Batata Frita', price: 12, quantity: 1 }
  ],
  deliveryAddress: {
    street: 'Rua das Flores',
    number: '123',
    city: 'São Paulo',
    distance: 4
  }
};

console.log('=== PROCESSANDO PEDIDO DO IFOOD ===\n');
const result = processiFoodOrder(iFoodOrder);
console.log('\n=== RESULTADO ===');
console.log(result);