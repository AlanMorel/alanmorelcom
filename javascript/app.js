render("contacts");
render("projects");

function render(template){
  var source = document.getElementById(template + "-template").innerHTML;
  var destination = document.querySelector("." + template);
  destination.innerHTML = Handlebars.compile(source)(data[template]);
}
