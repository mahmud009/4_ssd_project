$(function() {
  $("input").on("focus", function() {
    console.log($(this));

    if (!($(this).context.type == "submit")) {
      $(this)
        .parent()
        .find("label")
        .addClass("focused");
    }
  });

  $("input").on("blur", function() {
    $("label").removeClass("focused");
  });
});
