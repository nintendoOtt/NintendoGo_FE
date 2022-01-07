const config = {
	next_redirect_pc_url: "",
	tid: "",
	params: {
	  cid: "TC0ONETIME",
	  partner_order_id: "partner_order_id",
	  partner_user_id: "partner_user_id",
	  item_name: "닌텐도ott",
	  quantity: 1,
	  total_amount: 22000,
	  vat_amount: 0,
	  tax_free_amount: 0,
	  approval_url: "http://localhost:3000/guest/success",
	  fail_url: "http://localhost:3000/guest/failure",
	  cancel_url: "http://localhost:3000/guest/cancel",
	},
};

export default config;