function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target" )
}
function deepestChild() {
  var child = document.querySelector('div#grand-node').querySelector("div")
  while (true) {
    if (child.querySelector('div')) {
      child = child.children[0]
    }
    else {
      return child
    }
  }
}

function increaseRankBy(n) {
  let ranked_list = document.querySelectorAll('main#app ul.ranked-list li')
  for (var i = 0; i < ranked_list.length; i++) {
    ranked_list[i].innerHTML = parseInt(ranked_list[i].innerHTML) + n
  }
}
