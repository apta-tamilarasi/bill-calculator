



function cal(){
	var bill=document.getElementById("bill").value
	var gst=document.getElementById("gst").value

	console.log(bill)
	console.log(gst)

	var amount=document.getElementById("amount")
	var total=document.getElementById("total")
	
	var t=(gst/100)*bill

	console.log(t)

	amount.value=t
	console.log(amount.value)

	total.value=parseInt(t)+parseInt(bill)
	console.log(total.value)

}