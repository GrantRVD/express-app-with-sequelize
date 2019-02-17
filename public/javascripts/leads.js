function deleteLead(leadId) {
    $.ajax({
        url: '/lead/' + leadId + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        success: ((res) => {
            // Replaces the follow button with an unfollow
            console.log("Result: ", res)
            $("#"+leadId).remove();
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    })
}