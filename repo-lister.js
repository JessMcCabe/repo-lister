function updateResult(result) {
    $("#result-msg").text(result);
}

function clearTable(){
                        $("#repo-table tbody").empty();
                    }
function populateTable(repoList) {
    for (var i = 0; i < repoList.length; i++) {
        $("#repo-table tbody").append("<tr><td>" + repoList[i].name + "</td>" + "<td><a href='" + repoList[i].html_url + "'>"+ repoList[i].html_url +"</a></td></tr>");

    }
}

$("#fetch-btn").click(function() {
    clearTable();
    var githubId = $("#github-id").val();
    console.log(githubId);

    $.ajax({
        dataType: "json",
        url: "https://api.github.com/users/" + githubId + "/repos?sort=updated",

        success: function(data) {
            updateResult(data.length + " repos");
            populateTable(data);
        },

        error: function(err) {
            updateResult("Invalid id?");
        }
    });
});