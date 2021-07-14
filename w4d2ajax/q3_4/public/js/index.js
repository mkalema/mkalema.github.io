$(() => {
    const clearMsg = () => $("#msg").text("");
    let formCleared = false;

    const addedSuccess = (data) => {
        console.log("addSuccess...");
        console.log(data.count);
        $("#countText").text(data.count);
        $("#id").val("");
        $("#name").val("");
        $("#price").val("");
        $("#quantity").val("");

        formCleared = true;
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#addProduct").submit(() => {
        if(formCleared){

        }else {

            const data = {
                id: $("#id").val(),
                name: $('#name').val(),
                price: $('#price').val(),
                quantity: $('#quantity').val(),
            };
            $.post({
                url: "/addToCart",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8"
            }).done(addedSuccess)
                .fail(noSuccess);
            return false;
        }
    });

});