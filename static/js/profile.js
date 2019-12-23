function send(params) {
    emailjs.sendForm("gmail-ainur", "ainur_template", params, "user_AUp03Nbrd2p71EZha3pTp")
        .then((response, error) => {
            if (error) console.log(error);
            else console.log("Success");
        });
}