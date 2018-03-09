function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    var rank = document.querySelectorAll('ul.ranked-list')
    var rank1 = rank[0]
    var rank2 = rank[1]
    for(var i=0;i<rank1.length;i++) {
      rank1[i] = 50
    }
    for(var j=0;j<rank2.length;j++) {
      rank2[j] = 50
    }
}

function deepestChild() {
  
  
  //return document.querySelector('#grand-node div div div div')
}