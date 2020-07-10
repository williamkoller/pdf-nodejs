const { createInvoice } = require('./createInvoice.js')

const invoice = {
	shipping: {
		name: 'William Koller',
		address: '1234 Main Street',
		city: 'Curitiba',
		state: 'PR',
		country: 'BR',
		postal_code: 83050020,
	},
	items: [
		{
			item: 'TC 100',
			description: 'Toner Cartridge',
			quantity: 2,
			amount: 6000,
		},
		{
			item: 'USB_EXT',
			description: 'USB Cable Extender',
			quantity: 1,
			amount: 2000,
		},
	],
	subtotal: 8000,
	paid: 0,
	invoice_nr: 1234,
}

createInvoice(invoice, 'invoice.pdf')
