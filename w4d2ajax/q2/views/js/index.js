$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = (data) => {
        console.log(data.answer);
        $("#question").val(data.answer);
        $("#question").focus();
        $("#question").select();
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#questions").submit(() => {
        const data = {
            question: $("#question").val(),
        };
        $.get({
            url: "/8ball",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});