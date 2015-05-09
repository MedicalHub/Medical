AutoForm.hooks({
	aconfirm_form : {
		formToDoc: function(doc) {
			doc.user_id=Session.get("patient_id");
			doc.doctor_id=Session.get("doc_id");
			doc.clinic_id=Session.get("clinic_id");
			doc.Date = new Date();
			console.log(doc);
		return doc;
		},
		onSubmit: function(insertDoc, updateDoc, currentDoc) {console.log("onSubmit.payment");},
		onSuccess: function(operation, result, template) {
			console.log("onSuccess");
		},
	},
});
