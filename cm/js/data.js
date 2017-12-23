function setBg() {
  for (var i = 0; i < 9; i++) {
    $('#page' + i).css('background', 'url(./images/bg/' + i + '.png) no-repeat');
    $('#page' + i).css('background-size', '100%');
  }
}

function getParam(paramName) {
  paramValue = "";
  isFound = false;
  if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
    arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&");
    i = 0;
    while (i < arrSource.length && !isFound) {
      if (arrSource[i].indexOf("=") > 0) {
        if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
          paramValue = arrSource[i].split("=")[1];
          isFound = true;
        }
      }
      i++;
    }
  }
  return paramValue;
}

function fillData(data) {
  for (var i = 0; i < data.length; i++) {
    if (i + 1 == 7){
      let badgets = data[i];
      $('#badget-main').attr('src', './images/badget/' + data[i][0] + '.png');
      for (var a = 1; a < data[i].length; a++) {
        //console.log(data[i][a] + '.png');
        $('#badget-others' + a).attr('src', './images/badget/' + data[i][a] + '.png');
      }
    }
    else{
      for (var a = 0; a < data[i].length; a++) {
          ii = i + 1
          aa = a + 1
          $('#p' + ii + "-" + aa).html(data[i][a]);
          //console.log('#p' + ii + "-" + aa);
      }
    }

  }
}

function getData() {
  let shareId = getParam('shareId');
  let API = ''
  if (!shareId) {
    alert('信息获取失败');
    return;
  }
  //console.log(shareId);
  data = [ [ "20" ], [ "2018", "哈哈哈" ], [ "20", "24" ], [ "40", "20" ], [ "90" ], [ "哈哈哈" ], [ "level-plat", "badget-dawei", "badget-danshen", 'badget-huaxue'], ['Khalil']];
  fillData(data);

  return;
  // Now load
  $.ajax({
    type: "GET",
    data: {
      shareId: shareId
    },
    url: API + "/getShare"
  }).done(function(res) {
    if (res) {

    } else {
      alert('信息获取失败');
    }
  }).fail(function(jqXHR, textStatus, errorThrown) {

  });
}




$(document).ready(function() {
  setBg();
  getData();
});
